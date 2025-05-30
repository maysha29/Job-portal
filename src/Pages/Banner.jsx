/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "motion/react";
import team1 from '../assets/pics/team1.jpg';
import team2 from '../assets/pics/team2.jpg';

const Banner = () => {
    return (
        <div>
      <div className="hero bg-base-200 min-h-screen py-16">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    
    {/* Animated Images Container */}
    <div className='flex-1 flex flex-col md:flex-row items-center'>
      <motion.img 
        src={team2} 
        animate={{ y: [100, 130, 100] }} 
        transition={{ duration: 4, repeat: Infinity }} 
        className="max-w-xs border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
      />
      <motion.img 
        src={team1} 
        animate={{ x: [100, 130, 100] }} 
        transition={{ duration: 4, repeat: Infinity }} 
        className="max-w-xs border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
      />
    </div>
    <div>
      <motion.h1 
      initial={{scale:0}}
      animate={{scale:1,
        transition:{duration:4}
      }}
      className="text-5xl font-bold">Remote <motion.span
      animate={{color:['#3342ff ','#f933ff ','#4cff33','#ff5733'],
        transition:{duration:4,repeat:Infinity}
      }}
      >jobs</motion.span> for you!</motion.h1>
      <p className="py-6 font-semibold text-xl">
       Find your next opportunity—connect with top<br>
       </br> employers and take the next step in your career today.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;