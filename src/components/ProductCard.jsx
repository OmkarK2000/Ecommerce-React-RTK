
const ProductCard = ({ item }) => {
  console.log(item)
  const { brand, category, description, discountPercentage, images, price, rating, stock, thumbnail, title } = item
  // console.log(images)
  return (
    <div className="w-60 h-60 mx-2  my-2 px-2 bg-gray-400 flex flex-col justify-center items-center">
      <div className="w-44 h-44 ">
        <img className="w-full h-full object-contain" src={images[1]} alt="" />
      </div>
      <div className="w-full">
        <p >{title}</p>
        <div className="flex space-x-2 ">
          <p>${price}</p>
          <p>{discountPercentage}% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard