import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/scarlett-truong/' target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/Scarlett-Truong' target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/scarlett.truong/' target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
