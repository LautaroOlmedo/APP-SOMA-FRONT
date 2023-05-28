import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "../../pages/home/interfaces/user.interface";

export const loadUsersAction = createAsyncThunk("products/getAll", async () => {
  try {
    const response = await axios.get<UserType[]>(
      "http://localhost:8000/api/users/all"
    );
    return response.data;
  } catch (e) {
    return "Error";
  }
});
