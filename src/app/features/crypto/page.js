import React from 'react';
import Image from 'next/image';
import bitcoin from '@/../public/images/bitcoin.png';
import monero from '@/../public/images/monero.png';
import ethereum from '@/../public/images/ethereum.png';
import tether from '@/../public/images/tether.png';
import tron from '@/../public/images/tron.png';
import dash from '@/../public/images/dash.png';
import dogecoin from '@/../public/images/dogecoin.png';
import ripple from '@/../public/images/ripple.png';
import binance from '@/../public/images/binance.png';
import ellaism from '@/../public/images/ellaism.png';
import digibyte from '@/../public/images/digibyte.png';
import patcoin from '@/../public/images/patcoin.png';
import adx from '@/../public/images/adx.png';
import img5 from '@/../public/images/img5.png';
import img6 from '@/../public/images/img6.png';
import img7 from '@/../public/images/img7.png';
import Link from 'next/link';


const crypto = () => {

    const cards = [
        {
            id: 1,
            name: 'Bitcoin',
            wallet: 'BTC',
            amount: '$16,048.40',
            price: 'Latest price',
            parcent: '-1.26%',
            color: '#A82500',
            change: '24 change',
            img: bitcoin,
        },
        {
            id: 2,
            name: 'Ethereum',
            wallet: 'Ether',
            amount: '$16,048.40',
            price: 'Latest price',
            parcent: '0.0099%',
            color: '#4538D3',
            change: '24 change',
            img: ethereum,
        },
        {
            id: 3,
            name: 'Monero',
            wallet: 'BTC',
            amount: '$16,048.40',
            price: 'Latest price',
            parcent: '-1.26%',
            color: '#A82500',
            change: '24 change',
            img: monero,
        }
    ]

    const cryptos = [
        {
            id: 1,
            name: 'Tether',
            amount: '$75.00',
            parcent: '42.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$1,847,421.00',
            volume: '1,376,174.00',
            img: tether
        },
        {
            id: 2,
            name: 'XMR',
            amount: '$45.00',
            parcent: '3.56%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            color: '#A82500',
            cap: '$2,797,933.00',
            volume: '$2,323,337.00',
            img: monero
        },
        {
            id: 3,
            name: 'TRON',
            amount: '$55.00',
            parcent: '16.53%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$1,850,497.00',
            volume: '$1,544,962.00',
            img: tron
        },
        {
            id: 4,
            name: 'Dash',
            amount: '$15.00',
            parcent: '1.56%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            color: '#A82500',
            cap: '$1,437,001.00',
            volume: '$2,346,052.00',
            img: dash
        },
        {
            id: 5,
            name: 'Dogecoin',
            amount: '$200.00',
            parcent: '14.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$1,939,214.00',
            volume: '$2,470,540.00',
            img: dogecoin
        },
        {
            id: 6,
            name: 'Bitcoin',
            amount: '$900.00',
            parcent: '4.56%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            color: '#A82500',
            cap: '$1,544,962.00',
            volume: '$2,019,065.00',
            img: bitcoin
        },
        {
            id: 7,
            name: 'Ethereum',
            amount: '$10.00',
            parcent: '24.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$2,346,052.00',
            volume: '$1,774,195.00',
            img: ethereum
        },
        {
            id: 8,
            name: 'Ripple',
            amount: '$100.00',
            parcent: '14.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$2,474,709.00',
            volume: '$1,166,081.00',
            img: ripple
        },
        {
            id: 9,
            name: 'Binance',
            amount: '$5.00',
            parcent: '8.56%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            color: '#A82500',
            cap: '$1,706,959.00',
            volume: '$2,048,664.00',
            img: binance
        },
        {
            id: 10,
            name: 'Ellaism',
            amount: '$25.00',
            parcent: '1.9%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            color: '#A82500',
            cap: '$1,760,576.00',
            volume: '$1,760,576.00',
            img: ellaism
        },
        {
            id: 11,
            name: 'DigiByte',
            amount: '$10.00',
            parcent: '22.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$2,702,244.00',
            volume: '$2,554,502.00',
            img: digibyte
        },
        {
            id: 12,
            name: 'PotCoin',
            amount: '$5.00',
            parcent: '3.56%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            color: '#A82500',
            cap: '$1,970,502.00',
            volume: '$1,962,547.00',
            img: patcoin
        },
        {
            id: 13,
            name: 'ADX',
            amount: '$5.00',
            parcent: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$2,660,713.00',
            volume: '$1,850,497.00',
            img: adx
        }
    ]

    const news = [
        {
            id: 1,
            date: 'December 17, 2023',
            time: '7 Min Read',
            title: 'Just 5% Think BTC Will Break $100,000 in 2013:Poll',
            img: img5
        },
        {
            id: 2,
            date: 'December 17, 2023',
            time: '7 Min Read',
            title: 'These 10 Massive Trends Will Rule Cryptocurrency in 2023',
            img: img6
        },
        {
            id: 3,
            date: 'December 17, 2023',
            time: '7 Min Read',
            title: 'Bitcoins are going to be sold in 200 different Walmart locations.',
            img: img7
        },
    ]

    const tredings = [
        {
            id: 1,
            name: 'Tether',
            amount: '$75.00',
            parcent: '42.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$1,847,421.00',
            volume: '1,376,174.00',
            img: tether
        },
        {
            id: 5,
            name: 'Dogecoin',
            amount: '$200.00',
            parcent: '14.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$1,939,214.00',
            volume: '$2,470,540.00',
            img: dogecoin
        },
        {
            id: 6,
            name: 'Bitcoin',
            amount: '$900.00',
            parcent: '4.56%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$1,544,962.00',
            volume: '$2,019,065.00',
            img: bitcoin
        },
        {
            id: 7,
            name: 'Ethereum',
            amount: '$10.00',
            parcent: '24.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$2,346,052.00',
            volume: '$1,774,195.00',
            img: ethereum
        },
        {
            id: 8,
            name: 'Ripple',
            amount: '$100.00',
            parcent: '14.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$2,474,709.00',
            volume: '$1,166,081.00',
            img: ripple
        },
        {
            id: 9,
            name: 'Binance',
            amount: '$5.00',
            parcent: '8.56%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            color: '#4538D3',
            cap: '$1,706,959.00',
            volume: '$2,048,664.00',
            img: binance
        }
    ]

    return (
        <div className='px-6 pt-10 pb-6'>
            <h3 className='text-[32px] font-semibold text-[#2E293E]'>Crypto</h3>
            <span className='text-sm text-[#2E293E]'>Lorem ipsum dolor sit ammet consectetur.</span>

            {/* crypto card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cards.map(card => (<div
                        className='p-5 bg-white rounded mt-8'
                        key={card.id}
                    >
                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <Image className='w-8 h-8' src={card.img} alt="curency" />
                                <div>
                                    <h4 className='text-2xl text-[#2E293E] font-semibold'>{card.name}</h4>
                                    <span className='text-lg text-[#584E69]'>{card.wallet}</span>
                                </div>
                            </div>
                            <div>
                                <span className='text-sm text-white bg-[#4538D3] py-1 px-2 rounded'>{card.wallet}</span>
                            </div>
                        </div>

                        <div className='flex justify-between mt-8 mb-2'>
                            <h5 className='text-xl font-semibold text-[#4538D3]'>{card.amount}</h5>
                            <span className='text-lg' style={{ color: card.color }}>{card.parcent}</span>
                        </div>

                        <div className='flex justify-between'>
                            <h4 className='text-xl text-[#584E69]'>{card.price}</h4>
                            <h4 className='text-xl text-[#584E69]'>{card.change}</h4>
                        </div>

                    </div>))
                }
            </div>

            {/* crypto table */}
            <div className='bg-white py-8 px-7 mt-8 rounded'>
                <div className='flex justify-between'>
                    <h3 className='text-xl text-[#2E293E]'>Crypto</h3>
                    <span className="border rounded border-[#ECEEFB] text-[#2E293E] text-sm py-3 px-4">5-10 of 50</span>
                </div>
                <div className="overflow-x-auto block mt-10 ">
                    <table className="table overflow-hidden w-[150%] lg:w-full">

                        <thead className='bg-[#F5F7FD] text-lg text-[#2E293E]'>
                            <tr>
                                <th >
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'># Name</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'>Amount</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'>24H(%)</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'>Market Cap</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'>Volume(24h)</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cryptos.map(crypto => (<tr
                                    key={crypto.id}
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-8 h-8">
                                                    <Image src={crypto.img} alt="company name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-base">{crypto.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg ">{crypto.amount}</td>
                                    <div className='flex items-center' style={{ color: crypto.color }}>
                                        <td className="text-lg ">{crypto.parcent}</td>
                                        <span className="ml-3 w-4 h-4">{crypto.trending}</span>
                                    </div>
                                    <td className="text-lg ">{crypto.cap}</td>
                                    <td className="text-lg " style={{ color: crypto.color }}>{crypto.volume}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Cryto News */}

            <div>
                <h3 className='text-[32px] text-[#2E293E] mt-6 mb-10'>Crypto news</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        news.map(company => (<div
                            key={company.id}
                            className='py-4 px-5 bg-white rounded'
                        >
                            <Image className='rounded' src={company.img} alt="company" />
                            <div className='flex justify-between my-5'>
                                <div className='flex'>
                                    <span className="material-symbols-outlined w-6 h-6 text-[#584E69]">calendar_month</span>
                                    <span className='text-[#584E69] text-base ml-[10px]'>{company.date}</span>
                                </div>
                                <div className='flex'>
                                    <span className="material-symbols-outlined w-6 h-6 text-[#584E69]">alarm</span>
                                    <span className='text-[#584E69] text-base ml-[10px]'>{company.time}</span>
                                </div>
                            </div>
                            <h4 className='text-2xl font-semibold text-[#2E293E] mb-8'>{company.title}</h4>
                            <Link href='#' className='text-[#4538D3] flex items-center gap-2 cursor-pointer'>
                                <span>View Company</span>
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>))
                    }
                </div>
            </div>

            {/* Trending  */}
            <div className='bg-white py-8 px-7 mt-6 rounded'>
                <div className='flex justify-between'>
                    <h3 className='text-xl text-[#2E293E]'>Trending</h3>
                    <span className="border rounded border-[#ECEEFB] text-[#2E293E] text-sm py-3 px-4">5-10 of 50</span>
                </div>
                <div className="overflow-x-auto block mt-10 ">
                    <table className="table overflow-hidden w-[150%] lg:w-full">

                        <thead className='bg-[#F5F7FD] text-lg text-[#2E293E]'>
                            <tr>
                                <th >
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'># Name</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'>Amount</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'>24H(%)</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'>Market Cap</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#2E293E]'>Volume(24h)</span>
                                        <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_more</span>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                tredings.map(crypto => (<tr
                                    key={crypto.id}
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-8 h-8">
                                                    <Image src={crypto.img} alt="company name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-base text-[#2E293E]">{crypto.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg text-[#2E293E]">{crypto.amount}</td>
                                    <div className='flex items-center' style={{ color: crypto.color }}>
                                        <td className="text-lg ">{crypto.parcent}</td>
                                        <span className="ml-3 w-4 h-4">{crypto.trending}</span>
                                    </div>
                                    <td className="text-lg text-[#2E293E]">{crypto.cap}</td>
                                    <td className="text-lg " style={{ color: crypto.color }}>{crypto.volume}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <hr className='mt-6'/>
        </div>
    );
};

export default crypto;