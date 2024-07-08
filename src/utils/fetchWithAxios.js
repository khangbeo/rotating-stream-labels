import axios from "axios";
const fetchWithAxios = async (url, options) => {
  const res = await axios.get(url, options);
  return res.data;
};

export default fetchWithAxios;
