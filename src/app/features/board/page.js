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
            work: 'Development',
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
        <div className='px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Board </h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    bords.map(bord => (<div
                        key={bord.id}
                        className="bg-white dark:bg-darkCard py-10 px-8 rounded hover:-skew-y-3 duration-300"
                    >
                        <span className='text-sm text-white dark:text-myGreen bg-myBlue dark:bg-[#2C3140] py-1 px-2 rounded'>{bord.work}</span>
                        <h4 className='text-2xl text-myBlack mt-6 mb-4 font-semibold dark:text-white'>{bord.title}</h4>
                        <p className='text-lg text-myBlack mb-7 dark:text-myWhite'>{bord.des}</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex  gap-4'>
                                <span className='text-myGrey w-6 h-4 dark:text-myLine'>{bord.file}</span>
                                <div className='text-myGrey flex gap-1'>
                                    <span className='w-6 h-4 dark:text-myLine'> {bord.note}</span>
                                    <span className='text-base dark:text-myLine'>4</span>
                                </div>
                            </div>
                            <div className='flex'>
                                <Image className='w-10 h-10 rounded-full border-2 border-white' src={img1} alt='bord member' />
                                <Image className='w-10 h-10 -ml-5 rounded-full border-2 border-white' src={img2} alt='bord member' />
                                <Image className='w-10 h-10 -ml-5 rounded-full border-2 border-white' src={img3} alt='bord member' />
                                <Image className='w-10 h-10 -ml-5 rounded-full border-2 border-white' src={img4} alt='bord member' />
                            </div>
                        </div>
                    </div>))
                }
            </div>
            <hr className='mt-6 border-myLine dark:border-r-darkLine' />

        </div>
    );
};

export default board;