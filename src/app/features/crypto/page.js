"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { cryptoCards, cryptos, news, tredings } from '../../../../public/data/featuresData';


const crypto = () => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <div className='px-2 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Crypto</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>

            {/* crypto card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6'>
                {
                    cryptoCards.map(card => (<div
                        className='p-3 lg:p-5 bg-white rounded mt-8 dark:bg-darkCard'
                        key={card.id}
                    >
                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <Image className='w-8 h-8' src={card.img} alt="curency" />
                                <div>
                                    <h4 className='text-2xl text-myBlack dark:text-white font-semibold'>{card.name}</h4>
                                    <span className='text-lg text-myGrey dark:text-myWhite'>{card.wallet}</span>
                                </div>
                            </div>
                            <div>
                                <span className='text-sm text-white dark:text-myGreen dark:bg-[#2C3140] bg-myBlue py-1 px-2 rounded'>{card.wallet}</span>
                            </div>
                        </div>

                        <div className='flex justify-between mt-4 lg:mt-8 mb-2'>
                            <h5 className='text-xl font-semibold text-myBlue dark:text-myGreen'>{card.amount}</h5>
                            <span className='text-lg'
                                style={{ color: resolvedTheme === 'dark' ? `${card.color1}` : `${card.color}` }}>{card.parcent}
                            </span>
                        </div>

                        <div className='flex justify-between'>
                            <h4 className='text-xl text-myGrey dark:text-myWhite'>{card.price}</h4>
                            <h4 className='text-xl text-myGrey dark:text-myWhite'>{card.change}</h4>
                        </div>

                    </div>))
                }
            </div>

            {/* crypto table */}
            <div className='bg-white dark:bg-darkCard p-2 lg:py-8 lg:px-7 mt-8 rounded'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl text-myBlack dark:text-myWhite'>Crypto</h3>
                    <span className="border rounded border-myLine dark:border-darkLine text-myBlack dark:text-myWhite text-sm py-3 px-4">5-10 of 50</span>
                </div>
                <div className="overflow-x-auto block mt-5 lg:mt-10 ">
                    <table className="table overflow-hidden w-full">

                        <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack'>
                            <tr className='dark:border-darkLine'>
                                <th >
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'># Name</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'>Amount</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'>24H(%)</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'>Market Cap</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'>Volume(24h)</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cryptos.map(crypto => (<tr
                                    key={crypto.id}
                                    className='dark:border-darkLine border-myLine'
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-8 h-8">
                                                    <Image src={crypto.img} alt="company name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-base text-myBlack dark:text-myWhite">{crypto.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg text-myBlack dark:text-myWhite ">{crypto.amount}</td>
                                    <div className='flex items-center'
                                        style={{ color: resolvedTheme === 'dark' ? `${crypto.color1}` : `${crypto.color}` }}>
                                        <td className="text-lg ">{crypto.parcent}</td>
                                        <span className="ml-3 w-4 h-4">{crypto.trending}</span>
                                    </div>
                                    <td className="text-lg  text-myBlack dark:text-myWhite">{crypto.cap}</td>
                                    <td className="text-lg "
                                        style={{ color: resolvedTheme === 'dark' ? `${crypto.color1}` : `${crypto.color}` }}>{crypto.volume}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Cryto News */}
            <div>
                <h3 className='text-[32px] text-myBlack dark:text-white my-4 lg:mt-6 lg:mb-10'>Crypto news</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        news.map(company => (<div
                            key={company.id}
                            className='p-2 lg:py-4 lg:px-5 bg-white rounded dark:bg-darkCard'
                        >
                            <Image className='rounded' src={company.img} alt="company" />
                            <div className='flex justify-between my-5'>
                                <div className='flex'>
                                    <span className="material-symbols-outlined w-6 h-6 text-myGrey dark:text-[#D1D1D1]">calendar_month</span>
                                    <span className='text-myGrey dark:text-[#D1D1D1] text-base ml-[10px]'>{company.date}</span>
                                </div>
                                <div className='flex whitespace-nowrap'>
                                    <span className="material-symbols-outlined w-6 h-6 text-myGrey dark:text-[#D1D1D1]">alarm</span>
                                    <span className='text-myGrey dark:text-[#D1D1D1] text-base ml-[10px]'>{company.time}</span>
                                </div>
                            </div>
                            <h4 className='text-2xl font-semibold text-myBlack dark:text-white mb-4 lg:mb-8'>{company.title}</h4>
                            <Link href='#' className='text-myBlue dark:text-myGreen flex items-center gap-2 cursor-pointer'>
                                <span>View Company</span>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>))
                    }
                </div>
            </div>

            {/* Trending  */}
            <div className='bg-white dark:bg-darkCard p-2 lg:py-8 lg:px-7 mt-6 rounded'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl text-myBlack dark:text-myWhite'>Trending</h3>
                    <span className="border rounded border-myLine dark:border-darkLine text-myBlack dark:text-myWhite text-sm py-3 px-4">5-10 of 50</span>
                </div>
                <div className="overflow-x-auto block mt-5 lg:mt-10 ">
                    <table className="table overflow-hidden w-full">

                        <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack '>
                            <tr className='dark:border-darkLine '>
                                <th >
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'># Name</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'>Amount</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'>24H(%)</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'>Market Cap</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-myBlack dark:text-myWhite'>Volume(24h)</span>
                                        <span class="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                tredings.map(crypto => (<tr
                                    key={crypto.id}
                                    className='dark:border-darkLine border-myLine'
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-8 h-8">
                                                    <Image src={crypto.img} alt="company name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-base text-myBlack dark:text-myWhite">{crypto.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg text-myBlack dark:text-myWhite">{crypto.amount}</td>
                                    <div className='flex items-center text-myBlue dark:text-myGreen'>
                                        <td className="text-lg ">{crypto.parcent}</td>
                                        <span className="ml-3 w-4 h-4">{crypto.trending}</span>
                                    </div>
                                    <td className="text-lg text-myBlack dark:text-myWhite">{crypto.cap}</td>
                                    <td className="text-lg text-myBlue dark:text-myGreen">{crypto.volume}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default crypto;