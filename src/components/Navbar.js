import React from 'react'
//import Links
import { NavLink } from 'react-router-dom'

//import react icons
import {GoHomeFill, GoVideo} from "react-icons/go"
import {BsSearch,BsMessenger,BsCameraVideo} from "react-icons/bs"
import {MdExplore, MdOutlineMenu} from "react-icons/md"
import {AiOutlineHeart,AiOutlinePlusSquare} from "react-icons/ai"
import {HiHome} from "react-icons/hi"

// import image
import logo from "../assets/logo.png";
import img from "../assets/IMG_3152.jpg";
import Home from '../pages/Home'
import Search from './Search'



const Navbar = ({openSearch, handleSearch, handleOpenMessage, handleNotif, handleModal}) => {
  return (
    <nav className='fixed bg-black w-[300px] h-full px-6 pt-14 navbar z-50'>
      <img src={logo} alt="" className='h-[35px] '/>      

      <div className='mt-16 h-full'>
        <NavLink to='/' className={`flex p-3 items-center mb-3 hover:bg-white/10`}><HiHome size={30} className='mr-5'/> <h2 className='text-[1.3rem] font-light'>Home</h2></NavLink>
        <NavLink to='/' className={`flex p-3 items-center mb-3 hover:bg-white/10`} onClick={handleSearch}><BsSearch size={30} className='mr-5'/> <h2 className='text-[1.3rem] font-light'>Search</h2></NavLink>
        <NavLink to='/explore' className={`flex p-3 items-center mb-3 hover:bg-white/10`}><MdExplore size={30} className='mr-5'/> <h2 className='text-[1.3rem] font-light'>Explore</h2></NavLink>
        <NavLink to='/reels' className={`flex p-3 items-center mb-4 hover:bg-white/10`}><BsCameraVideo size={30} className='mr-5'/> <h2 className='text-[1.3rem] font-light'>Reels</h2></NavLink>
        <NavLink to='/messages' className={`flex p-3 items-center mb-4 hover:bg-white/10`} onClick={handleOpenMessage}><BsMessenger size={30} className='mr-5'/> <h2 className='text-[1.3rem] font-light' >Messages</h2></NavLink>
        <NavLink to='/' className={`flex p-3 items-center mb-4 hover:bg-white/10`} onClick={handleNotif}><AiOutlineHeart size={30} className='mr-5'/> <h2 className='text-[1.3rem] font-light'>Notification</h2></NavLink>
        <NavLink to='/' className={`flex p-3 items-center mb-4 hover:bg-white/10`} onClick={handleModal}><AiOutlinePlusSquare size={30} className='mr-5'/> <h2 className='text-[1.3rem] font-light'>Create</h2></NavLink>
        <NavLink to='/profile' className={`flex p-3 items-center mb-4 hover:bg-white/10`}><img src={img} alt='' className='w-[40px] h-[40px] rounded-full mr-3 object-cover'/><h2 className='text-[1.3rem] font-light'>Profile</h2></NavLink>
        <div className='absolute bottom-2'>
        <NavLink to='/' className={`flex p-3 items-center mb-4 hover:bg-white/10`}><MdOutlineMenu size={30} className='mr-5'/> <h2 className='text-[1.3rem] font-light'>Menu</h2></NavLink>          
        </div>
      </div>

      <div className='overlay'>
      
      </div>
    </nav>
  )
}

export default Navbar