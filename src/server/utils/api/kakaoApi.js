const axios = require('axios');

exports.translate = async ({ text }) => {
  const options = {
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
    },
    params: {
      query: text,
      src_lang: 'kr',
      target_lang: 'en',
    },
  };
  const res = await axios.get('https://kapi.kakao.com/v1/translation/translate', options);
  return res.data.translated_text;
};