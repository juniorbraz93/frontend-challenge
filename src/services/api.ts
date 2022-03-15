import axios from 'axios';

// https://wine-back-test.herokuapp.com/ <- URL

// products?page=1&limit=10 <- Rota de retorno dos produtos

const api = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/',
});

export default api;
