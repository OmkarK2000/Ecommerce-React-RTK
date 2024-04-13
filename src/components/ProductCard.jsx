/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { addToCart } from "../functions/cartSlice"
import {  useState } from "react"
import { FaHeart } from "react-icons/fa";
import { addToFavourite, removeFromFavourite } from "../functions/favouriteSlice";
import { IoMdClose } from "react-icons/io";

const ProductCard = ({ item,isFavourite }) => {
  // console.log(item)
  const {  discountPercentage, images, price, title } = item
  // console.log(images)
  const [quntity, setQuntity] = useState(1)

  
  
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    const totalPrice = quntity * item.price
    dispatch(addToCart({ ...item, quntity: quntity, totalPrice }))
  }
  return (
    <div className="w-60 py-3 mx-2  my-2 px-2 border flex flex-col justify-center items-center">
      <div className="w-44 h-44 ">
        <img className="w-full h-full object-contain" src={images[0]} alt="" />
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