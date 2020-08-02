import axios from 'axios';

const apiServer = axios.create({
  baseURL: process.env.API_HOST || '',
});

const getTranslation = ({ text, source, target }) => {
  const options = {
    params: {
      text,
      source,
      target,
    },
  };
  return apiServer.get('/api/v1/translation', options);
};

export default {
  getTranslation,
};