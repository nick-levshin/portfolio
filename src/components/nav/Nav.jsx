import React, { useState } from 'react';
import './Nav.sass';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#"
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#services"
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNav('#services')}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contacts"
        className={activeNav === '#contacts' ? 'active' : ''}
        onClick={() => setActiveNav('#contacts')}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
