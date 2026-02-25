import { MdAccountCircle } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import {useState} from 'react'

const Account = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleclick = () => {
        console.log("clicked")
        setIsOpen(!isOpen)
    }
  return (
    <div className="relative" >
        <section className='flex items-center gap-1 cursor-pointer font-large' onClick={() => handleclick()} >
        <MdAccountCircle className="w-10 h-10" />
        <h3 style={{}}>Account</h3>
        {isOpen ? <RiArrowDropUpLine  className="w-10 h-10"/> : <RiArrowDropDownLine className="w-10 h-10" />}
        </section>
        {isOpen && (
            <section className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Orders</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
            </section>
        )}
    </div>
  )
}

export default Account