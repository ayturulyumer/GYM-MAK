const baseUrl = "http://192.168.3.136:5050"
import * as request from "../lib/request.js";

export const login = async (data) => {
  const result = await request.post(`${baseUrl}/admin/login`, data);
  return result;
};

export const logout = async () => {
  request.get(`${baseUrl}/admin/logout`);
};
