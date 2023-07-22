import { Fragment } from "react";
import {
    Bars3CenterLeftIcon,
    PencilIcon,
    ChevronDownIcon,
    CreditCardIcon,
    Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/../public/images/navProfile.png";



import user from '@/../public/images/photo.png';
import github from '@/../public/images/github.png';
import bitbucket from '@/../public/images/bitbucket.png';
import dribbble from '@/../public/images/dribbble.png';
import dropbox from '@/../public/images/dropbox.png';
import mail_chimp from '@/../public/images/mail_chimp.png';
import slack from '@/../public/images/slack.png';
import photo1 from '@/../public/images/photo1.png';
import photo2 from '@/../public/images/photo2.png';
import photo3 from '@/../public/images/photo3.png';
import phone1 from '@/../public/images/phone1.png';
import phone2 from '@/../public/images/phone2.png';
import phone3 from '@/../public/images/phone3.png';
import phone4 from '@/../public/images/phone4.png';
import SelectBar from "@/app/components/SelectBar/SelectBar";
import ThemeButton from '../DarkMode/ThemeButton/ThemeButton';

export default function TopBar({ showNav, setShowNav }) {

    const apps = [
        {
            id: 1,
            name: 'Github',
            img: github
        },
        {
            id: 2,
            name: 'Bitbucket',
            img: bitbucket
        },
        {
            id: 3,
            name: 'Dribbble',
            img: dribbble
        },
        {
            id: 4,
            name: 'Dropbox',
            img: dropbox
        },
        {
            id: 5,
            name: 'Mailchimp',
            img: mail_chimp
        },
        {
            id: 6,
            name: 'Slack',
            img: slack
        },
    ]

    const notifications = [
        {
            id: 1,
            title: 'Your order is placed',
            des: 'You have ordered nokia...',
            time: '3 min ago',
            img: photo1
        },
        {
            id: 2,
            title: 'New blog published',
            des: 'kholi wrote in tecnology...',
            time: '5 min ago',
            img: photo2
        },
        {
            id: 3,
            title: 'Alex sent a file',
            des: 'filename.pdf click here...',
            time: '2 year ago',
            img: photo3
        },
    ]

    const carts = [
        {
            id: 1,
            name: 'Andriod Phone',
            price: '$560',
            img: phone1,
        },
        {
            id: 2,
            name: 'Curved Phone',
            price: '$560',
            img: phone2,
        },
        {
            id: 3,
            name: 'Iphone 13',
            price: '$560',
            img: phone4,
        },
        {
            id: 4,
            name: 'Mackbook Air',
            price: '$960',
            img: phone3,
        },
    ]

    const menuItem = <div className='flex items-center'>
        <div classname="border">
            <SelectBar></SelectBar>
        </div>
        <div className="dropdown ml-4 md:ml-6 lg:ml-10">
            <label tabIndex={0} className="">
                <span className="material-symbols-outlined cursor-pointer w-5 h-5">grid_view</span>
            </label>
            <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 md:w-52 lg:w-60">
                <div className='flex flex-wrap justify-between items-center'>
                    <h3 className='text-xl font-semibold'>Apps</h3>
                    <span className='text-lg text-myGrey hover:text-myBlue cursor-pointer'>View All Apps</span>
                </div>
                <hr className='my-3' />
                <div className='grid grid-cols-3 gap-3'>
                    {
                        apps.map(app => (<div
                            key={app.id}
                            className='flex flex-col justify-center items-center p-3 cursor-pointer rounded duration-400 hover:bg-[#C1BEE5]'
                        >
                            <Image className="w-8 h-8" src={app.img} alt="app" />
                            <span className='mt-2 text-xs'>{app.name}</span>
                        </div>))
                    }
                </div>
            </div>
        </div>
        <div className="dropdown ml-4 md:ml-6 lg:ml-7">
            <label tabIndex={0} className="">
                <span class="material-symbols-outlined cursor-pointer w-5 h-5">notifications</span>
            </label>
            <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 md:w-52 lg:w-60">
                <div className='lg:flex justify-between items-center'>
                    <h3 className='text-lg font-semibold'>Notifications</h3>
                    <span className='text-base text-myGrey hover:text-myBlue cursor-pointer '>View All</span>
                </div>
                <hr className='my-3' />
                <div className=''>
                    {
                        notifications.map(notification => (<div
                            key={notification.id}
                            className='flex items-center border-b-2 pb-3 duration-200 hover:bg-base-200'
                        >
                            <Image className='w-10 h-10' src={notification.img} alt="app" />
                            <div className='ml-2'>
                                <h4 className='font-semibold text-base flex-wrap'>{notification.title}</h4>
                                <p>{notification.des}</p>
                                <span>{notification.time}</span>
                            </div>

                        </div>))
                    }
                </div>
            </div>
        </div>
        <div className='ml-4 md:ml-6 lg:ml-7 mb-2'>
            <ThemeButton></ThemeButton>
        </div>
        <div className="dropdown dropdown-end ml-4 md:ml-6 lg:ml-7">
            <label tabIndex={0} className="relative">
                <span class="material-symbols-outlined  cursor-pointer w-5 h-5">shopping_bag</span>
                <span className='absolute text-sm h-[18px] w-[18px]  rounded-full bg-myBlue flex justify-center items-center text-white -right-2 bottom-0'>{carts.length}</span>
            </label>
            <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 md:w-52 lg:w-64">
                <div className='flex justify-between'>
                    <h3 className='text-lg font-semibold'>My Cart</h3>
                    <span className='text-base text-myGrey hover:text-myBlue cursor-pointer '>{carts.length} Items</span>
                </div>
                <hr className='my-3' />
                <div className=''>
                    {
                        carts.map(cart => (<div
                            key={cart.id}
                            className='flex items-center border-b-2 pb-3 duration-200 hover:bg-base-200'
                        >
                            <Image className='w-10 h-10' src={cart.img} alt="app" />
                            <div className='ml-2'>
                                <h4 className=' font-semibold text-base'>{cart.name}</h4>
                                <p>{cart.price}</p>
                            </div>

                        </div>))
                    }
                </div>
            </div>
        </div>

        <div className="dropdown dropdown-end ml-7 md:ml-10 lg:ml-10">
            <label tabIndex={0} className="flex items-center cursor-pointer">
                <div>
                    <div className="w-10 rounded-full mr-3">
                        <Image src={user} alt="User" />
                    </div>
                </div>
                <div className='lg:flex items-center hidden'>
                    <div>
                        <p className='text-base'>Wade Warren</p>
                        <span className='text-xs'>Account Setting</span>
                    </div>
                    <span class="material-symbols-outlined text-center w-5 h-5">
                        expand_more
                    </span>
                </div>
            </label>

            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60">
                <span className='mb-1 text-base ml-3 font-semibold'>Welcome Wade!</span>
                <li>
                    <Link href=''>
                        <span class="material-symbols-outlined mr-1">account_circle</span>
                        <span className='text-base '>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link href=''>
                        <span class="material-symbols-outlined mr-1">chat</span>
                        <span className='text-base '>Message</span>
                    </Link>
                </li>
                <li>
                    <Link href=''>
                        <span class="material-symbols-outlined mr-1">task</span>
                        <span className='text-base '>Taskbord</span>
                    </Link>
                </li>
                <li>
                    <Link href=''>
                        <span class="material-symbols-outlined mr-1">support</span>
                        <span className='text-base '>Support</span>
                    </Link>
                </li>
                <li>
                    <Link href=''>
                        <span class="material-symbols-outlined mr-1">settings</span>
                        <span className='text-base '>Settings</span>
                    </Link>
                </li>
                <li>
                    <Link href=''>
                        <span class="material-symbols-outlined mr-1">logout</span>
                        <span className='text-base '>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>

    return (
        <div
            className={`bg-white py-6 fixed w-full flex justify-between items-center transition-all duration-[400ms] ${showNav ? "pl-56" : ""}`}
        >
            <div className="flex items-center gap-[60px] py-2">
                <span class=" material-symbols-outlined ml-2  md:ml-10 lg:ml-[60px] cursor-pointer"
                    onClick={() => setShowNav(!showNav)}
                >menu</span>
                <form className='hidden lg:flex items-center border px-4 py-3 rounded'>
                    <input type="text" placeholder='Search...' className='outline-none  text-myBlack' />
                    <span class="material-symbols-outlined cursor-pointer w-4 h-4 text-myBlack"> search </span>
                </form>
            </div>
            <div className="mr-6">
                <ul className='flex relative'>
                    {menuItem}
                </ul>
            </div>
        </div>
    );
}