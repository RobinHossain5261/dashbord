"use client"
import React, { useRef, useState } from 'react';
import { informations } from '../../../../public/data/profileData';
import Image from 'next/image';
import profile from '@/../public/images/profile1.png';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const SettingsThree = () => {

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

                <section className='bg-white dark:bg-darkCard px-7 py-8 w-full rounded'>
                    <Tab.Group>
                        <Tab.List className='flex flex-wrap gap-6'>
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
                        <hr className='my-8 border-myLine dark:border-darkLine' />

                        <Tab.Panels>
                            <Tab.Panel>
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
                            </Tab.Panel>
                            <Tab.Panel>

                            </Tab.Panel>
                            <Tab.Panel>Content 3</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </section>

            </div>
            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default SettingsThree;