import React from 'react'
import Navlink from '../components/Navlink'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <Navlink />
        <Outlet />
    </div>
  )
}

export default Rootlayout