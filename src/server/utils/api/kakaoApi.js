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
      return 'kr';
  }
};

exports.translate = async ({ text, source = 'kr', target = 'en' }) => {
  const options = {
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
      query: text,
      src_lang: mapToLanguageCode(source),
      target_lang: mapToLanguageCode(target),
    },
  };
  try {
    const res = await axios.get('https://dapi.kakao.com/v2/translation/translate', options)
    return res.data.translated_text;
  } catch (err) {
    return err.response.data.msg;
  }
};