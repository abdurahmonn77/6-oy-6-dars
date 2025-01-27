import React from 'react'
import Logo from "../assets/images/logo.svg"
import { NavLink} from 'react-router-dom'
import { navbarList } from '../hooks/useRoute'
import Button from '../components/Button'


const Navbar = () => {
  return (
    <div className='w-[22%]  h-[100vh] pt-[30px] flex flex-col items-center border-r-[2px] border-slate-400'>
      <img src="src/assets/images/logo.png" alt="Logo Image"  className='mb-[50px]' width={"40px"} height={"33px"}/>
        <div className='flex flex-col gap-[30px] mb-[30px]'> 
          {navbarList.map(item => {
            return(
              <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `flex gap-[20px] ${isActive ? 'active' : ''}`}
            >
              {item.icon}
              <span className='font-semibold text-[18px] text-[#4a4a4a]'>{item.title}</span>
            </NavLink>
            
            )
          })}
        </div>
        <Button title={'Tweet'} extraClass={'!w-[230px] !h-[55px] !flex !justify-center !items-center'} />
    </div>
  )
}

export default Navbar