import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BrandType } from "../../pages/home/interfaces/brand.interface";

export const loadBrandsAction = createAsyncThunk("brands/getAll", async () => {
  try {
    const response = await axios.get<BrandType[]>(
      "http://localhost:8000/api/brands/all"
    );
    return response.data;
  } catch (e) {
    return "Error";
  }
});
