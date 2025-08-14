import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-70 md:relative md:bottom-0 relative bottom-15 md:overflow-hidden md:h-25  md:justify-between  md:items-center justify-center  p-4 gap-10 shadow-md">

        <div>
          <h3 className='font-semibold text-2xl underline underline-offset-4 decoration-yellow-600 '>Reso System</h3>
        </div>

        <div className=' flex justify-center mt-10 md:mt-0'>
          <nav className='  flex gap-2 flex-col md:flex-row  md:gap-15'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold font-serif transition duration-400 transform hover:scale-110 hover:underline underline-offset-4 decoration-2 px-3 py-1 rounded ${isActive ? "underline text-red-600" : "hover:text-red-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink className= {({isActive})=>`font-semibold font-serif px-3 py-1 transition duration-400 transform hover:scale-110 hover:underline underline-offset-4 decoration-2 ${isActive
              ?"underline text-red-600":"hover:text-red-600"
            } `} to="/about">About</NavLink>

            <NavLink className="font-semibold font-serif hover:text-red-600 transition duration-400 transform hover:scale-110 hover:underline underline-offset-4 decoration-2" to={"/contact"}>Contact us</NavLink>

            <NavLink className="font-semibold font-serif hover:text-red-600 transition duration-400 transform hover:scale-110 hover:underline underline-offset-4 decoration-2" to={"/page"}>Page</NavLink>

            <NavLink className={({isActive})=>`font-semibold font-serif hover:text-red-600 transition duration-400 transform hover:scale-110 hover:underline underline-offset-4 decoration-2 ${isActive?"underline text-red-600":"hover:text-red-600"}`} to={"/watch"}>Watch</NavLink>

            <NavLink className="font-semibold font-serif hover:text-red-600 transition duration-400 transform hover:scale-110 hover:underline underline-offset-4 decoration-2" to={"/grid"}>Grid</NavLink>

          </nav>
        </div>

        <div>
          <input type="text" placeholder='Search here' className='hidden md:block focus:ring-4 outline-none p-2 focus:ring-yellow-600 rounded-3xl text-center text-black' />
        </div>

      </div>


    </>
  )
}

export default Navbar
