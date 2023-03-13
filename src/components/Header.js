import React, { useEffect, useState } from 'react';

// import components
import Nav from '../components/Nav';
//import NavMobile from '../components/NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? 'bg-tertiary h-20' : 'h-24'
        } flex items-center fixed top-0 w-full text-yellow z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='#/'>
          <h1><span>Shamil</span></h1>
          {/* <img src={Logo} alt='' /> */}
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>

        {/* nav mobile*/}
        <div >
          {/* <NavMobile /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
