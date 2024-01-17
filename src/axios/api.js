import axios from "axios";

const BASE_URL = "https://www.quizess.store/api";

export const api = axios.create({
  baseURL: BASE_URL,

});
