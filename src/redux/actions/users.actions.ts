import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "../../pages/home/interfaces/user.interface";

export const loadUsersAction = createAsyncThunk("users/getAll", async () => {
  try {
    const response = await axios.get<UserType[]>(
      "http://localhost:8000/api/users/all"
    );
    return response.data;
  } catch (e) {
    return "Error";
  }
});

export const createUserAction = createAsyncThunk(
  "users/create",
  async (newUser: UserType) => {
    try {
      const response = await axios.post<UserType>(
        "http://localhost:8000/api/users/register",
        newUser
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al crear el usuario");
    }
  }
);
