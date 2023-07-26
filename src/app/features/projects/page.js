"use client"
import React, { useEffect, useState } from 'react';
import './projects.css';
import { useTheme } from 'next-themes';
import Progress from '@/components/Progress/Progress';
import { tasks } from '../../../../public/data/featuresData';
import Link from 'next/link';

const projects = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }

    return (
        <div className='p-2 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <h1 className="text-2xl font-semibold text-myBlack dark:text-white">Projects</h1>
            <span className='text-myBlack text-sm dark:text-white'>Lorem ipsum dolor sit amet consectetur.</span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full ">
                {
                    tasks.map(task => (<div
                        key={task.id}
                        className="bg-white dark:bg-darkCard p-2 md:py-6 md:px-5 lg:py-10 lg:px-8 rounded task-card"
                    >
                        <div className="flex justify-between">
                            <div className='bg-white dark:bg-[#1E192A] h-[60px] w-[60px] icon-shadow rounded flex items-center justify-center'>
                                <span className="text-myBlue dark:text-myGreen p-3 ">{task.icon}</span>
                            </div>
                            <div className='dropdown dropdown-end'>
                                <span tabIndex={0} className='w-[18px] h-[18px] dark:text-white cursor-pointer'>{task.more}</span>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 dark:bg-darkCard rounded-box ">
                                    <li ><Link className='text-myBlack dark:text-myWhite rounded hover:text-white hover:bg-myBlue dark:hover:bg-myGreen' href='#'>Delete</Link></li>
                                    <li><Link className='text-myBlack dark:text-myWhite rounded hover:text-white hover:bg-myBlue dark:hover:bg-myGreen' href='#'>Edit</Link></li>
                                    <li><Link className='text-myBlack dark:text-myWhite rounded hover:text-white hover:bg-myBlue dark:hover:bg-myGreen' href='#'>Suspend</Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="text-2xl font-semibold text-myBlack dark:text-white my-3 lg:mt-6 lg:mb-4">{task.name}</h4>
                        <p className='text-base text-myBlack dark:text-myWhite'>{task.des}</p>
                        <hr className='my-3 lg:my-8 border-myLine dark:border-darkLine' />
                        <div className='flex justify-between mb-2'>
                            <span className="text-xl text-myBlack dark:text-white">{task.progress}</span>
                            <span className="text-xl text-myBlack dark:text-myWhite">{task.done}</span>
                        </div>
                        <Progress bgcolor={resolvedTheme === 'dark' ? `${task.color1}` : `${task.color}`} completed={task.completed} />
                        <div className='mt-2 flex justify-between'>
                            <p className="text-myGrey dark:text-myWhite text-lg">{task.complete}</p>
                            <p className="text-myGrey dark:text-myWhite text-lg">{task.date}</p>
                        </div>
                    </div>))
                }
            </div>
            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default projects;