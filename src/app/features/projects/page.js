"use client"
import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './projects.css';
import Progress from '@/app/components/Progress/Progress';
import { useTheme } from 'next-themes';

const projects = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const tasks = [
        {
            id: 1,
            name: 'Design',
            des: 'Lorem ipsum dolor sit amet consectetur. Arcu consectetur pellentesque vel.',
            complete: '8 Task Done',
            icon: <span class="material-symbols-outlined">
                edit_square
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            date: '12/05/2023',
            done: '80%',
            progress: 'Progress',
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 80
            // progressBar: <ProgressBar
            //     completed={80}
            //     className="wrapper"
            //     barContainerClassName="container"
            //     completedClassName="barCompleted"
            //     labelClassName="label"
            // />
        },
        {
            id: 2,
            name: 'Development',
            des: 'Lorem ipsum dolor sit amet consectetur. Arcu consectetur pellentesque vel.',
            complete: '7 Task Done',
            icon: <span class="material-symbols-outlined">
                frame_source
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            date: '12/05/2023',
            done: '70%',
            progress: 'Progress',
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 70

        },
        {
            id: 3,
            name: 'Markating',
            des: 'Lorem ipsum dolor sit amet consectetur. Arcu consectetur pellentesque vel.',
            complete: '9 Task Done',
            icon: <span class="material-symbols-outlined">
                campaign
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            date: '12/05/2023',
            done: '90%',
            progress: 'Progress',
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 90

        },
        {
            id: 4,
            name: 'Social Media',
            des: 'Lorem ipsum dolor sit amet consectetur. Arcu consectetur pellentesque vel.',
            complete: '8 Task Done',
            icon: <span class="material-symbols-outlined">
                share
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            date: '12/05/2023',
            done: '80%',
            progress: 'Progress',
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 80

        },
        {
            id: 5,
            name: 'CopyWriting',
            des: 'Lorem ipsum dolor sit amet consectetur. Arcu consectetur pellentesque vel.',
            complete: '9 Task Done',
            icon: <span class="material-symbols-outlined">
                event_note
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            date: '12/05/2023',
            done: '90%',
            progress: 'Progress',
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 90

        },
        {
            id: 6,
            name: 'Customer Service',
            des: 'Lorem ipsum dolor sit amet consectetur. Arcu consectetur pellentesque vel.',
            complete: '7 Task Done',
            icon: <span class="material-symbols-outlined">
                group
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            date: '12/05/2023',
            done: '70%',
            progress: 'Progress',
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 70

        },
    ]
    return (
        <div className='px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <h1 className="text-2xl font-semibold text-myBlack dark:text-white">Projects</h1>
            <span className='text-myBlack text-sm dark:text-white'>Lorem ipsum dolor sit amet consectetur.</span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full ">
                {
                    tasks.map(task => (<div
                        key={task.id}
                        className="bg-white dark:bg-darkCard py-4 px-3 md:py-6 md:px-5 lg:py-10 lg:px-8 rounded task-card"
                    >
                        <div className="flex justify-between">
                            <div className='bg-white dark:bg-[#1E192A] h-[60px] w-[60px] icon-shadow rounded flex items-center justify-center'>
                                <span className="text-myBlue dark:text-myGreen p-3 ">{task.icon}</span>
                            </div>
                            <span className='w-[18px] h-[18px] dark:text-white'>{task.more}</span>
                        </div>
                        <h4 className="text-2xl font-semibold text-myBlack dark:text-white mt-6 mb-4">{task.name}</h4>
                        <p className='text-base text-myBlack dark:text-myWhite'>{task.des}</p>
                        <hr className='my-8 border-myLine dark:border-darkLine' />
                        <div className='flex justify-between mb-2'>
                            <span className="text-xl text-myBlack dark:text-white">{task.progress}</span>
                            <span className="text-xl text-myBlack dark:text-myWhite">{task.done}</span>
                        </div>
                        {/* <span>{task.progressBar}</span> */}
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