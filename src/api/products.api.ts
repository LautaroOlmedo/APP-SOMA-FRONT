import { instance } from "./base.api";
const endpoint = "products/all";
const createEndpoint = "products/register";

export const products = {
  getAll: function () {
    return instance.get(endpoint);
  },
  getById: function ({ id }: { id: number }) {
    return instance.get(`${endpoint}/${id}`);
  },
  create: function () {
    return instance.post(`${createEndpoint}`);
  },
};
