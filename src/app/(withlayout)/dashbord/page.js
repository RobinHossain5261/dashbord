"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import reports from '@/../public/images/pages/reports.png';
import products from '@/../public/images/pages/products.png';
import tasks from '@/../public/images/pages/tasks.png';
import darkReports from '@/../public/images/pages/dark-reports.png';
import darkProducts from '@/../public/images/pages/dark-products.png';
import darkTasks from '@/../public/images/pages/dark-tasks.png';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Dashboard = () => {
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
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Dashboards</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>
            <div className='flex flex-wrap gap-6 mt-8'>
                <Link href="/dashbord/reports" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkReports : reports} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Dashbord v1-Reports</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/dashbord/products" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkProducts : products} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Dashbord v1-Products</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/dashbord/tasks" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkTasks : tasks} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Dashbord v1-Tasks</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default Dashboard;