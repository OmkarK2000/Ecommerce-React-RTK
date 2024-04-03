import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Search from "./components/Search"

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App