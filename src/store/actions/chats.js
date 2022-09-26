import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../url";

export const getchatuser = createAsyncThunk(
  "getchatuser",
  async ({ id }, thunkApi) => {
    try {
      const response = await axios.get(
        apiUrl("/chats/getuser/" + id),
        undefined,
        {
          headers: {},
        }
      );
      return response.data;
    } catch (e) {
      const { error } = e.response.data;
      return thunkApi.rejectWithValue(error ? error : e);
    }
  }
);
