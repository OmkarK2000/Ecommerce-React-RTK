// import Hero from "./Hero"
import { useEffect, } from "react"
import { fetchProducts } from "../functions/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "./ProductCard"

const Home = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.app)
  console.log(products[0]?.products)

  useEffect(() => {
    dispatch(fetchProducts())
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
      {/* <Hero/> */}
      <ul className="flex flex-wrap">
        {products[0]?.products && products[0]?.products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default Home