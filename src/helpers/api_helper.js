import axios from "axios";
// import accessToken from "./jwt-token-access/accessToken";

//pass new generated access token here
// const token = accessToken;

//apply base url for axios
const API_URL = process.env.REACT_APP_BASE_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

// axiosApi.defaults.headers.common["Authorization"] = token;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  try {
    const result = await axiosApi
      .get(url, { ...config })
      return result

  } catch (error) {
    throw error
  }
}

export async function post(url, data, config = {}) {
  try {
     const result =  await axiosApi
      .post(url, { ...data }, { ...config })
      return result.data
  } catch (error) {
    throw error
  }
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
