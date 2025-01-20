import React from 'react'
import Logo from "../assets/images/logo.svg"
import { NavLink} from 'react-router-dom'
import { navbarList } from '../hooks/useRoute'
import Button from '../components/Button'


const Navbar = () => {
  return (
    <div className='w-[22%]  h-[100vh] pt-[113px] flex flex-col items-center border-r-[2px] border-slate-400'>
        <div className='flex flex-col gap-[30px] mb-[30px]'> 
          {navbarList.map(item => {
            return(
              <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `flex gap-[20px] ${isActive ? 'active' : ''}`}
            >
              {item.icon}
              <span className='font-semibold text-[18px]'>{item.title}</span>
            </NavLink>
            
            )
          })}
        </div>
        <Button title={'Tweet'} extraClass={'!w-[230px] !h-[55px] !flex !justify-center !items-center'} />
    </div>
  )
}

export default Navbar