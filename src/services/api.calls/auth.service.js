import http from "../httpService";

const apiPrefix = "/auth";

export function login(user) {
  return http.post(apiPrefix + "/login", user, {
    headers: {},
  });
}

export default currentUser;
