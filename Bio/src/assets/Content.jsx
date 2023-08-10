import { Link } from "react-router-dom";
import logo from './Images/ellipsis.png';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import YouTube from 'react-youtube';

export const itemVariants = () => {
  return {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24, }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, },
  };

};

const LinkCard = ({ isOpen, setIsOpen }) => {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu flex justify-center flex-col"
    >

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 2 }}
        onClick={() => { setIsOpen(!isOpen), event.preventDefault(); }}
        className="text-white"
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Latest Video
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className="flex justify-center"
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" fill='white' />
          </svg>
        </motion.div>
      </motion.button>


      <motion.div
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}

      >
        {isOpen && (
          <motion.div className="flex justify-center flex-col" variants={itemVariants}>
            <YouTube videoId="ig1TR4T-2dE" opts={opts} onReady={() => event.target.pauseVideo()} title="New Video" onEnd={() => console.log("Finished")} />;
          </motion.div>
        )}
      </motion.div>

    </motion.nav>
  )
}

const Content = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    event.preventDefault();
    console.log('Button clicked');
    setShowDiv(!showDiv);
  };

  return (
    <div className="flex justify-center mt-20 ml-5 mr-5 font-bold text-[18px]">
      <div className="w-full flex justify-center items-center flex-col rounded-lg">

        <motion.div className='bg-[#F0EDEE] w-[100%] h-16 flex rounded-lg flex items-center mb-5 max-w-3xl hover:bg-slate-100'
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 700, damping: 20 }}
        >
          <Link to='https://www.youtube.com/@CalebOr' target="_blank" className='h-full w-full flex justify-between items-center'>
            <div className='ml-5'></div>
            <p className='ml-5'>Youtube</p>
            <Link to='https://www.youtube.com/'>
              <img src={logo} className='mr-5 scale-50' />
            </Link>
          </Link>
        </motion.div>

        <div className="flex justify-center">
          <LinkCard isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <motion.div className='bg-[#F0EDEE] w-[100%] h-16 flex rounded-lg flex items-center justify-between mb-5 mt-5 max-w-3xl'
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 700, damping: 20 }}
        >
          <Link to='https://www.tiktok.com/@kcaleb.o' target="_blank" className='h-full w-full flex justify-between items-center'>
            <div className='ml-5'></div>
            <p className='ml-5'>TikTok</p>
            <Link to='https://www.youtube.com/'>
              <img src={logo} className='mr-5 scale-50' />
            </Link>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};


{/* <div className='bg-green-100 w-[100%] h-16 flex mt-5 flex justify-between rounded-lg mb-5'>
          <Link className='h-full flex items-center' >
            <p className='ml-2'>Youtube</p>
          </Link>
          <div className='h-full flex items-center'>
            <img src={logo} className='mr-2 scale-50' />
          </div>
        </div> */}

export default Content;
