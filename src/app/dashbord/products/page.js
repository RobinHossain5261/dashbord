"use client"
import phone1 from '@/../public/images/phone1.png';
import phone2 from '@/../public/images/phone2.png';
import phone3 from '@/../public/images/phone3.png';
import phone4 from '@/../public/images/phone4.png';

import photo1 from '@/../public/images/photo1.png';
import photo2 from '@/../public/images/photo2.png';
import photo3 from '@/../public/images/photo3.png';
import photo4 from '@/../public/images/photo4.png';
import photo5 from '@/../public/images/photo5.png';
import photo6 from '@/../public/images/photo6.png';
import TotalSeles from '@/app/components/Chart/TotalSeles';
import Image from 'next/image';

import { useState, Fragment } from 'react'
import { Listbox } from '@headlessui/react';

import './products.css';
import { useTheme } from 'next-themes';

export const metadata = {
    title: 'DashBord-Products',
    description: 'products order and statas',
}

const people = [
    { id: 1, name: '14 Aug - 25 Aug', unavailable: false },
    { id: 2, name: '26 Aug - 12 Sep', unavailable: false },
    { id: 3, name: '13 Sep - 26 Sep', unavailable: false },
]

const products = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const { resolvedTheme, setTheme } = useTheme();

    // Recent order products data
    const products = [
        {
            id: 1,
            name: 'iPhone Pro Max',
            post: '10 minutes ago',
            price: "$2190.00",
            image: phone1
        },
        {
            id: 2,
            name: 'Gallaxy Pro',
            post: '10 minutes ago',
            price: "$210.00",
            image: phone2
        },
        {
            id: 3,
            name: 'Note 10',
            post: '10 minutes ago',
            price: "$290.00",
            image: phone3
        },
        {
            id: 4,
            name: 'Macbook air',
            post: '10 minutes ago',
            price: "$990.00",
            image: phone4
        },
    ]
    // All Products details data
    const allProducts = [
        {
            id: 1,
            productsNo: '#2E293E',
            status: 'MacBook Pro 15',
            category: 'Laptop',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo1
        },
        {
            id: 2,
            productsNo: '#2E293E',
            status: 'Google Pixel 6',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '15',
            img: photo2
        },
        {
            id: 3,
            productsNo: '#2E293E',
            status: 'iphone 13 Pro',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '13',
            img: photo3
        },
        {
            id: 4,
            productsNo: '#2E293E',
            status: 'Macbook Air',
            category: 'Notebook',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo4
        },
        {
            id: 5,
            productsNo: '#2E293E',
            status: 'Google Pixel 6',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo5
        },
        {
            id: 6,
            productsNo: '#2E293E',
            status: 'iphone 13 Pro',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '20',
            img: photo6
        },
    ]
    // Orders products data
    const orderProducts = [

        {
            id: 2,
            name: 'Mehmet Talay',
            product: 'Google Pixel 6',
            status: 'Shipped',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            img: photo1,
            color: '#4538D3',
            color1: '#00E177'
        },
        {
            id: 3,
            name: 'Kadin Bozkurt',
            product: 'iphone 13 Pro',
            status: 'Falied',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '13',
            img: photo2,
            color: '#725002',
            color1: '#FFA5A5'
        },
        {
            id: 4,
            name: 'Kadin Bozkurt',
            product: 'Macbook Air',
            status: '	Processing',
            category: 'Notebook',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo3,
            color: '#4538D3',
            color1: '#00E177'
        },
        {
            id: 5,
            name: 'Sukran Memis',
            product: 'Google Pixel 6',
            status: 'Shipped',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo4,
            color: '#725002',
            color1: '#FFA5A5'
        },
        {
            id: 6,
            name: 'Kadin Bozkurt',
            product: 'iphone 13 Pro',
            status: 'Processing',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '20',
            img: photo5,
            color: '#4538D3',
            color1: '#F8C140'
        },
        {
            id: 7,
            name: 'Kadin Bozkurt',
            product: 'iphone 13 Pro',
            status: 'Shipped',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '20',
            img: photo6,
            color: '#725002',
            color1: '#00E177'
        }
    ]

    return (
        <div className='px-2 lg:px-6 pb-6 pt-10 bg-bgColor dark:bg-darkBg'>
            <h1 className="text-2xl font-semibold text-myBlack dark:text-white">Dashbord</h1>
            <span className='text-sm text-myBlack dark:text-white'>Jul 9, 2023</span>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>

                <div className='bg-white dark:bg-darkCard rounded p-2 lg:px-10 lg:pt-10 lg:pb-6'>
                    <h4 className='text-lg text-myBlack dark:text-[#ECEEFB]'>Total Sales</h4>
                    <div className='flex justify-between'>
                        <div>
                            <span className='text-lg text-myBlack dark:text-white font-semibold mt-2'>$209,907.00</span>
                        </div>
                        <div className=' px-2 rounded  flex items-center justify-center bg-myBlue dark:bg-[#00E177] text-white dark:text-[#1E192A]'>
                            <h5 className="text-sm">38.5%</h5>
                            <span class="material-symbols-outlined">trending_up</span>
                        </div>
                    </div>
                    <hr className='my-5 lg:my-10 border-myLine dark:border-darkLine' />
                    <TotalSeles></TotalSeles>
                </div>
                {/* Recent order */}
                <div className="bg-white dark:bg-darkCard  rounded p-2 lg:p-10 ">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl text-myBlack dark:text-myWhite ">Recent Orders</h3>
                        <h4 className='text-sm text-myBlack dark:text-myWhite border border-[#ECEEFB] dark:border-darkLine rounded py-3 px-4 cursor-pointer'>See all</h4>
                    </div>
                    <hr className='my-5 lg:my-10 border-myLine dark:border-darkLine' />

                    <div className="overflow-x-auto whitespace-nowrap">
                        <table className="table">
                            <tbody>

                                {
                                    products.map(product => (<tr
                                        key={product.id}
                                        className='flex justify-between items-center border-myLine dark:border-darkLine'>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle ">
                                                        <Image src={product.image} alt="Avatar Tailwind CSS Component" className='w-[60px] h-[60px] dark:bg-[#1E192A] rounded-full' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-base text-myBlack font-bold dark:text-white">{product.name}</div>
                                                    <div className="text-sm text-myBlack dark:text-myWhite">{product.post}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-myBlue dark:text-myGreen font-semibold text-xl'>
                                            {product.price}
                                        </td>

                                    </tr>))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* all products details */}
            <div className='p-2 lg:p-8 bg-white dark:bg-darkCard my-6 rounded'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl text-myBlack dark:text-myWhite'>Products</h3>
                    <span className='border border-[#ECEEFB] dark:border-darkLine rounded py-3 px-4  text-sm text-myBlack dark:text-myLine'>Browse Products</span>
                </div>
                <hr className='my-5 lg:my-7 border-myLine dark:border-darkLine' />

                <div className="overflow-x-auto">
                    <table className="table whitespace-nowrap">

                        <thead className='bg-[#F5F7FD]  dark:bg-darkBg text-lg    '>
                            <tr className='dark:border-darkLine text-myBlack dark:text-white'>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                    </label>
                                </th>
                                <th className='text-lg text-myBlack dark:text-white'>Product No</th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Status</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Category</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Start Date</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Sales price</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Stock</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Delete</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map(product => (<tr
                                    key={product.id}
                                    className='dark:border-darkLine'
                                >
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="text-base text-myBlack dark:text-myWhite">{product.productsNo}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-base text-myBlack dark:text-myWhite'>{product.status}</td>
                                    <td className='text-base text-myBlack dark:text-myWhite'>{product.category}</td>
                                    <td className='text-base text-myBlack dark:text-myWhite'>{product.startDate}</td>
                                    <td className='text-base text-myBlack dark:text-myWhite'>{product.salesPrice}</td>
                                    <td className='text-base text-myBlack dark:text-myWhite'>{product.stock}</td>
                                    <th className='cursor-pointer text-myBlack dark:text-myWhite'>
                                        <span class="material-symbols-outlined w-[18px] h-[18px] hover:text-myBlue">
                                            auto_fix
                                        </span>
                                        <span class="material-symbols-outlined w-5 h-5 hover:text-red-500 ml-2">
                                            delete
                                        </span>
                                    </th>
                                </tr>))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            {/* Order Status */}
            <div className='p-2 lg:p-8 bg-white dark:bg-darkCard mt-6 rounded'>
                <div className='flex flex-wrap gap-2 justify-between items-center'>
                    <h1 className='text-xl text-myBlack dark:text-myWhite'>Order Status</h1>
                    <div>
                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                            <Listbox.Button

                                className="flex  gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] dark:text-myWhite dark:border-darkLine py-2 px-3 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                {selectedPerson.name}
                                <span class="material-symbols-outlined">
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
                    </div>

                </div>
                <hr className='my-5 lg:my-7 border-myLine dark:border-darkLine' />

                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="table">

                        <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-white'>
                            <tr className='dark:border-darkLine  border-myLine'>
                                <th className='text-lg '>Name</th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Product </span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Category</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Date</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Price</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Status</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span>Action</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_less</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderProducts.map(product => (<tr
                                    key={product.id}
                                    className='dark:border-darkLine border-myLine'
                                >

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-10 h-10">
                                                    <Image src={product.img} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-base text-myBlack dark:text-myWhite">{product.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-base text-myBlack dark:text-myWhite">{product.product}</td>
                                    <td className="text-base text-myBlack dark:text-myWhite">{product.category}</td>
                                    <td className="text-base text-myBlack dark:text-myWhite">{product.startDate}</td>
                                    <td className="text-base text-myBlack dark:text-myWhite">{product.salesPrice}</td>
                                    <td className="text-base text-myBlack" style={{ color: resolvedTheme === 'light' ? `${product.color}` : `${product.color1}` }}>{product.status}</td>
                                    <th className='w-[18px] h-[18px] cursor-pointer text-myBlack dark:text-myWhite'>:</th>
                                </tr>))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    )
}
export default products;