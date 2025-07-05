import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img animate={{
                            y: [100, 150, 100],
                            transition: { duration: 7, repeat: Infinity }
                        }}

                            src={team1}
                            className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl "
                        />
                        <motion.img animate={{
                            x: [100, 150, 100],
                            transition: { duration: 10, repeat: Infinity }
                        }}

                            src={team2}
                            className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl "
                        />
                    </div>
                    <div className='flex-1'>
                        {/* <motion.h1 animate={{
                           rotate:180,
                            x:200,
                            y:200,
                            transition:{duration:3}
                        }}
                         className="text-5xl font-bold">Latest jobs for you!</motion.h1> */}
                        <motion.h1
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: { duration: 4 }
                            }}
                            className="text-5xl font-bold">Remote <motion.span animate={{
                                color: ['#3c71be', '#3cb703', '#0488a5'],
                                transition: { duration: 3, repeat: Infinity }
                            }}>jobs</motion.span> for you!</motion.h1>
                        <p className="py-6">
                            Each month, more than 3 million job seekers turn to
                            website in their search for work, making over 140,000
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;