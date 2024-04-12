import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  itemsCount: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart) {
        state.cartProducts = state.cartProducts.map((item)=>{
          if(item.id === action.payload.id){
            let tempQuntity = item.quntity + action.payload.quntity
            let tempTotalPrice = tempQuntity * item.price
            return{
              ...item , quntity : tempQuntity, totalPrice : tempTotalPrice
            }
          }else{
            return item
          }
        })
        
        console.log(state.cartProducts)
      }else{
        state.cartProducts.push(action.payload);
      }
    },

    removeFromCart : (state, action) =>{
      state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload.id)
    },

    handleQuntity : (state, action) => {
      state.cartProducts = state.cartProducts.map((item)=>{
        if(item.id === action.payload.id){
          if(action.payload.type === "INC"){
            item.quntity++
          }
          if(action.payload.type === "DEC"){
            if(item.quntity > 1){
              item.quntity--
            }
          }
          return {...item}
        }else{
          return item
        }
      })
    }
  },
});

export const { addToCart, removeFromCart, handleQuntity } = cartSlice.actions;
export default cartSlice.reducer;
