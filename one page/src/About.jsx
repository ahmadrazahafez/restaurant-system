import React from 'react'
import { useState,useEffect } from 'react';
import zingerImage from './assets/Zinger.jpg';
import muttonImage from './assets/mutton.jpg';
import bgImage from './assets/bgimage.jpg';
import { div } from 'framer-motion/client';


const About = () => {
  const images = [zingerImage,muttonImage,bgImage]
  const [currentindex, setcurrentindex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentindex((prev)=>(prev+1)%images.length)
    }, 2000);
    return ()=> clearInterval(interval)
  }, [images.length])
  
  return (
    <div>
      <div className='relative h-screen'>

        {images.map((img,i)=>{
         return <div className={`absolute inset-0 h-100 ${i===currentindex?"opacity-90":"opacity-0"}`} style={{backgroundImage:`url(${img})`,
          backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
            }}>

          </div>
        })}





        {/* <div className='absolute inset-0 h-100 w-full' style={{backgroundImage:`url(${zingerImage})`,backgroundPosition:"top",backgroundSize:"cover",opacity:.6,filter:"blur(2px)"}}>

        </div> */}

        <div className='relative'>
          <h1>This is the burger</h1>
        </div>
      </div>
    </div>
  )
}

export default About
