import Hero from "./Hero"
import { useEffect, } from "react"
import { fetchProducts } from "../functions/productsSlice"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "./ProductCard"

const Home = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)
// console.log(products)
  useEffect(() => {
    dispatch(fetchProducts(12))
  }, [])

  if(loading){
    return <h1 className="text-center font-bold text-2xl">Loading...</h1>
  }
  if(error){
    return <h1 className="text-center font-bold text-2xl">{error.message}</h1>
  }
  // console.log(error)

  return (
    <div className="mx-40">
      <Hero/>
      <ul className="grid grid-cols-4">
        {products.products && products.products
        .map((item) => (
          <ProductCard key={item.id} item={item} />
        ))
        }
      </ul>
    </div>
  )
}

export default Home