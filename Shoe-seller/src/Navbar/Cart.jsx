import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";

const Cart = () => {

    const[isOpen, setIsOpen] = useState(false);

    const handleclick = () => {
        // alert("Your cart is empty")
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <section onClick={() => handleclick()}className=" relative flex items-center gap-5 cursor-pointer font-large " >
        <CiShoppingCart className="w-10 h-10" />
        <h3>Cart</h3>
        </section>
        {isOpen && (
        <section className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">View Cart</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Checkout</a>
        </section>)
        }
    </div>
  )
}

export default Cart