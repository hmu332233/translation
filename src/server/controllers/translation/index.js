const kakaoApi = require('../../utils/api/kakaoApi');

exports.translate = async (req, res, next) => {
  const { text } = req.query;
  try {
    const kakaoTranslatedText = await kakaoApi.translate({ text });
    res.json({
      kakao: kakaoTranslatedText.join('\n'),
    });
  } catch (err) {
    next(err);
  }
};