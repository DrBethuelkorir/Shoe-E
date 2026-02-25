import { useState } from "react"
import Input from "./Navbar/Input"
import Account from "./Navbar/Account"
import Help from "./Navbar/Help"
import Cart from "./Navbar/Cart"
import CompanyIcon from "./Navbar/CompanyIcon"
import Body from "./components/Body"

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

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
      <section>
        <Body />
      </section>
    </div>
  )
}

export default App