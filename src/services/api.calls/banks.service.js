import http from "../httpService";

const apiPrefix = "/banks";

export function getBankBranches(data) {
  return http.post(apiPrefix + "/branches", data);
}
