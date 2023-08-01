"use client"
import Image from 'next/image';
import './task.css';
import { useState, Fragment, useEffect } from 'react'
import { Listbox } from '@headlessui/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Progress from '@/components/Progress/Progress';
import { cards, taskReportCards, tasksCard, teamProgress } from '../../../../../public/data/dashbordData';

const people = [
    { id: 1, name: 'This Month', unavailable: false },
    { id: 2, name: 'This Week', unavailable: false },
    { id: 3, name: 'This Year', unavailable: false },
]

const tasks = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }

    return (

        <div className="px-2 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg">
            <h1 className="text-[32px] font-semibold text-myBlack dark:text-white">Dashboard</h1>
            <span className='text-myBlack text-sm dark:text-white'>Jul 9, 2023</span>

            {/* task cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 mt-8 w-full">
                {
                    tasksCard.map(task => (<div
                        key={task.id}
                        className="bg-white dark:bg-darkCard p-2 lg:py-4 lg:px-6 rounded task-card"
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
                        <h4 className="text-xl lg:text-2xl font-semibold text-myBlack dark:text-white mt-3 lg:mt-6 mb-3">{task.name}</h4>
                        <Progress bgcolor={resolvedTheme === 'dark' ? `${task.color1}` : `${task.color}`} completed={task.completed} />

                        <p className="text-myGrey dark:text-[#D1D1D1] text-lg mt-3">{task.complete}</p>
                    </div>))
                }
            </div>

            {/* Team progress and task report */}
            <div className="my-6 lg:flex gap-6">

                <div className="p-2 lg:py-8 lg:px-7 rounded bg-white dark:bg-darkCard w-full ">
                    <div className="flex flex-wrap gap-2 justify-between mb-7 items-center">
                        <h1 className="text-xl text-myBlack dark:text-myWhite">Team Progress</h1>
                        <div>
                            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                <Listbox.Button

                                    className="flex gap-2 items-center  relative w-full cursor-pointer rounded-lg text-[#252525] dark:text-myWhite py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                                <hr className='my-5 dark:border-darkLine border-myLine' />
                                <div className='flex items-center gap-3'>
                                    <Image src={progress.img} alt="buyer" className='w-[60px] h-[60px]' />

                                    <div className='w-full'>
                                        <h4 className='text-2xl font-semibold text-myBlack dark:text-white mb-3'>{progress.name}</h4>
                                        <Progress bgcolor={resolvedTheme === 'dark' ? `${progress.color1}` : `${progress.color}`} completed={progress.completed} />
                                        <div className='flex justify-between mt-3'>
                                            <span className='text-myGrey dark:text-[#D1D1D1] text-lg'>{progress.complete}</span>
                                            <span className='text-myGrey dark:text-[#D1D1D1] text-lg'>{progress.parcent}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>))
                        }

                    </div>
                </div>

                {/* Task Reports */}
                <div className="lg:mt-0 mt-6 p-2 lg:py-8 lg:px-7 rounded bg-white dark:bg-darkCard h-full w-full ">
                    <div className="flex flex-wrap gap-3 justify-between items-center">
                        <h4 className="text-xl text-myBlack dark:text-myWhite">Tasks Reports</h4>
                        <div>
                            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                <Listbox.Button

                                    className="flex gap-2 items-center  relative w-full cursor-pointer rounded-lg text-[#252525] dark:text-myWhite py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    {selectedPerson.name}
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </Listbox.Button>
                                <Listbox.Options
                                    className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white dark:bg-darkBg py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

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

                    <hr className='my-4 lg:my-7 dark:border-darkLine' />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {
                            cards.map(card => (<div
                                key={card.id}
                                className="group bg-white dark:bg-[#1E192A] p-2 lg:py-4 lg:px-6 rounded task-card">
                                <div className="flex justify-between">
                                    <h3 className="text-base text-myBlack dark:text-myWhite">{card.name}</h3>
                                    <div className='group-hover:shadow-xl duration-500 w-10 h-10 bg-[#EDECFB] dark:bg-[#164C3C] flex items-center justify-center rounded-md'>
                                        <span className='mt-1 p-2 text-myBlue dark:text-myGreen'>{card.icon}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <h3 className="text-[32px] text-myBlack dark:text-white font-semibold">{card.view}</h3>
                                    <div className='py-1 px-2 rounded flex items-center'
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

            <hr className="my-5 lg:my-6 dark:border-darkLine border-myLine" />

            {/* Task report card */}
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl text-myBlack dark:text-myWhite">Task reports</h3>
                    <p className="text-sm border dark:border-darkLine border-myLine text-myBlack dark:text-myWhite  py-3 px-4 rounded">Browse all tasks</p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full md:w-[454px] lg:w-full mx-auto">
                    {
                        taskReportCards.map(card => (<div
                            key={card.id}
                            className="bg-white dark:bg-darkCard p-2 lg:py-8 lg:px-10 rounded  hover:-skew-y-3 duration-300"
                        >
                            <Image className='w-[120px] h-[120px] mx-auto mb-8' src={card.img} alt="buyer" />
                            <h4 className='text-myBlack dark:text-white text-2xl font-semibold text-center mb-7'>{card.title}</h4>
                            <div className='flex flex-wrap gap-2 justify-around mb-8'>
                                <p className='text-myBlue dark:text-myGreen rounded py-1 px-5 md:px-8  lg:px-12 bg-[#F6F6FB] dark:bg-[#2C3241]'>{card.category}</p>
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

            <hr className='mt-6 dark:border-darkLine border-myLine' />
        </div>
    )
}
export default tasks;