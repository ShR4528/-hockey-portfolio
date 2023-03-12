import React from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-20 capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-yellow-300 font-primary  cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
