import React from 'react'
import FilterbyColourPrice from './Sidebar/FilterbyColourPrice'
import { shoes } from '../Db/Data'

const Body = ({searchTerm}) => {
  return (
    <div className='flex flex-col md:flex-row gap-10 p-4'>
        <section className=''>
          <FilterbyColourPrice />
        </section>
        <section className='flex-1'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {shoes.filter((shoe) => shoe.name.toLowerCase().includes(searchTerm.toLowerCase())).map((shoe) => (
              <div key={shoe.id} className='bg-white p-4 rounded-lg shadow-md'>
                <aside>
                  <img src={shoe.image} alt={shoe.name} className='w-full h-48 object-cover mb-4 rounded-md' />
                </aside>
                <aside className='flex'>
                  <p className='flex-1'>
                <h2 className='text-lg font-semibold mb-2'>{shoe.name}</h2>
                <p className='text-gray-600 mb-2'>Price: ${shoe.price}</p>
                <p className='text-gray-600 mb-2'>Color: {shoe.color}</p>
                  </p>
                <aside>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Add to Cart</button>

                </aside>
                </aside>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Body;