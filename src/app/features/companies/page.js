"use client"

import { useState, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { Listbox } from '@headlessui/react';

import google from '@/../public/images/google.png';
import apple from '@/../public/images/apple.png';
import dribbble from '@/../public/images/dribbble.png';
import fb from '@/../public/images/fb.png';
import github from '@/../public/images/github.png';
import linkedin from '@/../public/images/linkedin.png';
import pinterest from '@/../public/images/pinterest.png';
import reddit from '@/../public/images/reddit.png';
import telegram from '@/../public/images/telegram.png';
import youtube from '@/../public/images/youtube.png';
import twitch from '@/../public/images/twitch.png';
import webflow from '@/../public/images/webflow.png';
import twitter from '@/../public/images/twitter.png';
import Image from 'next/image';
import Link from 'next/link';
import { allCompanies, companiesData } from '../../../../public/data/featuresData';

const people = [
    { id: 1, name: '14 Aug - 25 Aug', unavailable: false },
    { id: 2, name: '26 Aug - 12 Sep', unavailable: false },
    { id: 3, name: '13 Sep - 26 Sep', unavailable: false },
]



const companies = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const [bgColor, setBgColor] = useState(true);
    return (
        <div className='px-2 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Companies</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>


            <Tab.Group>
                <Tab.List className='my-8'>
                    <Tab
                        className='text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                        as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                }
                            >
                                Table view
                            </button>
                        )}
                    </Tab>
                    <Tab
                        className='text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none ml-6'
                        as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                }
                            >
                                Card view
                            </button>
                        )}
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className='bg-white dark:bg-darkCard p-2 lg:py-8 lg:px-7 mt-8 rounded'>
                            <div className='flex flex-wrap gap-2 justify-between items-center'>
                                <h3 className='text-xl text-myBlack dark:text-myWhite'>Contacts List</h3>
                                <div>
                                    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                        <Listbox.Button

                                            className="flex gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] dark:text-myWhite  py-2 px-3 text-left border border-myLine dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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

                            <div className="overflow-x-auto block mt-5 lg:mt-10">
                                <table className="table overflow-hidden whitespace-nowrap">

                                    <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-myWhite'>
                                        <tr className='border-myLine dark:border-darkLine'>
                                            <th >
                                                <div className='flex items-center'>
                                                    <span>Company List</span>
                                                    <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='flex items-center'>
                                                    <span>Indrustry</span>
                                                    <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='flex items-center'>
                                                    <span>Website</span>
                                                    <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='flex items-center'>
                                                    <span>Phone Number</span>
                                                    <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='flex items-center'>
                                                    <span>Start Date</span>
                                                    <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                </div>
                                            </th>

                                            <th>
                                                <div className='flex items-center'>
                                                    <span>Delete</span>
                                                    <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                </div>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allCompanies.map(company => (<tr
                                                key={company.id}
                                                className='dark:border-darkLine border-myLine'
                                            >
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-8 h-8">
                                                                <Image src={company.img} alt="company name" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-base text-myBlack dark:text-myWhite">{company.company}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-lg text-myBlack dark:text-myWhite ">{company.industry}</td>
                                                <td className="text-lg text-myBlack dark:text-myWhite ">{company.website}</td>
                                                <td className="text-lg text-myBlack dark:text-myWhite">{company.phone}</td>
                                                <td className="text-lg text-myBlack dark:text-myWhite">{company.date}</td>
                                                <th className='text-myBlack dark:text-myWhite'>
                                                    <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue">
                                                        auto_fix
                                                    </span>
                                                    <span class="material-symbols-outlined cursor-pointer hover:text-red-500">
                                                        delete
                                                    </span>
                                                </th>
                                            </tr>))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
                            {
                                companiesData.map(buyer => (<div
                                    key={buyer.id}
                                    className='bg-white dark:bg-darkCard p-2 lg:px-8 lg:py-7 rounded'
                                >
                                    <Image className='w-20 h-20 cardShadow border-8 border-white dark:border-darkBg rounded-full mx-auto' src={buyer.img} alt='buyer' />
                                    <h4 className='text-2xl text-center text-myBlack dark:text-white font-semibold mt-6 mb-3'>{buyer.name}</h4>
                                    <hr className='border dark:border-darkLine mt-7 mb-10' />

                                    <div className='overflow-x-auto'>
                                        <table className="table whitespace-nowrap">
                                            <tbody>
                                                <tr className='border-none'>
                                                    <th className='flex items-center gap-2'>
                                                        <span className="material-symbols-outlined w-5 h-5 text-myGrey dark:text-[#D1D1D1] font-normal">outgoing_mail</span>
                                                        <span className='text-myGrey dark:text-[#D1D1D1] text-sm font-normal'>Email Address</span>
                                                    </th>
                                                    <td className='text-myBlack dark:text-[#D1D1D1] text-base'>:</td>
                                                    <td className='text-myBlack dark:text-[#D1D1D1] text-base'>{buyer.email}</td>
                                                </tr>
                                                <tr className='border-none'>
                                                    <th className='flex items-center gap-2'>
                                                        <span className="material-symbols-outlined w-5 h-5 text-myGrey dark:text-[#D1D1D1] font-normal">location_on</span>
                                                        <span className='text-myGrey dark:text-[#D1D1D1] text-sm font-normal'>Location</span>
                                                    </th>
                                                    <td className='text-myBlack dark:text-[#D1D1D1] text-base'>:</td>
                                                    <td className='text-myBlack dark:text-[#D1D1D1] text-base'>{buyer.location}</td>
                                                </tr>
                                                <tr className='dark:border-darkLine'>
                                                    <th className='flex items-center gap-2'>
                                                        <span className="material-symbols-outlined w-5 h-5 text-myGrey dark:text-[#D1D1D1] font-normal">language</span>
                                                        <span className='text-myGrey dark:text-[#D1D1D1] text-sm font-normal'>Website</span>
                                                    </th>
                                                    <td className='text-myBlack dark:text-[#D1D1D1] text-base'>:</td>
                                                    <td className='text-myBlue dark:text-myGreen cursor-pointer text-base flex items-center gap-2'>
                                                        <span> {buyer.website}</span>
                                                        <span class="material-symbols-outlined  w-5 h-5">arrow_forward</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr className='border dark:border-darkLine my-10' />
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2 text-[#1E192A] hover:text-myBlue dark:hover:text-myGreen dark:text-myLine'>
                                            <span className='text-sm '>View details</span>
                                            <span class="material-symbols-outlined  w-5 h-5">arrow_forward</span>
                                        </div>
                                        <div className='text-myBlack dark:text-myWhite'>
                                            <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue dark:hover:text-myGreen">auto_fix</span>
                                            <span class="material-symbols-outlined cursor-pointer hover:text-red-500">delete</span>
                                        </div>
                                    </div>
                                </div>))
                            }
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>




            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default companies;