import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';  // Updated base URL

function setAuthorizationToken(token) {
    axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
}

export const register = createAsyncThunk("/users/register", async (credentials, thunkAPI) => {
    try {
        const res = await axios.post("/users/signup", credentials);  // Updated endpoint
        setAuthorizationToken(res.data.token);
        return res.data;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const login = createAsyncThunk("/users/login", async (credentials, thunkAPI) => {
    try {
        const res = await axios.post("/users/login", credentials);  // Updated endpoint
        setAuthorizationToken(res.data.token);
        return res.data;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logout = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
    try {
        const res = await axios.post("/users/logout");  // Updated endpoint
        setAuthorizationToken("");
        return res.data;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const me = createAsyncThunk("/users/me", async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;
    if (token) {
        setAuthorizationToken(token);
        try {
            const res = await axios.get("/users/me");  // Updated endpoint
            return res.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
    return thunkAPI.rejectWithValue("No token");
});
