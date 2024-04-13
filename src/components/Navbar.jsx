import { Link } from "react-router-dom"
import { FaHeart, FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-40 h-20 bg-white">
      <div><Link to="/"><h3 className="font-bold text-3xl">Logo</h3></Link></div>
      <div className="text-lg flex items-center space-x-3 list-none">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/search"><FaSearch /></Link></li>
        <li><Link to="/favourite"><FaHeart /></Link></li>
        <li><Link to="/cart"><FaShoppingCart /></Link></li>
        <li><Link to="/login"><FaUser /></Link></li>
      </div>
    </div>
  )
}

export default Navbar