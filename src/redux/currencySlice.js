import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        baseCurrency: '',
      },  
    extraReducers: {}
});

//export const (setBaseCurrency) = currencySlice;