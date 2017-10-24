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

export async function updatePassword({ id, old_password, new_password }) {
  return request.post(apiURL.updatePassword(id)).send({ old_password, new_password });
}

export async function joinTeam({ token }) {
  return request.post(apiURL.joinTeam).send({ team_token: token });
}

export async function createTeam({ name, competition }) {
  return request.post(apiURL.createTeam).send({ name, competition });
}

export async function getTeam({ code }) {
  return request.get(apiURL.team(code));
}

export default request;
