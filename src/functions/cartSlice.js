import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products  : [],
  cart : [],
  loading : false,
  error : null,
}

export const fetchProducts = createAsyncThunk("fetchProducts", async(args, {rejectWithValue})=>{
  try{
    const response = await fetch("https://dummyjson.com/products?limit=0")
    const result = await response.json()
    return result
  }catch(err){
    return rejectWithValue(err)
  }
})  

export const cartSlice = createSlice({
  name : "cartSlice",
  initialState,
  extraReducers : (builder) =>{
    builder
      .addCase(fetchProducts.pending, (state)=>{
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action)=>{
        state.products.push(action.payload)
        state.loading = false
      })
      .addCase(fetchProducts.rejected, (state, action)=>{
        state.error = action.payload
        state.loading = false
      })
  }
}) 

export default cartSlice.reducer;