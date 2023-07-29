"use client"
import './reports.css';
import { Listbox } from "@headlessui/react";
import { useState, Fragment } from "react";
import { useTheme } from "next-themes";
import DoughnutChart from '@/components/Chart/DoughnutChart';
import RecentContacts from '@/components/RecentContacts/RecentContacts';
import LineChart from '@/components/Chart/LineChart';
import PageViews from '@/components/Chart/PageViews';
import Users from '@/components/Chart/Users';
import SignUps from '@/components/Chart/SignUps';
import { reportCards } from '../../../../public/data/dashbordData';


const people = [
    { id: 1, name: 'This Month', unavailable: false },
    { id: 2, name: 'This Week', unavailable: false },
    { id: 3, name: 'This Year', unavailable: false },
]


const Reports = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <div className="px-2 lg:px-6 pt-10 bg-bgColor dark:bg-darkBg">
            <h3 className="text-[32px] font-semibold text-myBlack dark:text-white">Dashboard</h3>
            <span className='text-sm text-myBlack dark:text-white'>Jul 8, 2023</span>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                {
                    reportCards.map(card => (<div
                        key={card.id}
                        className="group bg-white dark:bg-darkCard py-4 px-6 rounded boxShadow dark:darkShadow">
                        <div className="flex justify-between flex-wrap">
                            <h3 className="text-base text-myBlack dark:text-white">{card.name}</h3>
                            <span className="group-hover:shadow-xl p-2 bg-[#F1F1FA] dark:bg-[#21574B] text-myBlue dark:text-myGreen flex justify-center items-center rounded boxShadow">{card.icon}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <h3 className="text-[32px] text-myBlack dark:text-white font-semibold">{card.view}</h3>
                            <div className='group px-2 rounded  flex items-center justify-center'
                                style={{
                                    backgroundColor: resolvedTheme === 'dark' ? `${card.bgColor2}` : `${card.bgColor1}`,
                                    color: resolvedTheme === 'dark' ? `${card.color2}` : `${card.color1}`
                                }}
                            >
                                <h5 className="text-sm" >{card.increment}</h5>
                                <span >{card.trending}</span>
                            </div>
                        </div>
                    </div>))
                }
            </section>

            {/* Line Chart */}
            <section className=" bg-white dark:bg-darkCard rounded p-2 lg:p-5 lg:py-[60px] lg:pl-[60px] lg:pr-[58px] boxShadow">
                <div className='flex flex-wrap gap-2 justify-between'>
                    <h3 className='text-xl text-myBlack dark:text-white'>Monthly page views</h3>
                    <div>
                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                            <Listbox.Button

                                className="flex gap-2 items-center  relative w-full rounded-lg text-[#252525] dark:text-white  py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm cursor-pointer">
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
                <hr className="my-5 lg:my-10 dark:border-darkLine" />
                <div className="h-[300px] md:h-[350px] lg:h-[400px] w-full">
                    <LineChart></LineChart>
                </div>
            </section>


            {/* Small charts */}
            <section className="my-6 rounded  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-darkCard rounded boxShadow dark:darkShadow">
                    <div className="p-2 lg:p-7">
                        <h5 className="text-base text-myBlack dark:text-white mb-4">Page views</h5>
                        <div className="flex justify-between">
                            <h3 className="text-2xl text-myBlack dark:text-white font-semibold">52.8K</h3>
                            <div className=' px-2 rounded  flex items-center justify-center dark:bg-myGreen dark:text-myBlack bg-myBlue text-white '>
                                <h5 className="text-sm">38.5%</h5>
                                <span class="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                        <hr className="mt-4 border-line dark:border-darkLine" />
                    </div>
                    <PageViews></PageViews>
                </div>


                <div className="bg-white dark:bg-darkCard dark:text-white rounded boxShadow">
                    <div className="p-2 lg:p-7">
                        <h5 className="text-base text-myBlack mb-4">Users</h5>
                        <div className="flex justify-between">
                            <h3 className="text-2xl text-myBlack dark:text-white font-semibold">25.6K</h3>
                            <div className=' px-2 rounded ml-4  flex items-center justify-center dark:bg-myGreen dark:text-[#1E192A] bg-myBlue text-white'>
                                <h5 className="text-sm" >38.5%</h5>
                                <span class="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                        <hr className="mt-4 border-line  dark:border-darkLine" />
                    </div>
                    <Users></Users>
                </div>

                <div className="bg-white dark:bg-darkCard dark:text-white rounded boxShadow">
                    <div className="p-2 lg:p-7">
                        <h5 className="text-base dark:text-white text-myBlack mb-4">New sign ups</h5>
                        <div className="flex justify-between">
                            <h3 className="text-2xl text-myBlack dark:text-white font-semibold">4.5K</h3>
                            <div className=' px-2 rounded ml-4  flex items-center justify-center  bg-myPink text-[#1E192A]'>
                                <h5 className="text-sm" >4.1%</h5>
                                <span class="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                        <hr className="mt-4 dark:border-darkLine border-myLine" />
                    </div>
                    <SignUps></SignUps>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
                <DoughnutChart></DoughnutChart>
                <RecentContacts></RecentContacts>
            </div>
            <hr className="pb-6 dark:border-darkLine border-myLine" />
        </div>
    )
}
export default Reports;