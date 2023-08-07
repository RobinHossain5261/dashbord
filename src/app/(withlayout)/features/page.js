"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import tasks from '@/../public/images/pages/tasks22.png';
import tasks2 from '@/../public/images/pages/tasks2.png';
import contacts from '@/../public/images/pages/contacts.png';
import contacts2 from '@/../public/images/pages/contacts2.png';
import companies from '@/../public/images/pages/companis.png';
import companies2 from '@/../public/images/pages/companies2.png';
import projects from '@/../public/images/pages/pojects.png';
import projects2 from '@/../public/images/pages/pojects2.png';
import board from '@/../public/images/pages/board.png';
import board2 from '@/../public/images/pages/board2.png';
import table from '@/../public/images/pages/table.png';
import table2 from '@/../public/images/pages/table2.png';
import crypto from '@/../public/images/pages/crypto.png';
import crypto2 from '@/../public/images/pages/crypto2.png';

const Features = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }
    return (
        <div className='px-3 lg:px-6 pb-6 pt-10 bg-bgColor dark:bg-darkBg min-h-screen '>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Features</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>
            <div className='flex flex-wrap gap-6 mt-8'>
                <Link href="/features/contacts" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? contacts2 : contacts} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Contacts</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/features/companies" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? companies2 : companies} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Companies</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/features/projects" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? projects2 : projects} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Projects</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/features/tasks" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? projects2 : projects} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Tasks</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/features/board" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? tasks2 : tasks} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Boards</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/features/table" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? board2 : board} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Table</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/features/crypto" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? crypto2 : crypto} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Crypto</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Features;