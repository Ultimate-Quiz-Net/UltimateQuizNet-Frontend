// api.js 파일

import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const api = axios.create({
	baseURL: BASE_URL,
});
