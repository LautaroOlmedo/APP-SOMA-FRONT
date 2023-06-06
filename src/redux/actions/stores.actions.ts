import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StoreType } from "../../pages/home/interfaces/store.interface";

export const loadStoresAction = createAsyncThunk("stores/getAll", async () => {
  try {
    const response = await axios.get<StoreType[]>(
      "http://localhost:8000/api/stores/all"
    );
    return response.data;
  } catch (e) {
    return "Error";
  }
});
