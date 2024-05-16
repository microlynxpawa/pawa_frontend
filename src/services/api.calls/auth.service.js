import http from "../httpService";

const authEndpoint = "/auth";

export function login(user) {
  return http.post(authEndpoint + "/login", user);
}

export default currentUser;
