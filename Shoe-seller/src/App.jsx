import { useState } from "react"
import Input from "./Navbar/Input"
import Account from "./Navbar/Account"
import Help from "./Navbar/Help"
import Cart from "./Navbar/Cart"
import CompanyIcon from "./Navbar/CompanyIcon"
import Home from "./pages/Home"
import Navlink from "./components/Navlink"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom'
import Rootlayout from "./Layout/Rootlayout"
import Products from "./pages/Products"
import Login from "./pages/Login"
import About from "./pages/About"
//database

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout searchTerm={searchTerm} />} >
        <Route index element={<Home searchTerm={searchTerm} />} />
        <Route path="home" element={<Home searchTerm={searchTerm} />} />
        <Route path="products" element={<Products searchTerm={searchTerm} />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  )

  return (
    <div className="min-h-screen bg-gray-100">
     
      <section className="flex justify-between items-center p-4 bg-white shadow-md">
        <CompanyIcon  />
        <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
       <section className="flex items-center gap-5">
          <Help />
          <Cart />
          <Account />
       </section>
      </section>
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App