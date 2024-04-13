import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteCart : []
}

export const favouriteSlice = createSlice({
  name : "favouritie",
  initialState,
  reducers : {
    addToFavourite : (state, action)=>{
      const isItemIsFavourite = state.favouriteCart.find(item=>(
        item.id === action.payload.id
      ))
      if(isItemIsFavourite){
        // console.log("isItme")
        return
      }else{
        console.log(state.favouriteCart)
        state.favouriteCart.push(action.payload)
      }

    },
    removeFromFavourite : (state, action)=>{
      state.favouriteCart = state.favouriteCart.filter((item)=>(
        item.id !== action.payload
      ))
    }
    
  }
})

export const {addToFavourite, removeFromFavourite} = favouriteSlice.actions

export default favouriteSlice.reducer