/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Book Of India';
const GET_FACT_MESSAGE = 'Here\'s your fact: ';
const HELP_MESSAGE = 'You can say tell me a fact about India, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
  'India is about 1/3 the size of the United States, yet it is the second most populous country in the world, with a population of 1,166,079,217.',
  'India is the seventh largest country in the world, at 1.27 million square miles.',
  'India is the birthplace of chess. The original word for “chess” is the Sanskrit chaturanga, meaning “four members of an army”—which were mostly likely elephants, horses, chariots, and foot soldiers.',
  'The Indian flag has three horizontal bands of color: saffron for courage and sacrifice, white for truth and peace, and green for faith, fertility, and chivalry. An emblem of a wheel spinning used to be in the center of the white band, but when India gained independence, a Buddhist dharma chakra, or wheel of life, replaced the spinning wheel.',
  'Indians made significant contributions to calculus, trigonometry, and algebra. The decimal system was invented in India in 100 B.C. The concept of zero as a number is also attributed to India.',
  'The earliest cotton in the world was spun and woven in India. Roman emperors would wear delicate cotton from India that they would call “woven winds.” Mogul emperors called the fabrics “morning dew” and “cloth of running water.”',
  'The Kumbh Mela (or Grand Pitcher Festival) is a huge Hindu religious festival that takes place in India every 12 years. In 2001, 60 million people attended, breaking the record for the world’s biggest gathering. The mass of people was photographed from space by a satellite.',
  'With 150,000 post offices, India has the largest postal network in the world.',
  'India has the world’s largest movie industry, based in the city of Mumbai (known as the “City of Dreams”). The B in “Bollywood” comes from Bombay, the former name for Mumbai. ',
  'Most historians agree that the first recorded account of plastic surgery is found in ancient Indian Sanskrit texts.',
  'Hindi and English are the official languages of India. The government also recognizes 17 other languages. Apart from these languages, about 1,652 dialects are spoken in the country.',
  'India has the world’s third largest road network at 1.9 million miles. It also has the world’s second largest rail network, which is the world’s largest civilian employer with 16 million workers.',
  'India is the world’s largest tea producer, and tea (chai) is its most popular beverage.',
  'The Golden Temple in India feeds a vegetarian meal to over 100,000 people a day regardless of race, religion and class.',
  'Bandra Worli Sealink Bridge in Mumbai has steel wires equal to the earth\'s circumference.It took a total of 2,57,00,000 man hours for completion and also weighs as much as 50,000 African elephants.',
  'At an altitude of 2,444 meters, the Chail Cricket Ground in Chail, Himachal Pradesh, is the highest in the world. It was built in 1893 and is a part of the Chail Military School.',
  'India has won all 5 men\'s Kabaddi World Cups held till now and have been undefeated throughout these tournaments. The Indian women\'s team has also won all Kabaddi World Cups held till date.',
  'In September 2009, India\'s ISRO Chandrayaan- 1 using its Moon Mineralogy Mapper detected water on the moon for the first time.',
  'Science day in Switzerland is dedicated to Ex-Indian President, APJ Abdul Kalam.',
  'When Dr Rajendra Prasad was appointed the President of India, he only took 50% of his salary, claiming he did not require more than that. Towards the end of his 12-year tenure he only took 25% of his salary. The salary of the President was Rs 10,000 back then.',
  'India is second only to the USA when it comes to speaking English with around 125 million people speaking the language, which is only 10% of India\'s population.',
  'India was the first country to develop extraction and purifying techniques of sugar.',
  'Shakuntla Devi was given the title of The Human Calculator after she demonstrated the calculation of two 13 digit numbers: 7,686,369,774,870 × 2,465,099,745,779 which were picked at random. She answered correctly within 28 seconds.',
  'Freddie Mercury, the legendary singer of the rock band \'Queen\' was born a Parsi with the name Farrokh Bulsara while the famous Oscar winning Hollywood star Ben Kingsley was born Krishna Pandit Bhanji.',
  'Diamonds were first mined in India. Initially, diamonds were only found in the alluvial deposits in Guntur and Krishna District of the Krishna River Delta. Until diamonds were found in Brazil during the 18th century, India led the world in diamond production.',
  'Snakes and Ladders originated in India. Earlier known as Moksha Patamu, the game was initially invented as a moral lesson about karma to be taught to children. It was later commercialized and has become one of the most popular board games in the world.',
  'India has 300,000 mosques which are more than any Islamic nation.',
  'The Biggest Air Evacuation in the History of Mankind Was Done by India.',
  'Only for India, KFC had to introduce a “vegetarian” menu.',
  'The IPL (Indian Premier League) is the most-attended cricket league in the world and ranks sixth among all sports leagues.',
  'Taj Mahal was covered with a huge scaffold during World War 2 to make it look like a stockpile of Bamboo and misguide any enemy bombers.',
  'The Bailey Bridge is the highest bridge in the world. It is located in the Ladakh Valley, India.',
  'World’s first and oldest university was established in India named “Takshashila”.',
  'USB was developed by an Indian-American computer architect, Ajay Bhatt.',
  
  
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
