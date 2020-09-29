const kakaoApi = require('../../utils/api/kakaoApi');
const naverApi = require('../../utils/api/naverApi');
const googleApi = require('../../utils/api/googleApi');

exports.translate = async (req, res, next) => {
  const { text, source, target } = req.query;
  try {
    const [kakaoTranslatedText, naverTranslatedText, googleTranslatedText] = await Promise.all([
      kakaoApi.translate({ text, source, target }),
      naverApi.translate({ text, source, target }),
      googleApi.translate({ text, source, target }),
    ])
    res.json({
      kakao: kakaoTranslatedText.join('\n'),
      naver: naverTranslatedText,
      google: googleTranslatedText,
    });
  } catch (err) {
    next(err);
  }
};