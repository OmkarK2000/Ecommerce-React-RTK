import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../functions/productsSlice"
import { addToCart } from "../functions/cartSlice"


const SingleProduct = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(fetchProducts(0))
  }, [])


  const selectedProduct = products.products?.find((item) => item.id == id)

  // console.log(selectedProduct)

  const handleAddToCart = (item) => {
    const totalPrice = quantity * item.price
    dispatch(addToCart({ ...item, quantity: quantity, totalPrice }))
  }


  return (
    <div className="mx-40 ">
      <div className="flex">
        <div className="w-5/12">
          <img src={selectedProduct?.thumbnail} alt="" />
        </div>
        <div className="w-7/12  px-8">
          <h4 className="text-2xl font-bold">{selectedProduct?.title}</h4>
          <hr />
          <p>{selectedProduct?.description}</p>
          <div className="flex space-x-3">
            <span className="flex ">
              <p className="text-red-400">Rating:</p><p className="ml-1">{selectedProduct?.rating}</p>
            </span>
            <span className="w-[2px] bg-red-400"></span>
            <span className="flex ">
              <p className="text-red-400">Brand:</p><p className="ml-1">{selectedProduct?.brand}</p>
            </span>
            <span className="w-[2px] bg-red-400"></span>
            <span className="flex ">
              <p className="text-red-400">Category:</p><p className="ml-1">{selectedProduct?.category}</p>
            </span>
          </div>
          <div className="flex px-8 py-8">
            <p className="text-red-400 text-2xl ">${selectedProduct?.price}</p> <p className="bg-red-400 rounded text-white flex flex-col-reverse mt-2 ml-2">{selectedProduct?.discountPercentage}% OFF  </p>
          </div>
          <div className="flex">
            <button className="bg-sky-400 rounded-md px-3 py-1 text-white" onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)}>-</button>
            <p className="mx-2">{quantity}</p>
            <button className="bg-sky-400 rounded-md px-3 py-1 text-white" onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          <div className="mt-4">
            <button className="text-sky-400 rounded-md px-3 py-1 bg-white border-sky-400 border-2" onClick={()=>dispatch(handleAddToCart(selectedProduct))}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="w-5/12 flex  mt-4">
        <img className="w-1/4 " src={selectedProduct?.images[0]} alt="" />
        <img className="w-1/4 " src={selectedProduct?.images[1]} alt="" />
        <img className="w-1/4 " src={selectedProduct?.images[2]} alt="" />
        <img className="w-1/4 " src={selectedProduct?.images[3]} alt="" />
      </div>
    </div>
  )
}

export default SingleProduct