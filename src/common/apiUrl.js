import config from '../config';

export const base = uri => config.API_URL + uri;
export const productList = page => base(`/products/?page=${page}`);
export const productDetail = id => base(`/products/${id}`);

export const ssoLOGIN = base('/api/cas-login/');
export const login = base('/api/login/');
export const signup = base('/api/signup/');
