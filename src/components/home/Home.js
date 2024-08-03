import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import hrutik from './hrutik.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <div className='' id='home' >
      <div className='  bg-slate-900 lg:py-16 lg:flex lg:justify-between lg:px-28 md:flex md:py-10 md:px-20 md:justify-between md:gap-5  '>
        <div className='  lg:pt-28 pt-10 w-full'>
          <h2 className='  md:text-4xl text-lg  text-white/50 font-semibold font-serif l:pb-5 text-center lg:text-left md:text-center'>Hello Everyone,</h2>
          <div className=' w-full lg:w-full md:mt-5 grid place-content-center lg:flex lg:place-content-start mt-5'>
            <TypeAnimation
                sequence={[
                  "I'm Hrutik Parbalkar",
                  1000,
                  "I'm Web developer",
                  1000,
                 
                ]}
                speed={30}
                className=' lg:text-6xl text-white font-bold text-2xl  w-full '
                repeat={Infinity}
            />
          </div>
          <div className=' lg:flex gap-10 lg:mt-7 cursor-pointer mt-10  hidden'>
            <InstagramIcon className=' text-white hover:-translate-y-1 transition-all delay-1000'/>
            <FacebookIcon className=' text-white hover:-translate-y-1 transition-all delay-1000'/>
            <WhatsAppIcon className=' text-white hover:-translate-y-1 transition-all delay-1000'/>
            <TelegramIcon className=' text-white hover:-translate-y-1 transition-all delay-1000'/>
          </div>
          <div className=' w-full  lg:w-2/3  lg:mt-7 md:p-2 p-4 '>
            <p className=' text-white font-medium  lg:text-lg md:text-md font-serif text-xs leading-5 whitespace-pre-line text-center md:text-[14px] md:text-left'>As a web developer,I'm passionate about crafting innovative digital solutions that drive user engagement and business growth. With a keen eye for detail and a love for problem-solving.</p>
          </div>
    
        </div>
        <div className=' lg:w-[500px]  lg:h-[400px] lg:block rounded-full mx-auto mt-5 md:w-80 md:h-60   w-60 h-60 box  lg:mt-14 '>
          <img src={hrutik} className=' h-full w-full rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home