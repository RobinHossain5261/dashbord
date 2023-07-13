import Image from 'next/image';
import React from 'react';

import img1 from '@/../public/images/img1.png';
import img2 from '@/../public/images/img2.png';
import img3 from '@/../public/images/img3.png';
import img4 from '@/../public/images/img4.png';

const board = () => {

    const bords = [
        {
            id: 1,
            work: 'Degine',
            title: 'Designing and constructing landing pages',
            des: 'Lorem ipsum dolor sit amet consectetur. Id vitae hendrerit elementum commodo.',
            file: <span class="material-symbols-outlined">attach_file</span>,
            note: <span class="material-symbols-outlined">speaker_notes</span>
        },

        {
            id: 2,
            work: 'Marketing',
            title: 'Meeting to do market research.......',
            des: 'Lorem ipsum dolor sit amet consectetur. Id vitae hendrerit elementum commodo.',
            file: <span class="material-symbols-outlined">attach_file</span>,
            note: <span class="material-symbols-outlined">speaker_notes</span>
        },
        {
            id: 3,
            work: 'development',
            title: 'Designing and creating landing pages',
            des: 'Lorem ipsum dolor sit amet consectetur. Id vitae hendrerit elementum commodo.',
            file: <span class="material-symbols-outlined">attach_file</span>,
            note: <span class="material-symbols-outlined">speaker_notes</span>
        },
        {
            id: 4,
            work: 'Marketing',
            title: 'Mobile App Interactions Subjected to Validation',
            des: 'Lorem ipsum dolor sit amet consectetur. Id vitae hendrerit elementum commodo.',
            file: <span class="material-symbols-outlined">attach_file</span>,
            note: <span class="material-symbols-outlined">speaker_notes</span>
        },
        {
            id: 5,
            work: 'Marketing',
            title: 'Designing and creating landing pages....',
            des: 'Lorem ipsum dolor sit amet consectetur. Id vitae hendrerit elementum commodo.',
            file: <span class="material-symbols-outlined">attach_file</span>,
            note: <span class="material-symbols-outlined">speaker_notes</span>
        },
        {
            id: 6,
            work: 'Degine',
            title: 'Mobile app UI/UX design & development',
            des: 'Lorem ipsum dolor sit amet consectetur. Id vitae hendrerit elementum commodo.',
            file: <span class="material-symbols-outlined">attach_file</span>,
            note: <span class="material-symbols-outlined">speaker_notes</span>
        },
    ]

    return (
        <div className='px-6 pt-10 pb-6'>
            <h3 className='text-[32px] font-semibold text-[#2E293E]'>Board </h3>
            <span className='text-sm text-[#2E293E]'>Lorem ipsum dolor sit ammet consectetur.</span>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    bords.map(bord => (<div
                        key={bord.id}
                        className="bg-white py-10 px-8 rounded border hover:border-[#4538D3] hover:-skew-y-3 duration-300"
                    >
                        <span className='text-sm text-white bg-[#4538D3] py-1 px-2 rounded'>{bord.work}</span>
                        <h4 className='text-2xl text-[#2E293E] mt-6 mb-4 font-semibold'>{bord.title}</h4>
                        <p className='text-lg text-[#2E293E] mb-7'>{bord.des}</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex  gap-4'>
                                <span className='text-[#584E69] w-6 h-4'>{bord.file}</span>
                                <div className='text-[#584E69] flex gap-1 '>
                                    <span className='w-6 h-4'> {bord.note}</span>
                                    <span className='text-base'>4</span>
                                </div>
                            </div>
                            <div className='flex'>
                                <Image className='w-10 h-10 rounded-full border-4 border-white' src={img1} alt='bord member' />
                                <Image className='w-10 h-10 -ml-5 rounded-full border-4 border-white' src={img2} alt='bord member' />
                                <Image className='w-10 h-10 -ml-5 rounded-full border-4 border-white' src={img3} alt='bord member' />
                                <Image className='w-10 h-10 -ml-5 rounded-full border-4 border-white' src={img4} alt='bord member' />
                            </div>
                        </div>
                    </div>))
                }
            </div>
            <hr className='mt-6' />

        </div>
    );
};

export default board;