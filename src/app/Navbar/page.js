import React from 'react';
import Image from 'next/image';
import styles from './stayles.module.css';
import Link from 'next/link';

import Avatar_Photo from '../../../public/images/photo.png';
import SideBar from '../components/SideBar/SideBar';
import SelectBar from '../components/SelectBar/SelectBar';

const Navbar = () => {

    const menuItem = <div 
    className='flex items-center'>
        <select className="p-3 rounded-lg mr-3">
            <option className={styles.opt} selected>English (US)</option>
            <option >Bangla (BN)</option>
            <option>Hindi (Ind)</option>
            <option>Hurdu (PK)</option>
        </select>
        <li><span class="material-symbols-outlined">grid_view</span></li>
        <li><span class="material-symbols-outlined">notifications</span></li>
        <li><span class="material-symbols-outlined">light_mode</span></li>
        <li><span class="material-symbols-outlined">shopping_bag</span></li>

        <div className='flex mr-12'>
            <Image src={Avatar_Photo} alt="Avatar_Photo" />
            <div className='ml-3'>
                <h3 className='text-base	'>Wade Warren</h3>
                <h5>Account settings</h5>
            </div>
        </div>
    </div>

    return (
        <div className="navbar bg-white flex justify-between">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
            </div>
            <div className="flex">
                <ul className="menu menu-horizontal px-1">

                    {menuItem}

                </ul>
            </div>
        </div>

    );
};

export default Navbar;