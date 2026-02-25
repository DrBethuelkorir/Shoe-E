import React from 'react'
import FilterbyColourPrice from './Sidebar/FilterbyColourPrice'
import Selldashboard from './Selldashboard';

const Body = () => {
  return (
    <div className=''>
        <section className='flex flex-col md:flex-row gap-10'>
          <FilterbyColourPrice />
          <Selldashboard />
        </section>
    </div>
  )
}

export default Body;