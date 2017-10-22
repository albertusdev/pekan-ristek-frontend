import defaults from 'superagent-defaults';
import * as apiURL from '../common/apiUrl';

export const request = defaults();

export async function login({ username, password }) {
  return request.post(apiURL.login).send({ username, password });
}

export async function signup({
  email,
  first_name,
  institution,
  last_name,
  password,
  phone,
  username,
}) {
  return request.post(apiURL.signup).send({
    email,
    first_name,
    institution,
    last_name,
    password,
    phone,
    username,
  });
}

export default request;
