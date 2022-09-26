import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "react-cookies";
import { apiUrl } from "../../url";

const jwt = cookie.load("jwt");

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwt}`,
  },
};

export const register = createAsyncThunk("register", async (data, thunkApi) => {
  try {
    const response = await axios.post(
      apiUrl("/user/register"),
      data,
      axiosConfig
    );
    return response.data;
  } catch (e) {
    const { error } = e.response.data;
    return thunkApi.rejectWithValue(error ? error : e);
  }
});

export const login = createAsyncThunk("login", async (data, thunkApi) => {
  try {
    const response = await axios.post(apiUrl("/user/login"), data, axiosConfig);
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
        axiosConfig
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue();
    }
  }
);

export const getMe = createAsyncThunk("getMe", async (data, thunkApi) => {
  try {
    const response = await axios.get(apiUrl("/user/getme"), axiosConfig);
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue();
  }
});
