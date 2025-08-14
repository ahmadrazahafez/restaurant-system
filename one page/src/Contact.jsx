import React, { useState } from 'react'
import { delay, motion } from 'framer-motion'

const Contact = () => {
  const [country, setcountry] = useState("")
  return (
    <div className='flex justify-center items-center min-h-screen min-w-screen'>
      <motion.div
      initial={{scale:0,opacity:0}} 
      whileInView={{scale:[1.4,.7,1.2,.9,1.1,1],opacity:1}}
      viewport={{amount:.5}}
      transition={{duration:.5}} 
      >
      <div className='bg-gray-100 w-130 h-40 flex justify-around content-center items-center px-4 shadow-lg '>
          <motion.div
          initial={{y:-40,opacity:0}}
          whileInView={{y:0,opacity:1}}
          viewport={{amount:.5}}
          transition={{delay:.7,duration:.1}}
          >
        <div>
          
        <h1 className='text-2xl font-bold'>After UX</h1>
        </div>
        
            
          </motion.div>
        <div>
          <motion.div
          initial={{y:40,opacity:0}}
          whileInView={{y:0,opacity:1}}
          viewport={{amount:.5}}
          transition={{delay:.7,duration:.1}}
          
          >
            
          <div >
            Payment Amount
          </div>
          <div className='flex w-full gap-4 p-1 bg-white ' style={{boxShadow:"inset 1px 1px 6px rgb(174, 171, 171)"}}>

           <div>
             <select className='focus:outline-none' value={country} onChange={(e)=>{setcountry(e.target.value)}}>
              <option value="">select</option>
              <option value="USA">USA</option>
              <option value="PAK">PAK</option>
            </select>
           </div>
           |

           <div className='flex gap-2'>
            {country==="PAK"?"RS=":"$="}
            <input type="text"  className='focus:border-none focus:outline-none' />
           </div>
           
           
          

          </div>
          </motion.div>
        </div>
          
      </div>
      
        
      </motion.div>
    </div>
  )
}

export default Contact
