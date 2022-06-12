import React, {useState} from 'react'
import {BsFillSunFill} from 'react-icons/bs'
import {HiOutlineMenu} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import useDarkMode from '../useDarkMode';
import {FaMoon} from 'react-icons/fa'
const NavBar = (props) => {
  const {isMobile} = props
  const [openMenu, setOpenMenu] = useState(0)
  const [isDarkMode, toggleDarkmode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <nav className='flex items-center pt-2 md:px-8'>
      <div className='flex items-center'>
        <div className='mr-2 text-[20px] font-bold'>NerdCard</div>
        {isDarkMode ?  (
          <BsFillSunFill onClick={() => toggleDarkmode(!isDarkMode)} size="24px" color="#e9c463" className='cursor-pointer'/>
          ) : (
          <FaMoon onClick={() => toggleDarkmode(!isDarkMode)} size="24px" color="#e9c463" className='cursor-pointer'/>
        )}
      </div>
      <ul className='ml-auto text-[16px] md:flex md:gap-x-[30px] font-semibold '>
        {openMenu && isMobile ? (
          <MdOutlineClose size="24px" className='cursor-pointer ' onClick={handleMenu}/>
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu size="24px" className='cursor-pointer' onClick={handleMenu}/>
        ) : (
          <>
            <li className='block btn-hover cursor-pointer py-[5px]'>Features</li>
            <li className='block btn-hover cursor-pointer py-[5px]'>Menu</li>
            <li className='block btn-hover cursor-pointer py-[5px]'>Our Story</li>
            <li className='block btn-hover cursor-pointer py-[5px]'>Contact</li>
          </>
        ) }

        {openMenu && isMobile ? (
          <div className="absolute right-8 bg-white px-8 py-3 shadow-md text-center text-[13px] text-black z-10">
            <li className='block cursor-pointer py-[5px]'>Features</li>
            <li className='block cursor-pointer py-[5px]'>Menu</li>
            <li className='block cursor-pointer py-[5px]'>Our Story</li>
            <li className='block cursor-pointer py-[5px]'>Contact</li>
          </div>
        ) : ''}
      </ul>
    </nav>
  );
};
 
export default NavBar;