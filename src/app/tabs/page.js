"use client"
import React from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { allContacts } from '../../../public/data/featuresData';
import Image from 'next/image';

const tabs = () => {

    const [bgColor, setBgColor] = useState(true);



    return (
        <div className='px-6 pt-10 Tabs'>
            <h3 className='mb-10 text-2xl'>Tabs creationg</h3>
            <Tabs >
                <TabList className='flex'>
                    <Tab style={{ backgroundColor: bgColor === false ? '#4538D3' : '', color: bgColor === false ? '#FFFFFF' : '' }} onClick={() => setBgColor(false)} className='text-myBlack dark:text-myWhite border dark:border-darkLine py-3 px-4  text-sm rounded ml-6 border-myLine'>Table view</Tab>
                    <Tab className='text-myBlack dark:text-myWhite border dark:border-darkLine py-3 px-4  text-sm rounded ml-6 border-myLine'>Card view</Tab>
                    <Tab className='text-myBlack dark:text-myWhite border dark:border-darkLine py-3 px-4  text-sm rounded ml-6 border-myLine'>Card view</Tab>
                </TabList>


                <TabPanel>
                    <div className='bg-white dark:bg-darkCard p-2 lg:py-8 lg:px-7 mt-8 rounded'>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <h3 className='text-xl text-myBlack dark:text-myWhite'>Contacts List</h3>
                            <div>
                                jfj
                            </div>
                        </div>

                        <div className="overflow-x-auto block mt-5 lg:mt-10">
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
                                                <span>Company List</span>
                                                <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className='flex items-center'>
                                                <span>Phone Number</span>
                                                <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className='flex items-center'>
                                                <span>Email Adress</span>
                                                <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                            </div>
                                        </th>
                                        <th>
                                            <div className='flex items-center'>
                                                <span>Last Intereactions</span>
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
                                        allContacts.map(contacts => (<tr
                                            key={contacts.id}
                                            className='dark:border-darkLine'
                                        >
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="text-base text-myBlack dark:text-myWhite">{contacts.productsNo}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-8 h-8">
                                                            <Image src={contacts.img} alt="company name" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-base text-myBlack dark:text-myWhite">{contacts.company}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-lg text-myBlack dark:text-myWhite">{contacts.phone}</td>
                                            <td className="text-lg  text-myBlack dark:text-myWhite">{contacts.email}</td>
                                            <td className="text-lg text-myBlack dark:text-myWhite">{contacts.interaction}</td>
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
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default tabs;