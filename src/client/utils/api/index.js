import axios from 'axios';

const getTranslation = ({ text }) => {
  const options = {
    params: {
      text,
    },
  };
  return axios.get('/api/v1/translation', options);
};

export default {
  getTranslation,
};