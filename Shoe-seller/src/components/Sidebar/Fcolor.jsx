import React from 'react'

const Fcolor = () => {
  const colorOptions = [
    { id: 'all', label: 'All', value: 'all', color: 'gray' },
    { id: 'red', label: 'Red', value: 'red', color: 'red' },
    { id: 'blue', label: 'Blue', value: 'blue', color: 'blue' },
    { id: 'green', label: 'Green', value: 'green', color: 'green' },
    { id: 'yellow', label: 'Yellow', value: 'yellow', color: 'yellow' },
    { id: 'black', label: 'Black', value: 'black', color: 'black' },
  ]

  return (
    <div className="p-4 border-b border-gray-200">
      <h3 className="font-semibold text-lg mb-3 text-gray-800">
        Filter by Color
      </h3>
      
      <section className="flex flex-col gap-3">
        {colorOptions.map((option) => (
          <div key={option.id} className="flex items-center gap-2">
            <input 
              type="radio" 
              id={option.id}
              name="Fcolor" 
              value={option.value}
              className="accent-blue-500 w-4 h-4 cursor-pointer"
            />
            <label 
              htmlFor={option.id}
              className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-500 transition-colors"
            >
              <span 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: option.color }}
              ></span>
              {option.label}
            </label>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Fcolor