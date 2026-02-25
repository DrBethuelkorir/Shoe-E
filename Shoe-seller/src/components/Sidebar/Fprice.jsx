import React from 'react'

const Fprice = () => {
  const priceOptions = [
    { id: 'cheapest', label: 'Cheapest', value: 'cheapest' },
    { id: 'expensive', label: 'Expensive', value: 'expensive' },
    { id: 'midrange', label: 'Mid Range', value: 'midrange' },
    { id: 'premium', label: 'Premium', value: 'premium' },
  ]

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <section className="flex flex-col gap-3">
        <h1 className="text-lg font-semibold text-gray-800 mb-2">
          Filter By Price
        </h1>
        
        {priceOptions.map((option) => (
          <div key={option.id} className="flex items-center gap-2">
            <input 
              type="radio" 
              id={option.id}
              name="Fprice" 
              value={option.value}
              className="accent-blue-500 w-4 h-4 cursor-pointer"
            />
            <label 
              htmlFor={option.id}
              className="text-gray-700 cursor-pointer hover:text-blue-500 transition-colors"
            >
              {option.label}
            </label>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Fprice