import React from 'react';

// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Shamil Ramazanov
              </h2>
              <p className='mb-4 text-accent'>
                Hockey Coach
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Hi.
                I’m Shamil Ramazanov, professional hockey player and hockey coach from Ukraine.
                My experience as professional player - under 10 years and more than 5 years- as children hockey coach.
                <br />
                Sep 2018 – Jan-2020
                Sept 2013 - Aug 2017
                Master’s Degree , Ukraine Kharkiv, University of Skovoroda G.S Physical education and sport
                Bachelor’s degree in management, Kharkiv Regional Insitute PA

              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              <a href='./Shamil ramazanov coach.pdf' download=''>
                Contact me
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
