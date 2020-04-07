const axios = require('axios');

exports.translate = async ({ text, source = 'ko', target = 'en' }) => {
  const data = {
    text,
    source,
    target,
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