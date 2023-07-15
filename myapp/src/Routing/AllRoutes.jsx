import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/ShoppingCart/Cart";
import Products from "../Pages/ShoppingCart/Products";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Movie from "../Pages/Movie/Movie";
import Todo from "../Pages/TodoList/Todo";
function AllRoutes() {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Products />} />
    </Routes>
}

export default AllRoutes