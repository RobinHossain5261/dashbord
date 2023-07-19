"use client"
import photo1 from '@/../public/images/photo1.png';
import photo2 from '@/../public/images/photo2.png';
import photo3 from '@/../public/images/photo3.png';
import photo4 from '@/../public/images/photo8.png';
import photo5 from '@/../public/images/photo12.png';
import photo6 from '@/../public/images/photo7.png';
import Image from 'next/image';
import './task.css';


import { useState, Fragment } from 'react'
import { Listbox } from '@headlessui/react';
import { useTheme } from 'next-themes';
import Progress from '@/app/components/Progress/Progress';

const people = [
    { id: 1, name: 'This Month', unavailable: false },
    { id: 2, name: 'This Week', unavailable: false },
    { id: 3, name: 'This Year', unavailable: false },
]

export const metadata = {
    title: 'DashBord-tasks',
    description: 'dahbord tasks',
}
const tasks = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const { resolvedTheme, setTheme } = useTheme();

    const tasks = [
        {
            id: 1,
            name: 'Design Tasks',
            complete: '8 of 10 completed',
            icon: <span class="material-symbols-outlined">
                edit_square
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 80
            // progress: <ProgressBar

            //     completed={80}
            //     className="wrapper"
            //     barContainerClassName="container"
            //     completedClassName="barCompleted"
            //     labelClassName="label"
            // />
        },
        {
            id: 2,
            name: 'Development Tasks',
            complete: '7 of 10 completed',
            icon: <span class="material-symbols-outlined">
                frame_source
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 70
        },
        {
            id: 3,
            name: 'Marketing Tasks',
            complete: '9 of 10 completed',
            icon: <span class="material-symbols-outlined">
                campaign
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 80
        },
    ]

    const teamProgress = [
        {
            id: 1,
            name: 'Jerome Bell',
            complete: '8 of 10 completed',
            parcent: '80%',
            img: photo1,
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 80
        },
        {
            id: 2,
            name: 'Annete Black',
            complete: '7 of 10 completed',
            parcent: '70%',
            img: photo2,
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 70
        },
        {
            id: 3,
            name: 'Jacob Jones',
            complete: '9 of 10 completed',
            parcent: '90%',
            img: photo3,
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 90
        },
        {
            id: 4,
            name: 'Jenny Wilson',
            complete: '8 of 10 completed',
            parcent: '80%',
            img: photo1,
            color: "#4538D3 ",
            color1: "#00E177",
            completed: 80
        },
    ]

    const cards = [
        {
            id: 1,
            name: 'Incomplete tasks',
            view: '4.6k',
            icon: <span class="material-symbols-outlined">
                add
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            bgColor: '#FFA5A5',
            color: 'black'
        },
        {
            id: 2,
            name: 'Users',
            view: '25.6k',
            icon: <span class="material-symbols-outlined">
                group
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#00E177',
            color: 'white'
        },
        {
            id: 3,
            name: 'Completed',
            view: '25.6k',
            icon: <span class="material-symbols-outlined">
                done_all
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#00E177',
            color: 'white'
        },
        {
            id: 4,
            name: 'Overdue tasks',
            view: '5.5k',
            icon: <span class="material-symbols-outlined">
                notifications_active
            </span>,
            increment: '11.3%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#00E177',
            color: 'white'
        }
    ]

    const reportCards = [
        {
            id: 1,
            title: 'The process of designing landing pages',
            date: 'Sep 24 2023',
            category: "Design",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo4
        },
        {
            id: 2,
            title: 'Mobile app UI/UX design & development',
            date: 'Sep 24 2023',
            category: "Development",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo5
        },
        {
            id: 3,
            title: 'Writing content for use in website layout',
            date: 'Sep 24 2023',
            category: "Design",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo6
        },
    ]



    return (

        <div className="px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg">
            <h1 className="text-2xl font-semibold text-myBlack dark:text-white">Dashboard</h1>
            <span className='text-myBlack text-sm dark:text-white'>Jul 9, 2023</span>

            {/* task cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full ">
                {
                    tasks.map(task => (<div
                        key={task.id}
                        className="bg-white dark:bg-darkCard py-4 px-6 rounded task-card"
                    >
                        <div className="flex justify-between">
                            <div className='bg-white dark:bg-[#1E192A] h-[60px] w-[60px] icon-shadow rounded flex items-center justify-center'>
                                <span className="text-myBlue dark:text-myGreen p-3 ">{task.icon}</span>
                            </div>
                            <span className='w-[18px] h-[18px] dark:text-white'>{task.more}</span>
                        </div>
                        <h4 className="text-2xl font-semibold text-myBlack dark:text-white mt-6 mb-3">{task.name}</h4>
                        {/* <span>{task.progress}</span> */}
                        <Progress bgcolor={resolvedTheme === 'dark' ? `${task.color1}` : `${task.color}`} completed={task.completed} />

                        <p className="text-[#584E69] dark:text-[#D1D1D1] text-lg mt-3">{task.complete}</p>
                    </div>))
                }
            </div>

            {/* Team progress */}
            <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="py-8 px-7 rounded bg-white dark:bg-darkCard">
                    <div className="flex justify-between mb-7 items-center">
                        <h1 className="text-xl text-myBlack dark:text-myWhite">Team Progress</h1>
                        <div>
                            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                <Listbox.Button

                                    className="lg:flex hidden gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] dark:text-myWhite py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    {selectedPerson.name}
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </Listbox.Button>
                                <Listbox.Options
                                    className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white dark:bg-darkCard py-2  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                    {people.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            value={person}
                                            disabled={person.unavailable}
                                            as={Fragment}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 px-5 ${active ? 'bg-myBlue dark:bg-myGreen text-white' : 'text-gray-900 dark:text-white'
                                                }`
                                            }
                                        >
                                            {({ selected }) => (
                                                <li
                                                >
                                                    {selected}
                                                    {person.name}
                                                </li>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Listbox>
                        </div>
                    </div>

                    <div>

                        {
                            teamProgress.map(progress => (<div
                                key={progress.id}
                            >
                                <hr className='my-5 dark:border-darkLine' />
                                <div className='flex items-center'>
                                    <Image src={progress.img} alt="buyer" className='mr-3 w-15 h-15' />

                                    <div className='flex-grow'>
                                        <h4 className='text-2xl font-semibold text-myBlack dark:text-white mb-3'>{progress.name}</h4>
                                        {/* <span>{progress.progress}</span> */}
                                        <Progress bgcolor={resolvedTheme === 'dark' ? `${progress.color1}` : `${progress.color}`} completed={progress.completed} />
                                        <div className='flex justify-between mt-3'>
                                            <span className='text-[#584E69] dark:text-[#D1D1D1] text-lg'>{progress.complete}</span>
                                            <span className='text-[#584E69] dark:text-[#D1D1D1] text-lg'>{progress.parcent}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>))
                        }

                    </div>
                </div>

                {/* Task Reports */}
                <div className="py-8 px-7 rounded bg-white dark:bg-darkCard">
                    <div className="flex justify-between items-center">
                        <h4 className="text-xl text-myBlack dark:text-myWhite">Tasks Reports</h4>

                        <div>
                            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                <Listbox.Button

                                    className="lg:flex hidden gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] dark:text-myWhite py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    {selectedPerson.name}
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </Listbox.Button>
                                <Listbox.Options
                                    className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                    {people.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            value={person}
                                            disabled={person.unavailable}
                                            as={Fragment}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 px-5 ${active ? 'bg-myBlue text-white' : 'text-gray-900'
                                                }`
                                            }
                                        >
                                            {({ selected }) => (
                                                <li
                                                >
                                                    {selected}
                                                    {person.name}
                                                </li>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Listbox>
                        </div>
                    </div>

                    <hr className='my-7 dark:border-darkLine' />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
                        {
                            cards.map(card => (<div
                                key={card.id}
                                className="group bg-white dark:bg-[#1E192A] py-4 px-6 rounded task-card">
                                <div className="flex justify-between">
                                    <h3 className="text-base text-myBlack dark:text-myWhite">{card.name}</h3>
                                    <div className='group-hover:shadow-xl w-10 h-10 bg-[#EDECFB] dark:bg-[#164C3C] flex items-center justify-center rounded-md'>
                                        <span className='mt-1 p-2 text-myBlue dark:text-myGreen'>{card.icon}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mt-4">
                                    <h3 className="text-[32px] text-myBlack dark:text-white  font-semibold mr-4">{card.view}</h3>
                                    <div className='py-1 px-2 rounded   flex items-center'
                                        style={{ backgroundColor: card.bgColor, color: card.color }}
                                    >
                                        <h5 >{card.increment}</h5>
                                        <span className="ml-1 hover:skew-y-12">{card.trending}</span>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                </div>
            </div>
            <hr className="my-6 dark:border-darkLine border-myLine" />

            {/* Task report card */}
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl text-myBlack dark:text-myWhite">Task reports</h3>
                    <p className="border dark:border-darkLine border-myLine text-myBlack dark:text-myWhite  py-3 px-4 rounded">Browse all tasks</p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        reportCards.map(card => (<div
                            key={card.id}
                            className="bg-white dark:bg-darkCard py-4 md:py-6 lg:py-8 px-5 md:px-8 lg:px-10 rounded  hover:-skew-y-3 duration-300"
                        >
                            <Image className='w-[120px] h-[120px] mx-auto mb-8' src={card.img} alt="buyer" />
                            <h4 className='text-myBlack dark:text-white text-2xl font-semibold text-center mb-7'>{card.title}</h4>
                            <div className='flex justify-around mb-8'>
                                <p className='text-myBlue dark:text-myGreen rounded py-1  px-2 bg-[#F6F6FB] dark:bg-[#2C3241]'>{card.category}</p>
                                <div className='border'></div>
                                <div className='flex items-center dark:text-[#ECEEFB]'>
                                    <span>{card.icon}</span>
                                    <p className='ml-1 text-sm'>{card.date}</p>
                                </div>
                            </div>
                            <p className='text-lg text-center dark:text-[#D1D1D1]'>{card.des}</p>
                        </div>))
                    }
                </div>
            </div>

            <hr className='mt-6 dark:border-darkLine' />
        </div>
    )
}
export default tasks;