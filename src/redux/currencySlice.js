import { createSlice } from "@reduxjs/toolkit";
import { featchBaseCurrency } from "./operations";

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        baseCurrency: '',
      },  
    extraReducers: {
      [featchBaseCurrency.fulfilled] : (state, action) => {
        state.baseCurrency = action.payload
      }
     },
});

//export const (setBaseCurrency) = currencySlice;