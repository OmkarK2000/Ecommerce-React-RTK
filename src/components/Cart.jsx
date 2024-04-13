import { useSelector, useDispatch } from "react-redux"
import { handleQuntity, removeFromCart } from "../functions/cartSlice"

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart)
  console.log(cartProducts.length)
  const dispatch = useDispatch()

  if(cartProducts.length <= 0){
    return <h1 className="text-center text-2xl font-bold">Cart is empty</h1>
  }

  return (
    <div className="mx-40">
      <ul>
        <table className="table-auto w-full">
          <thead className="my-5 ">
            <tr className="">
              <th className="border p-3">Image</th>
              <th className="border p-3">Product name</th>
              <th className="border p-3">Brand</th>
              <th className="border p-3">Description</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Quntity</th>
              <th className="border p-3">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts && cartProducts.map((item) => {
              return <tr key={item.id} className="">
                <td className="w-40 border p-3"><img className="w-full" src={item.images[0]} alt="" /></td>
                <td className="border p-3">{item.title}</td>
                <td className="border p-3">{item.brand}</td>
                <td className="border p-3">{item.description}</td>
                <td className="border p-3">{item.category}</td>
                <td className="border p-3">${item.totalPrice}</td>
                <td className="border p-3"><div className="flex">
                  <button className="bg-sky-400 rounded-md w-8  text-2xl text-white" onClick={()=>dispatch(handleQuntity({id: item.id, type : "DEC"}))}>-</button>
                  <span className="mx-2">{item.quntity}</span>
                  <button className="bg-sky-400 rounded-md w-8  text-2xl text-white" onClick={()=>dispatch(handleQuntity({id: item.id , type : "INC"}))}>+</button></div></td>
                <td className="border p-3"><button className="bg-sky-400 rounded-md px-3 py-1 text-white" onClick={() => dispatch(removeFromCart(item))}>X</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </ul>
      <div className="w-full flex justify-between mt-24">
        <div className="">
          <button className="bg-white border border-sky-400 rounded px-8 py-2 text-sky-400">CONTINUE SHOPPING</button>
          <h3 className="text-xl font-medium mt-10">Coupon</h3>
          <p className="my-4">Enter your coupon code ifyou have one.</p>
          <input type="text" placeholder="Coupon Code" className="border border-[#CED4DA] px-6 py-2 mr-8 w-80" />
          <button className="bg-sky-400 border border-sky-400 rounded px-6 py-2 text-white">APPLY COUPAN</button>
        </div>
        <div>
          <h2 className="text-2xl text-end font-normal ">CART TOTALS</h2>
          <hr className="mt-2 w-60 " />
          {/* <div className="flex justify-between my-10"><p>Total</p><p>${total}</p></div> */}
          <button className="bg-sky-400 text-white py-4 px-8 rounded">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart