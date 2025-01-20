import React from 'react'
import Navbar from '../modules/Navbar'
import SiteBar from '../modules/SiteBar'

const DashboardLayout = ({children}) => {
  return (
    <div className='px-10 flex'>
        <Navbar/>
        <div className='w-[50%] border-r-[2px] border-slate-400'>{children}</div>
        <SiteBar/>
    </div>
  )
}

export default DashboardLayout