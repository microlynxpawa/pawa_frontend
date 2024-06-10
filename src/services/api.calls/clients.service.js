import http from "../httpService";

const apiPrefix = "/clients";

export function addNewClient(data) {
  return http.post(apiPrefix + "/new", data);
}

export function addNewBusinessClient(data) {
  return http.post(apiPrefix + "/business/new", data);
}

export function listAllClients() {
  return http.get(apiPrefix + "/allclients");
}
