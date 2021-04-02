import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3004/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export const apifetch = (requestConfig) => {
  return instance(requestConfig)
    .then((response) => response)
    .catch((error) => error);
};
