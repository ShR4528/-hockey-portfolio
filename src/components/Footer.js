import React from 'react';



import Shamil from '../assets/img/brands/Shamil.png';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div>
            <img src={Shamil} alt='' />
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2023 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
