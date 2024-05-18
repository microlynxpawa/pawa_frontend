import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//DECIDE LATER WHERE TO KEEP THE HEADER IN THE FRONTEND.
axios.defaults.headers.common["authentication-token"] = "a1b2c3d4e5f6g7h8";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    //LOG THIS USING WINSTON.
    console.log("Error ", error);
  }
  return Promise.reject(error);
});

const endpoints = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

export default endpoints;
