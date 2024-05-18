import http from "../httpService";

const apiPrefix = "/auth";

export function login(user) {
  return http.post(apiPrefix + "/login", user);
}

export function signup(user) {
  return http.post(apiPrefix + "/pendingsignup", user);
}
