import Link from 'next/link';
import React from 'react';
import photo7 from '@/../public/images/photo7.png';
import photo8 from '@/../public/images/photo8.png';
import photo9 from '@/../public/images/photo9.png';
import photo10 from '@/../public/images/photo10.png';
import photo11 from '@/../public/images/photo11.png';
import photo12 from '@/../public/images/photo12.png';
import Image from 'next/image';

const contacts = () => {

    const cards = [
        {
            id: 1,
            img: photo7,
            name: 'Mehmet Rauf Tunc',
            post: 'Chief Technology Officer',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 2,
            img: photo8,
            name: 'Sukran Memis',
            post: 'Human Resource Manager',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 3,
            img: photo9,
            name: 'Muhlis Ilter',
            post: 'Chief Executive Officer',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 4,
            img: photo10,
            name: 'Ural Olgun',
            post: 'Front End Developer',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 5,
            img: photo11,
            name: 'Sabrican Inanir',
            post: 'Senior Developer',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 6,
            img: photo12,
            name: 'Saniye Ozalp',
            post: 'Customer Service Manager',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
    ]

    return (
        <div className='px-2 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Contacts</h3>
            <span className='text-sm text-myBlack dark:text-white '>Lorem ipsum dolor sit ammet consectetur.</span>

            <div className='mt-8'>
                <Link href='/features/contacts' className='text-myBlack dark:text-myWhite border dark:border-darkLine py-3 px-4  text-sm rounded ml-6 border-myLine'>Table view</Link>
                <Link href='/cardView/contacts' className='text-white dark:text-[#1E192A] py-3 px-4 bg-myBlue dark:bg-[#00E177] text-sm rounded ml-6'>Card view</Link>
            </div>

            <div className="overflow-x-auto">
                <table className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded mt-8'>
                    {
                        cards.map(card => (<tbody
                        key={card.id}
                        className='bg-white py-7 px-8 rounded'
                        >
                            <tr><Image src={card.img}/></tr>
                            <tr>{card.name}</tr>
                            <tr>{card.post}</tr>
                            <tr>
                                <td><span class="material-symbols-outlined">call</span></td>
                                <td>Phone Number</td>
                                <td>{card.number}</td>
                            </tr>
                        </tbody>))
                    }
                </table>
            </div >
        </div >
    );
};

export default contacts;