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

export const getchatuser = createAsyncThunk(
  "getchatuser",
  async ({ id }, thunkApi) => {
    try {
      const response = await axios.get(
        apiUrl("/chats/getuser/" + id),
        axiosConfig
      );
      return response.data;
    } catch (e) {
      const { error } = e.response.data;
      return thunkApi.rejectWithValue(error ? error : e);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "sendMessage",
  async ({ id, message }, thunkApi) => {
    try {
      const response = await axios.post(
        apiUrl("/chats/sendmessage/" + id),
        { message },
        axiosConfig
      );
      return response.data;
    } catch (e) {
      const { error } = e.response.data;
      return thunkApi.rejectWithValue(error ? error : e);
    }
  }
);

export const getConversation = createAsyncThunk(
  "getconversation",
  async ({ id }, thunkApi) => {
    try {
      const response = await axios.get(
        apiUrl("/chats/getconversation/" + id),
        axiosConfig
      );
      return response.data;
    } catch (e) {
      const { error } = e.response.data;
      return thunkApi.rejectWithValue(error ? error : e);
    }
  }
);
