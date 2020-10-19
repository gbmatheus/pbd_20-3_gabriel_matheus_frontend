import axios from 'axios';
import {getUsuarioAuth} from './auth';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  
})

api.interceptors.request.use(async config => {
  const usuario = getUsuarioAuth();

  if(usuario) {
    config.auth = {
      username: usuario.login,
      password: usuario.senha
    }
  }

  return config;

})

export default api;