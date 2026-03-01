import { NavLink, useNavigate } from "react-router-dom";


const Navlink = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-row justify-between space-x-8 py-4">
          <NavLink to="/home" className={({ isActive }) => `text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300 text-lg font-medium ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300 text-lg font-medium ${isActive ? 'active' : ''}`}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300 text-lg font-medium ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          
          <button onClick={() => navigate("/login")} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Login</button>        </div>
      </div>
    </nav>
  );
};

export default Navlink;