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
    const [selectedPerson, setSelectedPerson] = useState(people[0])

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
            color: '#4538D3'
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
            color: '#725002'
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
            color: '#4538D3'
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
            color: '#725002'
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
            color: '#4538D3'
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
            color: '#725002'
        }
    ]

    return (
        <div className='px-6 pb-6 pt-10'>
            <h1 className="text-2xl font-semibold">Dashbord</h1>
            <span className='text-sm text-[#2E293E]'>Jul 9, 2023</span>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>

                <div className='bg-white rounded  px-10 pt-10 pb-6'>
                    <h4 className='text-lg text-[#2E293E]'>Total Sales</h4>
                    <div className='flex justify-between'>
                        <div>
                            <span className='text-lg text-[#2E293E] font-semibold mt-2'>$209,907.00</span>
                        </div>
                        <div className=' px-2 rounded  flex items-center justify-center bg-[#4538D3] text-white'>
                            <h5 className="text-sm">38.5%</h5>
                            <span class="material-symbols-outlined">trending_up</span>
                        </div>
                    </div>
                    <hr className='my-5 lg:my-10' />
                    <TotalSeles></TotalSeles>
                </div>
                {/* Recent order */}
                <div className="bg-white rounded p-10 ">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl ml-5">Recent Orders</h3>
                        <h4 className='text-sm border border-[#ECEEFB] rounded py-3 px-4 mr-5 cursor-pointer'>See all</h4>
                    </div>
                    <hr className='my-10' />

                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>

                                {
                                    products.map(product => (<tr
                                        key={product.id}
                                        className='flex justify-between'>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-[60px] h-[60px]">
                                                        <Image src={product.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-base font-bold">{product.name}</div>
                                                    <div className="text-sm text-[#2E293E]">{product.post}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-[#4538D3] font-semibold text-xl'>
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
            <div className='p-8 bg-white my-6 rounded'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl text-[#2E293E]'>Products</h3>
                    <span className='border border-[#ECEEFB] rounded py-3 px-4  text-sm'>Browse Products</span>
                </div>
                <hr className='my-7' />

                <div className="overflow-x-auto">
                    <table className="table whitespace-nowrap">

                        <thead className='bg-[#F5F7FD] text-lg text-[#2E293E] boxShadow'>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th className='text-lg text-[#2E293E]'>Product No</th>
                                <th className='text-lg text-[#2E293E]'>Status</th>
                                <th className='text-lg text-[#2E293E]'>Category</th>
                                <th className='text-lg text-[#2E293E]'>Start Date</th>
                                <th className='text-lg text-[#2E293E]'>Sales Price</th>
                                <th className='text-lg text-[#2E293E]'>Stock</th>
                                <th className='text-lg text-[#2E293E]'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map(product => (<tr
                                    key={product.id}
                                >
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="text-base text-[#2E293E]">{product.productsNo}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-base text-[#2E293E]'>{product.status}</td>
                                    <td className='text-base text-[#2E293E]'>{product.category}</td>
                                    <td className='text-base text-[#2E293E]'>{product.startDate}</td>
                                    <td className='text-base text-[#2E293E]'>{product.salesPrice}</td>
                                    <td className='text-base text-[#2E293E]'>{product.stock}</td>
                                    <th className='cursor-pointer'>
                                        <span class="material-symbols-outlined w-[18px] h-[18px] hover:text-[#4538D3]">
                                            auto_fix
                                        </span>
                                        <span class="material-symbols-outlined w-5 h-5 hover:text-red-500 ml-1">
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
            <div className='p-8 bg-white mt-6 rounded'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl text-[#2E293E]'>Order Status</h1>
                    <div>
                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                            <Listbox.Button

                                className="flex  gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] bg-white py-2 px-3 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                <hr className='my-7' />

                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="table">

                        <thead className='bg-[#F5F7FD] text-lg text-[#2E293E] boxShadow'>
                            <tr>
                                <th className='text-lg text-[#2E293E]'>Name</th>
                                <th className='text-lg text-[#2E293E]'>Product</th>
                                <th className='text-lg text-[#2E293E]'>Category</th>
                                <th className='text-lg text-[#2E293E]'>Date</th>
                                <th className='text-lg text-[#2E293E]'>Price</th>
                                <th className='text-lg text-[#2E293E]'>Status</th>
                                <th className='text-lg text-[#2E293E]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderProducts.map(product => (<tr
                                    key={product.id}
                                >

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-10 h-10">
                                                    <Image src={product.img} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-base text-[#2E293E]">{product.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-base text-[#2E293E]">{product.product}</td>
                                    <td className="text-base text-[#2E293E]">{product.category}</td>
                                    <td className="text-base text-[#2E293E]">{product.startDate}</td>
                                    <td className="text-base text-[#2E293E]">{product.salesPrice}</td>
                                    <td className="text-base text-[#2E293E]" style={{color:product.color}}>{product.status}</td>
                                    <th className='w-[18px] h-[18px] cursor-pointer'>:</th>
                                </tr>))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <hr className='mt-6' />
        </div>
    )
}
export default products;