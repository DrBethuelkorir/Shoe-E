import React from 'react'
import { Link } from "react-router-dom"

const Loginbutton = ({login, create}) => {
  return (
    <div>
        <section>
            <Link to={create === "Login" ? "/login" : "/signup"} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300">
                {create}
            </Link>
        </section>
    </div>
  )
}

export default Loginbutton