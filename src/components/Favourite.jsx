import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"


const Favourite = () => {
  const {favouriteCart} = useSelector((state)=> state.favourite)

  if(favouriteCart.length < 1){
    return <h1 className="text-center text-2xl font-bold">No favourite items</h1>
  }

  return (
    <div className="mx-40">
      <ul className="grid grid-cols-4">
        {favouriteCart && favouriteCart
        .map((item) => (
          <ProductCard key={item.id} item={item} isFavourite={"yes"} />
        ))
        }
      </ul>
    </div>
  )
}

export default Favourite