import axios, { AxiosRequestConfig } from "axios";

const fetchWithAxios = async (url: string, options: AxiosRequestConfig) => {
  const res = await axios.get(url, options);
  return res.data;
};

export default fetchWithAxios;
