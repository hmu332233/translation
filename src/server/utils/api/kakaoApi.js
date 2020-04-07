const axios = require('axios');

const mapToLanguageCode = language => {
  switch (language) {
    case 'ko':
    case 'kr':
      return 'kr';
    case 'en':
      return 'en';
    case 'jp':
    case 'ja':
      return 'jp';
    default:
      return 'ko';
  }
};

exports.translate = async ({ text, source = 'kr', target = 'en' }) => {
  const options = {
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
    },
    params: {
      query: text,
      src_lang: mapToLanguageCode(source),
      target_lang: mapToLanguageCode(target),
    },
  };
  const res = await axios.get('https://kapi.kakao.com/v1/translation/translate', options);
  return res.data.translated_text;
};