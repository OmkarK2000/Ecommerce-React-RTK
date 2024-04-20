import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Search from "./components/Search"
import Favourite from "./components/Favourite"
import SingleProduct from "./components/SingleProduct"

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/favourite" element={<Favourite/>} />
          <Route path="/product/:id" element={<SingleProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App