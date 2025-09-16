import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function apiUser(
  method: "get" | "post" | "patch" | "delete",
  url: string,
  data?: any
) {
  try {
    const response = await api.request({ method, url, data });
    return { data: response.data };
  } catch (err: any) {
    return { error: err.response?.data?.message || "Request failed" };
  }
}

export default api;
