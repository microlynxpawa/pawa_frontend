import http from "../httpService";

const apiPrefix = "/auth";

export function login(user) {
  return http.post(apiPrefix + "/login", user);
}

export function signup(user) {
  return http.post(apiPrefix + "/pendingsignup", user);
}

export function verifyCode(data) {
  return http.post(apiPrefix + "/verifycode", data);
}

export function resendCode(data) {
  return http.post(apiPrefix + "/code/resend", data);
}
