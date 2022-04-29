import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import Typewriter from 'typewriter-effect';
import { IoDownloadOutline } from 'react-icons/io5';


import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<strong>Scarlett</strong>')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('<strong style="font-size:2.2rem">A Full Stack Developer</strong>')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('<strong style="font-size:2.2rem">A Web Designer</strong>')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('<strong style="font-size:2.2rem">A Freelancer</strong>')
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <a href='/Scarlett.pdf' download>
            <p className="p-text">
              <span style={{fontSize: '1.1rem', marginRight: '0.5rem', display: 'inline-block'}}><IoDownloadOutline /></span>
              <span style={{fontSize: '0.9rem'}}>Get my Resume</span>
            </p>
          </a>
        </div>
      </div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles circles-left"
      >
        {[images.flutter, images.node, images.javascript].map((circle, index) => (
          <div className="app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile2} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.redux, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
