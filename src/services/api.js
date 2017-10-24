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

export async function getUser({ id }) {
  return request.get(apiURL.user(id));
}

export async function patchUser({ id, ...rest }) {
  return request.patch(apiURL.user(id)).send({ ...rest });
}

export async function updatePassword({ id, old_password, password }) {
  return request.post(apiURL.updatePassword(id)).send({ old_password, password });
}

export default request;
