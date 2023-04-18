import { instance } from "./base.api";
const endpoint = "brands/all";

export const brands = {
  getAll: function () {
    return instance.get(endpoint);
  },
  getById: function ({ id }: { id: number }) {
    return instance.get(`${endpoint}/${id}`);
  },
};
