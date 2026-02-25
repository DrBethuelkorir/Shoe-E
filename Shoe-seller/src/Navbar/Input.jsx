import React from 'react'

const Input = ({searchTerm, setSearchTerm}) => {
    const handleSubmit = (searchTerm) => {
        setSearchTerm("")
    }
  return (
    <div className='flex items-center gap-5'>
        <input type="text" 
        placeholder='Search for shoes'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 '
        />
        <button onClick={() => handleSubmit(searchTerm)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Search</button>
    </div>
  )
}

export default Input