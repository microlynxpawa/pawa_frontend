import http from "../httpService";

const apiPrefix = "/glaccount";

export function addNewGLSetting(data) {
  return http.post(apiPrefix + "/new", data);
}

export function listBankGLAccount(data) {
  return http.post(apiPrefix + "/bank-glaccount", data);
}
