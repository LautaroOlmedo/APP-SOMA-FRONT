import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/login",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        credentials
      );
      return response.data;
    } catch (e: any) {
      if (e.response) {
        // Si el servidor responde con un código de error y datos de error
        return rejectWithValue(e.response.data);
      } else {
        // Si ocurre un error de red u otro tipo de error
        throw e;
      }
    }
  }
);
