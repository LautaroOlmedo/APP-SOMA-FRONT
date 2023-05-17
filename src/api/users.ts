import { instance } from "./base.api";
const endpoint = "users/all";

export const users = {
  getAll: function () {
    return instance.get(endpoint);
  },
  getById: function ({ id }: { id: number }) {
    return instance.get(`${endpoint}/${id}`);
  },
};
