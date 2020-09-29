const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate();

const mapToLanguageCode = language => {
  switch (language) {
    case 'ko':
    case 'kr':
      return 'ko';
    case 'en':
      return 'en';
    case 'jp':
    case 'ja':
      return 'ja';
    default:
      return 'ko';
  }
};

exports.translate = async ({ text, source = 'kr', target = 'en' }) => {
  const options = {
    from: mapToLanguageCode(source),
    to: mapToLanguageCode(target),
  };
  let [translations] = await translate.translate(text, options);
  translations = Array.isArray(translations) ? translations : [translations];
  return translations.join('\n');
};

