import http from "../httpService";

const apiPrefix = "/products";

export function addNewGLSetting(data) {
  return http.post(apiPrefix + "/glsettings/new", data);
}

export function listBankProducts(data) {
  return http.post(apiPrefix + "/bank-products", data);
}

export function listBankGLSettings(data) {
  return http.post(apiPrefix + "/glsettings/all", data);
}
