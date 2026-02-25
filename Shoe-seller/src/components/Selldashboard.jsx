import React from 'react'
import { shoes } from '../Db/Data'

const Selldashboard = () => {
  return (
    <div className='flex flex-wrap gap-6 p-4'>
        {shoes.map((shoe) => (
            <div key={shoe.id} className='border border-gray-300 rounded-md p-4 w-64 hover:shadow-lg transition-shadow'>
                {/* Add the image */}
                <img 
                    src={shoe.image} 
                    alt={shoe.name}
                    className='w-full h-48 object-cover rounded-md mb-3'
                />
                
                <h2 className='text-lg font-bold mb-2'>{shoe.name}</h2>
                <p className='text-gray-600 mb-1'>
                    <span className='font-semibold'>Price:</span> ${shoe.price}
                </p>
                <p className='text-gray-600 mb-1'>
                    <span className='font-semibold'>Color:</span> {shoe.color}
                </p>
                <p className='text-gray-600 mb-1'>
                    <span className='font-semibold'>Size:</span> {shoe.sizes.join(', ')}
                </p>
                <p className='text-gray-600 mb-1'>
                    <span className='font-semibold'>Brand:</span> {shoe.brand}
                </p>
                <p className='text-gray-600 mb-1'>
                    <span className='font-semibold'>Category:</span> {shoe.category}
                </p>
                
                {/* Add rating display */}
                <div className='flex items-center mt-2'>
                    <span className='text-yellow-500'>★</span>
                    <span className='ml-1'>{shoe.rating}</span>
                    <span className='text-gray-400 ml-2'>({shoe.reviews})</span>
                </div>

                {/* Show stock status */}
                {!shoe.inStock && (
                    <p className='text-red-500 text-sm mt-2'>Out of Stock</p>
                )}
                
                {/* Show discount if available */}
                {shoe.discount > 0 && (
                    <p className='text-green-600 text-sm mt-1'>{shoe.discount}% OFF</p>
                )}
            </div>
        ))}
    </div>
  )
}

export default Selldashboard