import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../url";

export const register = createAsyncThunk("register", async (data, thunkApi) => {
  try {
    const response = await axios.post(apiUrl("/user/register"), data, {
      headers: {},
    });
    return response.data;
  } catch (e) {
    const { error } = e.response.data;
    return thunkApi.rejectWithValue(error ? error : e);
  }
});

export const login = createAsyncThunk("login", async (data, thunkApi) => {
  try {
    const response = await axios.post(apiUrl("/user/login"), data, {
      headers: {},
    });
    return response.data;
  } catch (e) {
    const { error } = e.response.data;
    return thunkApi.rejectWithValue(error ? error : e);
  }
});

export const checkIfUserCanRegister = createAsyncThunk(
  "check",
  async ({ userName }, thunkApi) => {
    try {
      const response = await axios.get(
        apiUrl("/user/canregister/" + userName),
        { userName },
        { headers: {} }
      );
      return response.data;
    } catch (e) {
      alert(e);
      return thunkApi.rejectWithValue();
    }
  }
);
