const axios = require('axios');

const mapToLanguageCode = language => {
  switch (language) {
    case 'ko':
    case 'kr':
      return 'ko';
    case 'en':
      return 'en';
    case 'jp':
    case 'ja':
      return 'ja';
    default:
      return 'ko';
  }
};

exports.translate = async ({ text, source = 'ko', target = 'en' }) => {
  const data = {
    text,
    source: mapToLanguageCode(source),
    target: mapToLanguageCode(target),
  };
  const options = {
    headers: {
      'X-Naver-Client-Id': `${process.env.NAVER_CLIENT_ID}`,
      'X-Naver-Client-Secret': `${process.env.NAVER_CLIENT_SECRET}`,
    },
  };
  const res = await axios.post('https://openapi.naver.com/v1/papago/n2mt', data, options);
  return res.data.message.result.translatedText;
};