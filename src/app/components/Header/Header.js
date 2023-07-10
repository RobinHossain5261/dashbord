import Image from 'next/image';
import React from 'react';
import user from '@/../public/images/photo.png';

const Header = () => {

    const menuItem = <div
        className='flex items-center'>
        <select className="p-3 rounded-lg mr-3">
            <option >Bangla (BN)</option>
            <option>Hindi (Ind)</option>
            <option>Hurdu (PK)</option>
        </select>
        <li><span class="material-symbols-outlined ml-7 cursor-pointer">grid_view</span></li>
        <li><span class="material-symbols-outlined ml-7 cursor-pointer">notifications</span></li>
        <li><span class="material-symbols-outlined ml-7 cursor-pointer">light_mode</span></li>
        <li><span class="material-symbols-outlined ml-7 cursor-pointer">shopping_bag</span></li>
    </div>


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* <div className="form-control">
                    <input type="text" placeholder="Search..." className="input input-bordered w-24 md:w-auto" />
                    
                </div> */}
                <form className='flex iteems-center border px-2 py-2 rounded'>
                    <input type="text" placeholder='Search...' className='outline-none ' />
                    <span class="material-symbols-outlined cursor-pointer"> search </span>
                </form>

            </div>
            <div className="flex-none gap-2">

                <ul>
                    {menuItem}
                </ul>

                <div className="dropdown dropdown-end mr-7">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex">
                        <div className='flex'>
                            <div className="w-10 rounded-full ">
                                <Image src={user} alt="User" />
                            </div>
                            {/* <div className='ml-3'>
                                <h3 >Wade Warren</h3>
                                <h5>Account settings</h5>
                            </div> */}
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;