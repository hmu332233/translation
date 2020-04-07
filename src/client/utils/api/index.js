import axios from 'axios';

const getTranslation = ({ text, source, target }) => {
  const options = {
    params: {
      text,
      source,
      target,
    },
  };
  return axios.get('/api/v1/translation', options);
};

export default {
  getTranslation,
};