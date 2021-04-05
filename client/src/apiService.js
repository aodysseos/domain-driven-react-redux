import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3004",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

const apifetch = (requestConfig) => {
  return instance(requestConfig)
    .then((response) => response)
    .catch((error) => error);
};

export const apifetchStores = async () => {
  try {
    const requestConfig = { method: "get", url: "/stores" };
    const response = await apifetch(requestConfig);
    return response.data;
  } catch (e) {
    return `Failed to fetch stores: ${e}`;
  }
};

export const apifetchProducts = async () => {
  try {
    const requestConfig = { method: "get", url: "/products" };
    const response = await apifetch(requestConfig);
    return response.data;
  } catch (e) {
    return `Failed to fetch products: ${e}`;
  }
};
