import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import bgimage from './assets/bgimage.jpg';
import { useState } from 'react';

const Page = () => {
  const [seconds, setseconds] = useState(0)
  const [btn, setbtn] = useState(false)
  const [texts, settext] = useState("")
  const [texts2, settext2] = useState(10)

  useEffect(() => {

    if (btn == true) {
      let setinter = setInterval(() => {
        setseconds((i) => i + 1)
      }, 1000);
      if (seconds >= texts2) {
        setbtn(false); // automatically stop the timer
      }

      return () => clearInterval(setinter)
    }

  }, [btn, seconds])

  const settimer = () => {
    setbtn(true)
  }

  const stoptimer = () => {
    setbtn(false)
  }

  const reset = () => {
    setbtn(false)
    setseconds(0)
  }

  const submitted = (e)=>{
    e.preventDefault()
    settext("")

    settext2(texts)
    
  }


  return (
    <div className='flex flex-col justify-center items-center md:bg-amber-100 bg-gray-100'>

      {/* Small Box with Background Image */}
      <div className='relative  w-[400px] opacity-100 md:opacity-100 md:w-[800px] h-[400px] rounded-xl '>

        {/* Background Image inside the box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{amount:.5}}
          transition={{ duration: .7 }}
        >
          <img
            src={bgimage}
            alt=""
            className='absolute top-0 md:left-50 rounded-full w-100 h-100 object-cover opacity-80 z-0'
          />
        </motion.div>

        {/* Text on top */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: [ -200, 0, -65, 0,-25,0 ], opacity: 1,ease:"easeInOut"}}
          viewport={{amount:.5}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='relative z-10 flex justify-center items-center h-full'
        >
          <h1 className='font-bold text-4xl text-white'>This is div</h1>
        </motion.div>

      </div>
      <div className='w-30 md:flex justify-center hidden  border-red-600 items-center h-30 bg-black m-10  rounded-full'>
        <h1 className=' w-20 h-20 animate-spin border-8 rounded-full border-t-white transform duration-5000 ' style={{ borderStyle: "dotted", animationDuration: "1s" }}></h1>
      </div>



      <div className=' w-full h-full mb-10 mt-20 md:h-50 md:sticky top-0 bg-red-500'>

        <div className='flex p-6  flex-wrap bg-black '>
          <h1 className=' bg-white ml-6 p-2 shadow-[0_0_10px_4px_rgba(253,224,71,0.7)] shadow-yellow-400 text-black m-2 hiddn' style={{ boxShadow: "inset 0px 0px 6px 6px  red" }}>My name is ahmad 1</h1>
          <h1 className=' bg-white ml-6 p-2 shadow-[0_0_10px_4px_rgba(253,224,71,0.7)] shadow-yellow-400 text-black m-2 hiddn' style={{ boxShadow: "inset 0px 0px 6px 6px  red" }}>My name is ahmad 2</h1>
          <h1 className=' bg-white ml-6 p-2 shadow-[0_0_10px_4px_rgba(253,224,71,0.7)] shadow-yellow-400 text-black m-2  ' style={{ boxShadow: "inset 0px 0px 6px 6px  red" }}>My name is ahmad 3</h1>
          <h1 className=' bg-white ml-6 p-2 shadow-[0_0_10px_4px_rgba(253,224,71,0.7)] shadow-yellow-400 text-black m-2 relative top-0 ' style={{ boxShadow: "inset 0px 0px 6px 6px  red" }}>My name is ahmad 4</h1>
          <h1 className=' bg-white ml-6 p-2 shadow-[0_0_10px_4px_rgba(253,224,71,0.7)] shadow-yellow-400 text-black m-2 ' style={{ boxShadow: "inset 0px 0px 6px 6px  red" }}>My name is ahmad 5</h1>

        </div>

      </div>

      <div className='bg bg-pink-600 mt-30'>
        <h2>Hello world</h2>
      </div>

      <div className='bg bg-pink-600 mt-30'>
        <h2>Hello world</h2>
      </div>

      <div className='bg bg-pink-600 mt-30'>
        <h2>Hello world</h2>
      </div>


      <motion.div
        initial={{ opacity: 0,x:300,borderRadius:"50%" }}
        whileInView={{ opacity: 1,margin:"80px",scale:1.2,x:0,borderRadius:"0%" }}
        viewport={{ amount:.5}}
        transition={{ duration: 2 }}
         className=" bg-pink-200 my-4 w-full max-w-[600px] mx-auto"
      >
        <div className='flex flex-col justify-center py-8'>
          

          <h1 className='text-center text-4xl'>Start the timer</h1>


          <h1 className='text-center text-4xl my-4'>{seconds}</h1>

          <button style={{ background: btn ? "white" : "black", color: btn ?"black" : "white" }} className='bg-black text-white px-4 py-2 w-40 m-auto cursor-pointer hover:bg-red-600' onClick={settimer}>Start Time</button>

          <button className='bg-black text-white  px-4 my-2 py-2 w-40 m-auto cursor-pointer hover:bg-amber-950' onClick={stoptimer}>stop time</button>

          <button className='bg-black text-white px-4 my-2 py-2 w-40 m-auto cursor-pointer hover:bg-amber-950' onClick={reset}>reset</button>

        </div>
      </motion.div>
      <div className='flex flex-col w-full max-w-[600px] gap-10 h-full max-h-[200px]'>
        <input className='border-2 border-solid px-3 py-1 text-red-500 border-black focus:rounded-4xl' type="text" value={texts} placeholder='Enter text' onChange={(e)=>settext(e.target.value)} />
        
        <h1 className='w-50'>{texts2}</h1>
        <h1>{texts2.length>0&&texts2.length}</h1>
        <button onClick={submitted} className='border-4 border-solid bg bg-red-500 p-3'>Submit text</button>
      </div>

      <div className='bg bg-pink-600 mt-30'>
        <h2>Hello world</h2>
      </div><div className='bg bg-pink-600 mt-30'>
        <h2>Hello world</h2>
      </div>
    </div>
  );
};

export default Page;
