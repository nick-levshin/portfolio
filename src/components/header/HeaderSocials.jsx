import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaHeading } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/nick-levshin-157b5b243/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/nick-levshin"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        rel="noreferrer"
        href="https://hh.ru/resume/9fb9984aff0983d5100039ed1f73654a744b47"
        target="_blank"
      >
        <FaHeading />
      </a>
    </div>
  );
};

export default HeaderSocials;
