/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { addToCart } from "../functions/cartSlice"
import {  useState } from "react"
import { FaHeart } from "react-icons/fa";
import { addToFavourite, removeFromFavourite } from "../functions/favouriteSlice";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item,isFavourite }) => {
  // console.log(item)
  const {  discountPercentage, thumbnail, price, title,id } = item
  // console.log(images)
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    const totalPrice = quantity * item.price
    dispatch(addToCart({ ...item, quantity: quantity, totalPrice }))
  }
  return (
    <div className="w-60 py-3 mx-2  my-2 px-2 border flex flex-col justify-center items-center" >
      <div className="w-44 h-44 ">
        <img className="w-full h-full object-contain cursor-pointer" src={thumbnail} alt="" onClick={()=> navigate(`/product/${id}`)} />
      </div>
      <div className="w-full space-y-2">
        <p className="text-md font-bold">{title}</p>
        <div className="flex space-x-2 ">
          <p>${price}</p>
          <p>{discountPercentage}% off</p>
        </div>
        <div className="flex justify-around">
          <button className="bg-sky-400 rounded-md px-3 py-1 text-white" onClick={() => handleAddToCart(item)}>Add To Cart</button>
          <button className="bg-sky-400 rounded-md px-3 py-1 text-white" onClick={()=> isFavourite === "yes" ? dispatch(removeFromFavourite(item.id)) : dispatch(addToFavourite(item))}>{isFavourite === "yes" ? <IoMdClose />  :<FaHeart/>}</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard