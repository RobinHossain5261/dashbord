import Image from 'next/image';
import React from 'react';

import photo7 from '@/../public/images/photo7.png';
import photo8 from '@/../public/images/photo8.png';
import photo9 from '@/../public/images/photo9.png';
import photo10 from '@/../public/images/photo10.png';
import photo11 from '@/../public/images/photo11.png';
import photo12 from '@/../public/images/photo12.png';

const tasks = () => {
    const reportCards = [
        {
            id: 1,
            title: 'The process of designing landing pages',
            date: 'Sep 24 2023',
            category: "Design",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo7
        },
        {
            id: 2,
            title: 'Mobile app UI/UX design & development',
            date: 'Sep 24 2023',
            category: "Development",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo8
        },      
        {
            id: 3,
            title: 'Writing content for use in website layout',
            date: 'Sep 24 2023',
            category: "Design",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo9
        },
        {
            id: 4,
            title: 'The structure and design of the website.',
            date: 'Sep 24 2023',
            category: "Development",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo10
        },
        {
            id: 5,
            title: 'Writing content for use in website layout',
            date: 'Sep 24 2023',
            category: "Design",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo11
        },
        {
            id: 6,
            title: 'Designing a websites user interface and experience',
            date: 'Sep 24 2023',
            category: "Degine",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo12
        },
    ]
    return (
        <div className='px-6 pt-10 pb-6'>
            <h3 className='text-[32px] font-semibold text-[#2E293E]'>Tasks</h3>
            <span className='text-sm text-[#2E293E]'>Lorem ipsum dolor sit ammet consectetur.</span>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        reportCards.map(card => (<div
                            key={card.id}
                            className="bg-white py-4 md:py-6 lg:py-8 px-5 md:px-8 lg:px-10 rounded border hover:border-[#4538D3] hover:-skew-y-3 duration-300"
                        >
                            <Image className='w-[120px] h-[120px] mx-auto mb-8' src={card.img} alt="buyer" />
                            <h4 className='text-[#2E293E] text-2xl font-semibold text-center mb-7'>{card.title}</h4>
                            <div className='flex justify-between mb-8'>
                                <p className='text-[#4538D3] rounded border px-2  bg-[#F6F6FB]'>{card.category}</p>
                                <div className='border'></div>
                                <div className='flex'>
                                    <span className='cursor-pointer'>{card.icon}</span>
                                    <p className='ml-1 text-sm'>{card.date}</p>
                                </div>
                            </div>
                            <p className='text-lg text-center'>{card.des}</p>
                        </div>))
                    }
                </div>
                <hr className='mt-6' />
        </div>
    );
};

export default tasks;