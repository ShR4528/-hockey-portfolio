import React from 'react';

// import woman image

import Shamil from '../assets/img/Shamil.jpg';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Shamil! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I'm Hockey Coach 🏒
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              <h1>Call Me  <br />
                <span>+1(224)284-5122</span>
              </h1>
              <h1>Email <br />
                <span className='underline cursor-pointer'>ramazanovshamil89@gmail.com</span>
              </h1>
            </p>
            <a className='btn btn-md bg-accent'
              href='./Shamil ramazanov coach.pdf' download=''>
              <button className="btn btn-md bg-accen btn highlighted-btn">Get Resume</button>
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={Shamil} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
