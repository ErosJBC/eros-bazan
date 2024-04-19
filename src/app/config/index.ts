import axios from "axios";
import { BASE_URL } from "../constants";

export const API_INSTANCE = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
	withCredentials: false,
});

