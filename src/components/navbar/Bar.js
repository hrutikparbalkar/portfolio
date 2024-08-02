import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'animate.css';
import { Link } from 'react-scroll';

const Bar = () => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div className=" sticky z-10 top-0">
      <div className="relative text-white  w-full p-8  bg-gray-700  md:flex  md:justify-between md:place-content-center gap-40">
        <div className=' md:flex items-center'>
          <h1 className=" animate__animated animate__backInLeft animate__slow	1s font-bold text-xl text-center md:text-left md:text-xl">Hrutik Parbalkar</h1>
        </div>
        <div className='absolute right-5 top-5'>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className=' flex place-content-center'>
          <ul
            className={`  pl-5 transition-all duration-700 ease-in md:flex md:justify-around md:gap-4 lg:gap-12 md:text-xl md:items-center font-serif place-content-center cursor-pointer font-semibold ${
              mobileMenuOpen ? 'top-40 opacity-100' : 'top-[-490px] opacity-100 animate__animated animate__fadeInUp animate__slow	4s'
            } ${mobileMenuOpen ? '' : 'hidden'}`}
          >
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}><li className='pt-2 md:border-b-2 md:border-b-gray-900 hover:border-b-white duration-100 delay-100'>
              Home
            </li></Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}><li className='pt-2 md:border-b-2 md:border-b-gray-900 hover:border-b-white duration-100 delay-100'>
              About
            </li></Link>
            <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-230} duration={500} onSetActive={handleSetActive}><li className='pt-2 md:border-b-2 md:border-b-gray-900 hover:border-b-white duration-100 delay-100'>
              Skills
            </li></Link>
            <Link activeClass="active" to="project" spy={true} smooth={true} offset={-250} duration={500} onSetActive={handleSetActive}><li className='pt-2 md:border-b-2 md:border-b-gray-900 hover:border-b-white duration-100 delay-100'>
              Projects
            </li></Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={950} duration={500} onSetActive={handleSetActive}><li className='pt-2 md:border-b-2 md:border-b-gray-900 hover:border-b-white duration-100 delay-100'>
              Contact
            </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bar;