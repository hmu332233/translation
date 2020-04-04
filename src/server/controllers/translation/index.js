const kakaoApi = require('../../utils/api/kakaoApi');
const naverApi = require('../../utils/api/naverApi');

exports.translate = async (req, res, next) => {
  const { text } = req.query;
  try {
    const kakaoTranslatedText = await kakaoApi.translate({ text });
    const naverTranslatedText = await naverApi.translate({ text });
    res.json({
      kakao: kakaoTranslatedText.join('\n'),
      naver: naverTranslatedText,
    });
  } catch (err) {
    next(err);
  }
};