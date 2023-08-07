"use client"
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import account1 from '@/../public/images/pages/account1.png';
import account2 from '@/../public/images/pages/account2.png';
import darkAccountv3 from '@/../public/images/pages/darkAccountv3.png';
import darkAccountv2 from '@/../public/images/pages/darkAccountv2.png';
import accountv3 from '@/../public/images/pages/accountv3.png';
import accountv2 from '@/../public/images/pages/accountv2.png';
import Image from 'next/image';

const Settings = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }
    return (
        <div className='px-3 lg:px-6 pb-6 pt-10 bg-bgColor dark:bg-darkBg min-h-screen '>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Accounts</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>
            <div className='flex flex-wrap gap-6 mt-8'>
                <Link href="/settings/settings_one" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? account2 : account1} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Account v1</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/settings/settings_two" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkAccountv2 : accountv2} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Account v2</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/settings/settings_three" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkAccountv3 : accountv3} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Account v3</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Settings;