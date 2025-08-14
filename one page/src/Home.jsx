import React from 'react'
import muttonimage from './assets/mutton.jpg';
// import pizzaimage from './assets/Pizza.jpeg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Home = () => {
  const [navbar, setnavbar] = useState(true)

  const handlebtn = ()=>{
    setnavbar(!navbar)
  }
  return (
    <>
    <div className='flex justify-center'>
    <div className='text-center mb-0 absolute mt-2'>
      
      <button className='border bg-red-500 cursor-pointer px-6 rounded-4xl' onClick={handlebtn}>Change banner</button>
      </div>
    </div>
    
    
    <div >



    {navbar && (
  <div
    className='relative flex flex-col md:flex-row justify-between items-center text-white h-130 p-10 mt-10 md:mb-30 sm:mb-30 bg-cover bg-center'
    style={{ backgroundImage: `url(${muttonimage})` }}
  >
    {/* Background Overlay with lower opacity */}
    <div className="absolute inset-0 bg-black/70 z-0"></div>

    {/* Actual Content above overlay */}
    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full">
      
      {/* Left Content */}
      <div className='mt-5 flex-col w-full md:w-[50%] p-4 space-y-6'>
        <motion.div 
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          viewport={{}}
          transition={{duration:.8}}
        >
          <h2 className='text-5xl mb-6 font-semibold'>Welcome Fast Food</h2>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium expedita quae voluptas dolorem, saepe ipsum reprehenderit animi repudiandae excepturi.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:.8}}
        >
          <button className='border bg-amber-200 text-black mt-4 cursor-pointer px-8 py-1 font-semibold hover:bg-amber-300 transition-all duration-700 hover:rounded-4xl'>
            <a href="/">Menu</a>
          </button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{scale:.3, opacity: 0 }}
        whileInView={{  opacity: 1, scale:1 }}
        viewport={{amount:.5}}
        transition={{ duration: .8, ease: 'easeInOut' }}
        className='w-full md:w-[50%] flex justify-center mt-10 md:mt-0'
      >
        <img
          className='w-[400px] ml-30 h-[400px] rounded-full object-contain transform hover:scale-110 duration-1000'
          src={muttonimage}
          alt="Zinger image"
        />
      </motion.div>
    </div>
    
  </div>
)}






















      
      {/* {navbar&&  <div className='flex justify-between h-150  bg-white p-20 text-black mt-10'>

<div className=' mt-5  flex-col  w-[50%] p-4 ml-4 space-y-6'>
  <h2 className='  text-5xl mb-6 font-semibold '>Welcome Fast Food</h2>
  <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium expedita quae voluptas dolorem, saepe ipsum reprehenderit animi repudiandae excepturi.</p>
  <button className='border bg-amber-200 text-black mt-4 cursor-pointer px-8 py-1 font-semibold hover:bg-amber-300 transition-all duration-700 hover:rounded-4xl'><a href="/">menu</a></button>
  <br />
</div>

<div>
  <img className='w-100 h-100 rounded-3xl  object-contain  mr-10 transform hover:scale-110 duration-1000' src={zingerImage} alt="Zinger image" />
</div>

  </div>
} */}















{navbar===false?  <div className='flex justify-between h-150  bg-black p-20 text-white mt-10'>

<div className=' mt-5  flex-col  w-[50%] p-4 ml-4 space-y-6'>
  <h2 className='  text-5xl mb-6 font-semibold '>Welcome Love</h2>
  <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium expedita quae voluptas dolorem, saepe ipsum reprehenderit animi repudiandae excepturi.</p>
  <button className='border bg-amber-200 text-black mt-4 cursor-pointer px-8 py-1 font-semibold hover:bg-amber-300 transition-all duration-700 hover:rounded-4xl'><a href="/">menu</a></button>
  <br />
</div>

<div className='w-100'>
  <img className='w-100 h-100 rounded-3xl object-contain  mr-10 transform hover:scale-110 hover:rotate-360 duration-1000' src={muttonimage} alt="pixxa image" />
</div>

  </div>:null
}



{/* 

<div className='w-70 h-70 bg-red-500 rounded-full mx-auto relative bottom-30 overflow-hidden hidden  md:block'>
 <img className='w-full h-full object-cover rounded-full opacity-700 ' src={pizzaimage} alt="" />
</div>
 */}














        <hr />

        <section className='mt-20 bg-amber-100 w-full text-black relative bottom-30'>
            <div>
                <h1 className='text-center text-3xl'>Our Team</h1>
            </div>
            <div className='flex items-center justify-center  flex-wrap p-10 '>
                <div className='border w-90 h-120 rounded-4xl bg-pink-400  m-4 p-2'>
                    <img className='w-full object-cover rounded-4xl h-60 filter brightness-150' src={muttonimage} alt="" />
                    <div className='flex  flex-col justify-center items-center mt-8'>
                        <h1>Zinger burger</h1>
                        <h2>$200</h2>
                    </div>
                </div>
                <div className='border w-90 h-120 bg-gray-400 rounded-4xl m-4'>
                <img className='w-full object-cover rounded-4xl h-60' src={muttonimage} alt="" />
                    <div className='flex  flex-col justify-center items-center mt-8'>
                        <h1>Zinger burger</h1>
                        <h2>$200</h2>
                    </div>
                </div>
                <div className='border w-90 h-120 bg-purple-500 rounded-4xl m-4'><img className='w-full object-cover rounded-4xl h-60' src={muttonimage} alt="" />
                    <div className='flex  flex-col justify-center items-center mt-8'>
                        <h1>Zinger burger</h1>
                        <h2>$200</h2>
                    </div></div>
            </div>
        </section>
        
    </div>
    <Footer/>
    </>
  )
}

export default Home
