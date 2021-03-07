const kakaoApi = require('../../utils/api/kakaoApi');
const naverApi = require('../../utils/api/naverApi');
const googleApi = require('../../utils/api/googleApi');

const normalizeResults = results => {
  if (results.status === 'rejected') {
    return '에러';
  }
   
  if (Array.isArray(results.value)) {
    return results.value.join('\n');
  }

  return results.value;
};

exports.translate = async (req, res, next) => {
  const { text, source, target } = req.query;
  try {
    const [kakaoResults, naverResults, googleResults] = await Promise.allSettled([
      kakaoApi.translate({ text, source, target }),
      naverApi.translate({ text, source, target }),
      googleApi.translate({ text, source, target }),
    ]);

    res.json({
      kakao: normalizeResults(kakaoResults),
      naver: normalizeResults(naverResults),
      google: normalizeResults(googleResults),
    });
  } catch (err) {
    next(err);
  }
};