"use client"
import React, { useRef, useState } from 'react';
import { informations } from '../../../../public/data/profileData';
import Image from 'next/image';
import profile from '@/../public/images/profile1.png';
import { Switch, Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { APIs, invoiceDetails, notifications, teams } from '../../../../public/data/settingsData';
import { Listbox } from '@headlessui/react';

import visa from '@/../public/images/visa.png';
import bitpay from '@/../public/images/bitpay.png';
import stripe from '@/../public/images/Stripe.png';
import skrill from '@/../public/images/skrill.png';
import paypal from '@/../public/images/PayPal.png';
import neteller from '@/../public/images/neteller.png';
import mybank from '@/../public/images/mybank.png';
import mastercard from '@/../public/images/mastercard.png';
import amex from '@/../public/images/Amex.png';
import Link from 'next/link';

const people = [
    { id: 1, name: 'State', unavailable: false },
    { id: 2, name: 'Orieo', unavailable: false },
    { id: 3, name: 'Arizona', unavailable: false },
]

const SettingsThree = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const [enabled, setEnabled] = useState(true);
    const [enabled1, setEnabled1] = useState(true);
    const [enabled2, setEnabled2] = useState(true);
    const [enabled3, setEnabled3] = useState(true);
    const [enabled4, setEnabled4] = useState(true);

    const inputFile = useRef(null);

    const onButtonClick = () => {
        inputFile.current.click();
    }

    return (
        <div className='pt-11 pb-6 px-6 bg-bgColor dark:bg-darkBg'>
            <h3 className='font-semibold text-myBlack text-[32px] dark:text-white'>General settings</h3>
            <span className='text-sm text-myBlack dark:text-white'   >Lorem ipsum dolor sit amet consectetur.</span>

            <div className='block lg:flex gap-6 mt-8'>

                <section className='bg-white dark:bg-darkCard py-7 px-8 rounded cardShadow h-full mb-6'>
                    <div className='relative'>
                        <Image className='w-[130px] h-[130px] rounded-full mx-auto' src={profile} alt='profile' />
                        <input type='file' id="file" ref={inputFile} style={{ display: 'none' }} />
                        <button onClick={onButtonClick} className='absolute bottom-3 left-[46%]'>
                            <div className='w-[30px] h-[30px] rounded-full bg-myBlue dark:bg-myGreen flex items-center justify-center'>
                                <span class="material-symbols-outlined w-6 h-6 text-white">add_photo_alternate</span>
                            </div>
                        </button>
                    </div>
                    <h5 className='text-myBlack text-xl font-semibold text-center mt-3 mb-6'>Environmental Specialist</h5>
                    <div className="overflow-x-auto whitespace-nowrap ">
                        <table className="table">
                            <tbody>
                                {
                                    informations.map(info => (<tr
                                        key={info.id}
                                        className='dark:border-darkLine'
                                    >
                                        <td className='flex gap-2'>
                                            <div className='text-myGrey dark:text-myLine text-sm'>{info.icon}</div>
                                            <div className='text-myGrey dark:text-myLine text-sm'>{info.name}</div>
                                        </td>
                                        <td className='text-myBlack dark:text-white text-base'>{info.more}</td>
                                        <td className='text-myBlack dark:text-white text-base'>{info.info}</td>
                                    </tr>))
                                }
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <Tab.Group>
                        <Tab.List className='flex flex-wrap gap-6 bg-white dark:bg-darkCard pt-8 px-7 pb-8'>
                            <Tab
                                className='w-[180px]  text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>Account</span>
                                            <span class="material-symbols-outlined">edit</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                            <Tab
                                className='w-[180px] text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>Team</span>
                                            <span class="material-symbols-outlined">group</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                            <Tab
                                className='w-[180px] text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>Belling</span>
                                            <span class="material-symbols-outlined">add_card</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                            <Tab
                                className='w-[180px] text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>Notifications</span>
                                            <span class="material-symbols-outlined">notifications</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                            <Tab
                                className='w-[180px] text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>API</span>
                                            <span class="material-symbols-outlined">settings</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>

                        <Tab.Panels>
                            <Tab.Panel>
                                <div className='bg-white dark:bg-darkCard px-7 pb-8 w-full rounded'>
                                    <hr className='pb-8 border-myLine dark:border-darkLine' />
                                    <h5 className='text-xl text-myBlack dark:text-white font-semibold'>Basic information</h5>
                                    <p className='text-base text-myGrey dark:text-myWhite mt-5 mb-8 text-justify'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                                    <form className='py-7 px-8 border border-myWhite dark:border-darkLine rounded'>
                                        <h4 className='text-myBlack dark:text-white text-2xl font-semibold'>Account</h4>
                                        <hr className='border-myLine dark:border-darkLine my-7' />

                                        <div className='lg:flex block gap-6 mb-7'>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="text-lg text-myBlack dark:text-white">Full name</span>
                                                </label>
                                                <input type="text" defaultValue='Angel' className="w-full px-[18px] py-2 outline-none bg-[#F7F8FD] text-myGrey dark:bg-[#1E192A] dark:text-myLine rounded" />
                                            </div>

                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="text-lg text-myBlack dark:text-white">Last name</span>
                                                </label>
                                                <input type="text" defaultValue='Alvarado' className="w-full outline-none px-[18px] py-2 text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded" />
                                            </div>
                                        </div>
                                        <div className='lg:flex gap-6 mb-7'>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="text-lg text-myBlack dark:text-white">Email address</span>
                                                </label>
                                                <input type="text" defaultValue='info@example.com' className="w-full px-[18px] py-2 outline-none bg-[#F7F8FD] text-myGrey dark:bg-[#1E192A] dark:text-myLine rounded" />
                                            </div>

                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="text-lg text-myBlack dark:text-white">Phone number</span>
                                                </label>
                                                <input type="text" defaultValue='(+33)7 35 55 45 43' className="w-full outline-none px-[18px] py-2 text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded" />
                                            </div>
                                        </div>
                                        <div className='lg:flex gap-6 mb-7'>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="text-lg text-myBlack dark:text-white">Location</span>
                                                </label>
                                                <input type="text" defaultValue='New York, NY' className="w-full px-[18px] py-2 outline-none text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded" />
                                            </div>

                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="text-lg text-myBlack dark:text-white">Website</span>
                                                </label>
                                                <input type="text" defaultValue='Website.com' className="w-full outline-none px-[18px] py-2 text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded" />
                                            </div>
                                        </div>
                                        <div className="form-control mb-7">
                                            <label className="label">
                                                <span className="text-lg text-myBlack dark:text-white">About biography</span>
                                            </label>
                                            <textarea className="h-28 text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded outline-none py-2 px-[18px]" defaultValue='Say something about you...'></textarea>
                                        </div>
                                        <div className='flex flex-wrap gap-6'>
                                            <button className='py-3 px-4 bg-myBlue dark:bg-myGreen text-white text-sm rounded'>Update profile</button>
                                            <button className='py-3 px-4 bg- text-myBlack dark:text-myWhite text-sm rounded border border-myLine dark:border-darkLine hover:bg-myBlue dark:hover:bg-myGreen hover:text-white'>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </Tab.Panel>

                            <Tab.Panel>
                                <div className='bg-white dark:bg-darkCard px-7 pb-8 rounded'>
                                    <h4 className='text-2xl text-myBlack font-semibold mb-8'>Team settings</h4>
                                    <div className="overflow-x-auto">
                                        <table className="table overflow-hidden whitespace-nowrap w-full">

                                            <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-white'>
                                                <tr className=' dark:border-darkLine border-myLine'>
                                                    <th>
                                                        <label>
                                                            <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                                        </label>
                                                    </th>
                                                    <th>Name</th>
                                                    <th >
                                                        <div className='flex items-center'>
                                                            <span>Role</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className='flex items-center'>
                                                            <span>Date Added</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className='flex items-center'>
                                                            <span>Delete</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                                        </div>
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    teams.map(team => (<tr
                                                        key={team.id}
                                                        className='dark:border-darkLine border-myLine'
                                                    >
                                                        <th>
                                                            <label>
                                                                <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                                            </label>
                                                        </th>
                                                        <td>
                                                            <div className="flex items-center space-x-3">
                                                                <div className="avatar">
                                                                    <div className="mask mask-squircle w-8 h-8">
                                                                        <Image src={team.img} alt="company name" />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-base text-myBlack dark:text-myWhite">{team.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="flex items-center space-x-3">
                                                                <div className="text-base text-myBlue dark:text-myGreen">{team.role}</div>
                                                            </div>
                                                        </td>

                                                        <td className="text-lg text-myBlack dark:text-myWhite">{team.date}</td>
                                                        <th className='text-myBlack dark:text-myWhite'>
                                                            <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue dark:hover:text-myGreen">
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
                                <div className='bg-white dark:bg-darkCard px-7 pb-8 rounded'>
                                    <hr className='pb-8 border-myLine dark:border-darkLine' />
                                    <div className='flex gap-3 items-center'>
                                        <span class="material-symbols-outlined text-myBlue dark:text-myGreen">add_card</span>
                                        <h4 className='text-myBlack dark:text-white text-2xl font-semibold'>Payment methods</h4>
                                    </div>

                                    <div className='mt-8 mb-6 flex flex-wrap gap-5'>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image src={visa} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image src={bitpay} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image src={stripe} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image className='rounded-[10px]' src={skrill} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image src={paypal} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image src={neteller} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image src={neteller} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image src={mybank} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image className='rounded-[10px]' src={mastercard} alt='visa' />
                                            </label>
                                        </div>
                                        <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-myBlue  dark:checked:bg-myGreen border-myBlue dark:border-myGreen" checked />
                                                <Image className='rounded-[10px]' src={amex} alt='visa' />
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div className='bg-white dark:bg-darkCard rounded px-8 py-7 mt-6 cardShadow'>
                                    <h4 className='text-2xl text-myBlack dark:text-white font-semibold text-center mb-6'>Enter your payment details</h4>

                                    <form>
                                        <div className='flex justify-between  rounded bg-[#F7F8FD] dark:bg-[#1E192A] mb-5'>
                                            <div className='flex w-full gap-2 py-2 px-[18px]'>
                                                <span class="material-symbols-outlined text-myGrey dark:text-myLine w-5 h-5">add_card</span>
                                                <input type="text" placeholder='Card number' className="w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm placeholder-myGrey dark:placeholder-myLine" />
                                            </div>
                                            <input type="text" placeholder="MM / YY CVC" className="text-end w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] placeholder-myGrey dark:placeholder-myLine" />
                                        </div>
                                        <input type="text" placeholder='Street address' className="w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] rounded mb-5 placeholder-myGrey dark:placeholder-myLine" />

                                        <div className='flex gap-6 mb-5'>
                                            <input type="text" placeholder='Apt, unit, suite, etc. (optional)' className="w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] rounded placeholder-myGrey dark:placeholder-myLine" />
                                            <input type="text" placeholder='(+33)7 35 55 21 02' className="w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] rounded placeholder-myGrey dark:placeholder-myLine" />
                                        </div>
                                        <div className='flex gap-6'>
                                            <input type="text" placeholder='City' className="w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] rounded placeholder-myGrey dark:placeholder-myLine" />
                                            <div className='flex gap-6 w-full'>
                                                <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                                    <Listbox.Button

                                                        className="flex justify-between bg-[#F7F8FD] dark:bg-[#1E192A] gap-2 items-center  relative w-full cursor-pointer rounded-lg text-myGrey dark:text-myLine  py-2 px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                        {selectedPerson.name}
                                                        <span class="material-symbols-outlined text-myGrey dark:text-myLine">
                                                            expand_more
                                                        </span>
                                                    </Listbox.Button>
                                                    <Listbox.Options
                                                        className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white dark:bg-darkCard  py-2  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

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
                                                <input type="text" placeholder='Zip code' className="w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] rounded placeholder-myGrey dark:placeholder-myLine" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center mt-10'>
                                            <button className='text-sm bg-myBlue dark:bg-myGreen text-white px-4 py-3 rounded'>Add new card</button>
                                        </div>
                                    </form>

                                </div>

                                <hr className='border-myLine dark:border-darkLine my-6' />

                                <div className='bg-white dark:bg-darkCard px-7 py-8 rounded'>
                                    <h4 className='text-2xl font-semibold text-myBlack dark:text-white mb-7'>Invoice Detail</h4>
                                    <div className="overflow-x-auto">
                                        <table className="table overflow-hidden whitespace-nowrap w-full">

                                            <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-white'>
                                                <tr className=' dark:border-darkLine border-myLine'>
                                                    <th>
                                                        <label>
                                                            <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                                        </label>
                                                    </th>
                                                    <th>Contacts</th>
                                                    <th >
                                                        <div className='flex items-center'>
                                                            <span>Amount</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className='flex items-center'>
                                                            <span>Date</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className='flex items-center'>
                                                            <span>PDF</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                                        </div>
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    invoiceDetails.map(invoice => (<tr
                                                        key={invoice.id}
                                                        className='dark:border-darkLine border-myLine'
                                                    >
                                                        <th>
                                                            <label>
                                                                <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                                            </label>
                                                        </th>
                                                        <td>
                                                            <div className="text-base text-myBlack dark:text-myWhite">{invoice.contacts}</div>

                                                        </td>
                                                        <td>
                                                            <div className="flex items-center space-x-3">
                                                                <div className="text-base text-myBlack dark:text-myWhite">{invoice.amount}</div>
                                                            </div>
                                                        </td>

                                                        <td className="text-lg text-myBlack dark:text-myWhite">{invoice.date}</td>
                                                        <th className='text-myBlack dark:text-myWhite'>
                                                            <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue dark:hover:text-myGreen">
                                                                download
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
                                <div className='px-7 pb-8 bg-white dark:bg-darkCard rounded'>
                                    <div className='flex items-center gap-2 py-8'>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite w-7 h-7">notifications_active</span>
                                        <h4 className='text-2xl text-myBlack dark:text-myWhite font-semibold '>Notifications settings </h4>
                                    </div>

                                    <div className='w-full'>
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>Email Notifications</h6>
                                                    <span className='text-sm text-myGrey dark:text-myWhite'>Receive weekly email notifications.</span>
                                                </div>
                                                <div className="form-control">
                                                    <Switch
                                                        checked={enabled}
                                                        onChange={setEnabled}
                                                        className={`${enabled ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                                            } relative inline-flex h-7 w-8 lg:w-14 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Enable notifications</span>
                                                        <span
                                                            className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                            </div>
                                            <hr className='my-6 border-myLine dark:border-darkLine' />
                                        </div>
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>Phone Notifications</h6>
                                                    <span className='text-sm text-myGrey dark:text-myWhite'>Receive weekly email notifications.</span>
                                                </div>
                                                <div className="form-control">
                                                    <Switch
                                                        checked={enabled1}
                                                        onChange={setEnabled1}
                                                        className={`${enabled1 ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                                            } relative inline-flex h-7 w-8 lg:w-14 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Enable notifications</span>
                                                        <span
                                                            className={`${enabled1 ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                            </div>
                                            <hr className='my-6 border-myLine dark:border-darkLine' />
                                        </div>
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>New tasks</h6>
                                                    <span className='text-sm text-myGrey dark:text-myWhite'>Receive weekly email notifications.</span>
                                                </div>
                                                <div className="form-control">
                                                    <Switch
                                                        checked={enabled3}
                                                        onChange={setEnabled3}
                                                        className={`${enabled3 ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                                            } relative inline-flex h-7 w-8 lg:w-14 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Enable notifications</span>
                                                        <span
                                                            className={`${enabled3 ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                            </div>
                                            <hr className='my-6 border-myLine dark:border-darkLine' />
                                        </div>
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>Billing and payments</h6>
                                                    <span className='text-sm text-myGrey dark:text-myWhite'>Lorem ipsum dolor sit amet consectetur. Id.</span>
                                                </div>
                                                <div className="form-control">
                                                    <Switch
                                                        checked={enabled2}
                                                        onChange={setEnabled2}
                                                        className={`${enabled2 ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                                            } relative inline-flex h-7 w-8 lg:w-14 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Enable notifications</span>
                                                        <span
                                                            className={`${enabled2 ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                            </div>
                                            <hr className='my-6 border-myLine dark:border-darkLine' />
                                        </div>
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>Updates and announcements</h6>
                                                    <span className='text-sm text-myGrey dark:text-myWhite'>Lorem ipsum dolor sit amet consectetur.</span>
                                                </div>
                                                <div className="form-control">
                                                    <Switch
                                                        checked={enabled4}
                                                        onChange={setEnabled4}
                                                        className={`${enabled4 ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                                            } relative inline-flex h-7 w-8 lg:w-14 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Enable notifications</span>
                                                        <span
                                                            className={`${enabled4 ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Tab.Panel>

                            <Tab.Panel>
                                <div className='bg-white px-7 pb-8  dark:bg-darkCard rounded'>
                                    <div className='flex justify-between items-center mb-8'>
                                        <h6 className='text-xl text-myBlack dark:text-white'>API Settings</h6>
                                        <button className='text-sm px-4 py-3 bg-myBlue text-white rounded'>Add</button>
                                    </div>

                                    <div className="overflow-x-auto z-50">
                                        <table className="table overflow-hidden whitespace-nowrap">

                                            <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-myWhite'>
                                                <tr className='border-myLine dark:border-darkLine'>
                                                    <th >
                                                        <div className='flex items-center'>
                                                            <span>Site</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className='flex items-center'>
                                                            <span>Invoice ID</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className='flex items-center'>
                                                            <span>Password</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                        </div>
                                                    </th>

                                                    <th>
                                                        <div className='flex items-center'>
                                                            <span>Action</span>
                                                            <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                                        </div>
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    APIs.map(API => (<tr
                                                        key={API.id}
                                                        className='dark:border-darkLine border-myLine z-10'
                                                    >
                                                        <td className="text-lg text-myBlack dark:text-myWhite ">{API.site}</td>
                                                        <td className="text-lg text-myBlack dark:text-myWhite ">{API.invoice}</td>
                                                        <td className="text-lg text-myBlack dark:text-myWhite">{API.password}</td>
                                                        <th className='text-myBlack dark:text-myWhite'>
                                                            <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue">
                                                                visibility_off
                                                            </span>
                                                            <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-red-400">
                                                                more_vert
                                                            </span>

                                                        </th>
                                                    </tr>))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <button className='text-sm text-white px-4 py-3 bg-myBlue rounded mt-8'>Update Password</button>
                                </div>
                            </Tab.Panel>

                        </Tab.Panels>
                    </Tab.Group>
                </section>

            </div>
            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default SettingsThree;