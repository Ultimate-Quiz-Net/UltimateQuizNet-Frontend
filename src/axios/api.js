import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = "https://www.quizess.store/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((api) => {
  const access_token = Cookies.get("access_token");
  const refresh_token = Cookies.get("refresh_token");

  if (api.url === "/api/sign-in") {
    api.headers.Refresh = refresh_token;
  } else {
    api.headers.Authorization = access_token;
  }
  return api;
});
