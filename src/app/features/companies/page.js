"use client"

import { useState, Fragment } from 'react'
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

const people = [
    { id: 1, name: '14 Aug - 25 Aug', unavailable: false },
    { id: 2, name: '26 Aug - 12 Sep', unavailable: false },
    { id: 3, name: '13 Sep - 26 Sep', unavailable: false },
]

const allCompanies = [
    {
        id: 1,
        company: 'Google',
        industry:'Search engine',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Oct 1, 2023',
        img: google
    },
    {
        id: 2,
        company: 'Facebook',
        industry:'Social Media',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 1, 2023',
        img: fb
    },
    {
        id: 3,
        company: 'You Tube',
        industry:'Entertaintment',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 1, 2023',
        img: youtube
    },
    {
        id: 4,
        company: 'Linkdln',
        industry:'Social Media',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 12, 2023',
        img: linkedin
    },
    {
        id: 5,
        company: 'Telegram',
        industry:'Social Media',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 30, 2023',
        img: telegram
    },
    {
        id: 6,
        company: 'Twitter',
        industry:'Social Media',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 30, 2023',
        img: twitter
    },
    {
        id: 7,
        company: 'Dribble',
        industry:'Development',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 30, 2023',
        img: dribbble
    },
    {
        id: 8,
        company: 'Twitch',
        industry:'Social Media',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 30, 2023',
        img: twitch
    },
    {
        id: 9,
        company: 'Webflow',
        industry:'Web Development',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 30, 2023',
        img: webflow
    },
    {
        id: 10,
        company: 'Pinterest',
        industry:'Social Media',
        phone: '(+33)7 35 55 84 97',
        website: 'info@example.com',
        date:'Sep 30, 2023',
        img: pinterest
    },
]

const companies = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    return (
        <div className='px-6 pt-10 pb-6'>
            <h3 className='text-[32px] font-semibold text-[#2E293E]'>Companies</h3>
            <span className='text-sm text-[#2E293E]'>Lorem ipsum dolor sit ammet consectetur.</span>

            <div className='mt-8'>
                <span className='text-white py-3 px-4 bg-[#4538D3] text-sm rounded'>Table view</span>
                <span className='text-[#2E293E] py-3 px-4 bg-white text-sm rounded ml-6 border-[#2E293E]'>Card view</span>
            </div>

            <div className='bg-white py-8 px-7 mt-8 rounded'>
                <div className='flex justify-between'>
                    <h3 className='text-xl'>Contacts List</h3>
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

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#F5F7FD] text-lg text-[#2E293E]'>
                            <tr>
                                <th >
                                    <div className='flex items-center'>
                                        <span>Company List</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Indrustry</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                                    </div>
                                </th>                               
                                <th>
                                    <div className='flex items-center'>
                                        <span>Website</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Phone Number</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Start Date</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                                    </div>
                                </th>
                                
                                <th>
                                    <div className='flex items-center'>
                                        <span>Delete</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCompanies.map(company => (<tr
                                    key={company.id}
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-8 h-8">
                                                    <Image src={company.img} alt="company name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-base">{company.company}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg">{company.industry}</td>
                                    <td className="text-lg">{company.website}</td>
                                    <td className="text-lg">{company.phone}</td>
                                    <td className="text-lg">{company.date}</td>
                                    <th >
                                        <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-[#4538D3]">
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
            <hr className='mt-6' />
        </div>
    );
};

export default companies;