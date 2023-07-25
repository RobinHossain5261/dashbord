import React from 'react';
import profile from '../../../../public/images/profile.png';
import Image from 'next/image';

const Account = () => {
    return (
        <div className='bg-[#F7F9FC]'>

            <h1 className='text-2xl font-bold'>General settings</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className="card bg-base-100 shadow-xl py-7 px-8">
                    <figure><Image src={profile} alt="profile" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Environmental Specialist</h2>

                        <div>
                            <div className='flex border py-3 px-2 rounded-lg'>
                                <span class="material-symbols-outlined mr-2 w-6 h-6">
                                    call
                                </span>
                                <p>Phone Number </p>
                                <p>:</p>
                                <p> (405) 555-0128</p>
                            </div>
                            <div className='flex border py-3 px-2 rounded-lg'>
                                <span class="material-symbols-outlined mr-2 w-6 h-6">
                                    location_on
                                </span>
                                <p>Location</p>
                                <p>:</p>
                                <p>New York</p>
                            </div>
                            <div className='flex border py-3 px-2 rounded-lg'>
                                <span class="material-symbols-outlined mr-2 w-6 h-6">
                                    forward_to_inbox
                                </span>
                                <p>support Email</p>
                                <p>:</p>
                                <p>info@exmp.com</p>
                            </div>
                            <div className='flex border py-3 px-2 rounded-lg'>
                                <span class="material-symbols-outlined mr-2 w-6 h-6">
                                    language
                                </span>
                                <p>Website</p>
                                <p>:</p>
                                <p>google.com</p>
                            </div>
                            <div className='flex border p-2 rounded-lg'>
                                <span class="material-symbols-outlined mr-2 w-6 h-6">
                                    calendar_month
                                </span>
                                <p>Contact Since</p>
                                <p>:</p>
                                <p>14 Aug-25 Aug</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-10 mb-5'>
                        <h3 className='flex items-center p-3 border bg-white rounded-lg'>Account
                            <span class="material-symbols-outlined">
                                edit
                            </span></h3>
                        <h3 className='flex items-center p-3 border bg-white rounded-lg'>Team
                            <span class="material-symbols-outlined">
                                group
                            </span>
                        </h3>
                        <h3 className='flex items-center p-3 border bg-white rounded-lg'>Billing
                            <span class="material-symbols-outlined">
                                forward_to_inbox
                            </span>
                        </h3>
                        <h3 className='flex items-center p-3 border bg-white rounded-lg'>Notifications <span class="material-symbols-outlined">
                            notifications
                        </span></h3>
                        <h3 className='flex items-center p-3 border bg-white rounded-lg'>API<span class="material-symbols-outlined">
                            settings
                        </span></h3>
                    </div>
                    <hr />

                    <h3 className='text-xl font-semibold mt-5'>Basic information</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>


                </div>
            </div>
        </div>
    )
}

export default Account;