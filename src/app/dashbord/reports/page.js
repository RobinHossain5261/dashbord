"use client"
import RecentContacts from "@/app/components/RecentContacts/RecentContacts";
import './reports.css';
import LineChart from "@/app/components/Chart/LineChart";
import { Listbox } from "@headlessui/react";
import { useState, Fragment } from "react";
import PageViews from "@/app/components/Chart/PageViews";
import Users from "@/app/components/Chart/Users";
import SignUps from "@/app/components/Chart/SignUps";
import DoughnutChart from "@/app/components/Chart/DoughnutChart";
import { useTheme } from "next-themes";

export const metadata = {
    title: 'DashBord-Reports',
    description: 'dahbord reports',
}

const people = [
    { id: 1, name: 'This Month', unavailable: false },
    { id: 2, name: 'This Week', unavailable: false },
    { id: 3, name: 'This Year', unavailable: false },
]


const Reports = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    const { resolvedTheme, setTheme } = useTheme();

    const cards = [
        {
            id: 1,
            name: 'Page view',
            view: '23.6k',
            icon: <span class="material-symbols-outlined">
                visibility
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor1: '#4538D3',
            color1: 'white',
            bgColor2: '#00E177',
            color2: '#1E192A'
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
            bgColor1: '#4538D3',
            color1: 'white',
            bgColor2: '#00E177',
            color2: '#1E192A'
        },
        {
            id: 3,
            name: 'New sign ups',
            view: '4.5k',
            icon: <span class="material-symbols-outlined">
                add
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            bgColor1: '#FFA5A5',
            bgColor2: '#FFA5A5',
            color1: 'black',
            color2: '#1E192A'
        },
        {
            id: 4,
            name: 'Subscriptions',
            view: '5.5k',
            icon: <span class="material-symbols-outlined">
                currency_exchange
            </span>,
            increment: '11.3%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor1: '#4538D3',
            bgColor2: '#00E177',
            color1: 'white',
            color2: '#1E192A'
        }
    ]

    return (
        <div className="px-6 pb-6 pt-10 bg-bgColor dark:bg-darkBg">
            <h3 className="text-[32px] font-semibold text-myBlack dark:text-white">Dashboard</h3>
            <span className='text-sm text-myBlack dark:text-white'>Jul 8, 2023</span>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                {
                    cards.map(card => (<div
                        key={card.id}
                        className="group bg-white dark:bg-darkCard py-4 px-6 rounded boxShadow dark:darkShadow">
                        <div className="flex justify-between">
                            <h3 className="text-base text-myBlack dark:text-white">{card.name}</h3>
                            <span className="group-hover:shadow-xl p-2 bg-[#F1F1FA] dark:bg-[#21574B] text-myBlue dark:text-myGreen flex justify-center items-center rounded boxShadow">{card.icon}</span>
                        </div>
                        <div className=" flex items-center">
                            <h3 className="text-[32px] text-myBlack dark:text-white font-semibold">{card.view}</h3>
                            <div className='group px-2 rounded ml-4  flex items-center justify-center'
                                style={{
                                    backgroundColor:resolvedTheme==='dark' ? `${card.bgColor2}` : `${card.bgColor1}`,
                                    color:resolvedTheme==='dark' ? `${card.color2}` : `${card.color1}`
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
            <section className=" bg-white dark:bg-darkCard rounded p-5 lg:py-[60px] lg:pl-[60px] lg:pr-[58px] boxShadow">
                <div className='flex justify-between'>
                    <h3 className='text-xl text-myBlack dark:text-white'>Monthly page views</h3>
                    <div>
                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                            <Listbox.Button

                                className="lg:flex hidden gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] dark:text-white  py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                <hr className="my-10 dark:border-darkLine" />
                <div className="h-[300px] md:lg-[350px] lg:h-[400px] w-full">
                    <LineChart></LineChart>
                </div>
            </section>


            {/* Small charts */}
            <section className="my-6 rounded  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-darkCard rounded boxShadow dark:darkShadow">
                    <div className="p-7">
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
                    <div className="p-7">
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
                    <div className="p-7">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DoughnutChart></DoughnutChart>
                <RecentContacts></RecentContacts>
            </div>
<hr className="mt-6 dark:border-darkLine border-myLine"/>
        </div>
    )
}
export default Reports;