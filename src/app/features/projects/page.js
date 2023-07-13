"use client"
import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './projects.css';

const projects = () => {
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
            progressBar: <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
            />
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
            progressBar: <ProgressBar
                completed={70}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted1"
                labelClassName="label"
            />

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
            progressBar: <ProgressBar
                completed={90}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted2"
                labelClassName="label"
            />

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
            progressBar: <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
            />

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
            progressBar: <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted2"
                labelClassName="label"
            />

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
            progressBar: <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted1"
                labelClassName="label"
            />

        },
    ]
    return (
        <div className='px-6 pt-10 pb-6'>
            <h1 className="text-2xl font-semibold text-[#2E293E]">Projects</h1>
            <span className='text-[#2E293E] text-sm'>Lorem ipsum dolor sit amet consectetur.</span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full ">
                {
                    tasks.map(task => (<div
                        key={task.id}
                        className="bg-white py-4 px-3 md:py-6 md:px-5 lg:py-10 lg:px-8 rounded task-card"
                    >
                        <div className="flex justify-between">
                            <span className="w-9 h-9 text-[#4538D3] p-3 rounded flex items-center justify-center icon-shadow">{task.icon}</span>
                            <span className='w-[18px] h-[18px]'>{task.more}</span>
                        </div>
                        <h4 className="text-2xl font-semibold text-[#2E293E] mt-6 mb-4">{task.name}</h4>
                        <p className='text-base text-[#2E293E] '>{task.des}</p>
                        <hr className='my-8 bg-[#ECEEFB]' />
                        <div className='flex justify-between mb-2'>
                            <span className="text-xl text-[#2E293E]">{task.progress}</span>
                            <span className="text-xl text-[#2E293E]">{task.done}</span>
                        </div>
                        <span>{task.progressBar}</span>
                        <div className='mt-2 flex justify-between'>
                            <p className="text-[#584E69] text-lg">{task.complete}</p>
                            <p className="text-[#584E69] text-lg">{task.date}</p>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default projects;