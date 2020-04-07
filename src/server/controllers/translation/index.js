const kakaoApi = require('../../utils/api/kakaoApi');
const naverApi = require('../../utils/api/naverApi');

exports.translate = async (req, res, next) => {
  const { text, source, target } = req.query;
  try {
    const kakaoTranslatedText = await kakaoApi.translate({ text, source, target });
    const naverTranslatedText = await naverApi.translate({ text, source, target });
    res.json({
      kakao: kakaoTranslatedText.join('\n'),
      naver: naverTranslatedText,
    });
  } catch (err) {
    next(err);
  }
};