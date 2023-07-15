"use client"
import RecentContacts from "@/app/components/RecentContacts/RecentContacts";
import './reports.css';
import LineChart from "@/app/components/Chart/LineChart";
import { Listbox } from "@headlessui/react";
import { useState, Fragment } from "react";
import PageViews from "@/app/components/Chart/PageViews";
import Users from "@/app/components/Chart/Users";
import SignUps from "@/app/components/Chart/SignUps";

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
    const [selectedPerson, setSelectedPerson] = useState(people[0])

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
            bgColor: '#4538D3',
            color: 'white'
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
            bgColor: '#4538D3',
            color: 'white'
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
            bgColor: '#FFA5A5',
            color: 'black'
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
            bgColor: '#4538D3',
            color: 'white'
        }
    ]

    return (
        <div className="px-6 pb-6 pt-10">
            <h3 className="text-[32px] font-semibold text-[#2E293E]">Dashboard</h3>
            <span className='text-sm text-[#2E293E]'>Jul 8, 2023</span>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                {
                    cards.map(card => (<div
                        key={card.id}
                        className="bg-white py-4 px-6 rounded boxShadow">
                        <div className="flex justify-between">
                            <h3 className="text-base text-[#2E293E]">{card.name}</h3>
                            <span className="p-2 bg-[#F1F1FA] text-[#4538D3] flex justify-center items-center rounded boxShadow">{card.icon}</span>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-[32px] text-[#2E293E] font-semibold">{card.view}</h3>
                            <div className=' px-2 rounded ml-4  flex items-center justify-center'
                                style={{ backgroundColor: card.bgColor, color: card.color }}
                            >
                                <h5 className="text-sm" >{card.increment}</h5>
                                <span>{card.trending}</span>
                            </div>
                        </div>
                    </div>))
                }
            </section>

            {/* Line Chart */}
            <section className="bg-white rounded sm:p-5 py-[60px] pl-[60px] pr-[58px] boxShadow">
                <div className='flex justify-between'>
                    <h3 className='text-xl text-[#2E293E]'>Monthly page views</h3>
                    <div>
                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                            <Listbox.Button

                                className="lg:flex hidden gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] bg-white py-2 px-3 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                {selectedPerson.name}
                                <span class="material-symbols-outlined">
                                    expand_more
                                </span>
                            </Listbox.Button>
                            <Listbox.Options
                                className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white py-2  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                {people.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        value={person}
                                        disabled={person.unavailable}
                                        as={Fragment}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 px-5 ${active ? 'bg-[#4538D3] text-white' : 'text-gray-900'
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
                <hr className="my-10" />
                <div >
                    <LineChart></LineChart>
                </div>
            </section>


            {/* Small charts */}
            <section className="my-6 rounded  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded boxShadow">
                    <div className="p-7">
                        <h5 className="text-base test-[#2E293E] mb-4">Page views</h5>
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-semibold">52.8K</h3>
                            <div className=' px-2 rounded ml-4  flex items-center justify-center bg-[#4538D3] text-white'>
                                <h5 className="text-sm" >38.5%</h5>
                                <span class="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                        <hr className="mt-4" />
                    </div>
                    <PageViews></PageViews>
                </div>


                <div className="bg-white rounded boxShadow">
                    <div className="p-7">
                        <h5 className="text-base test-[#2E293E] mb-4">Users</h5>
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-semibold">25.6K</h3>
                            <div className=' px-2 rounded ml-4  flex items-center justify-center bg-[#4538D3] text-white'>
                                <h5 className="text-sm" >38.5%</h5>
                                <span class="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                        <hr className="mt-4" />
                    </div>
                    <Users></Users>
                </div>

                <div className="bg-white rounded boxShadow">
                    <div className="p-7">
                        <h5 className="text-base test-[#2E293E] mb-4">New sign ups</h5>
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-semibold">4.5K</h3>
                            <div className=' px-2 rounded ml-4  flex items-center justify-center bg-[#FFA5A5] text-[#1E192A]'>
                                <h5 className="text-sm" >4.1%</h5>
                                <span class="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                        <hr className="mt-4" />
                    </div>
                    <SignUps></SignUps>
                </div>
            </section>
            
            <RecentContacts></RecentContacts>

        </div>
    )
}
export default Reports;