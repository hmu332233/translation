const axios = require('axios');

exports.translate = async ({ text, source = 'kr', target = 'en' }) => {
  const options = {
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
    },
    params: {
      query: text,
      src_lang: source,
      target_lang: target,
    },
  };
  const res = await axios.get('https://kapi.kakao.com/v1/translation/translate', options);
  return res.data.translated_text;
};