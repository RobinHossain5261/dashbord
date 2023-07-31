import React from 'react';
import { teams } from '../../../../public/data/settingsData';
import Image from 'next/image';

const Team = () => {
    return (
        <div className='bg-white dark:bg-darkCard p-3 lg:px-7 lg:py-8 rounded w-full'>
            <h4 className='text-2xl text-myBlack font-semibold mb-4 lg:mb-8'>Team settings</h4>
            <div className="overflow-x-auto">
                <table className="table overflow-hidden whitespace-nowrap w-full">

                    <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-white'>
                        <tr className=' dark:border-darkLine border-myLine'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th >
                                <div className='flex items-center'>
                                    <span>Role</span>
                                    <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center'>
                                    <span>Date Added</span>
                                    <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center'>
                                    <span>Delete</span>
                                    <span class="material-symbols-outlined text-myBlack dark:text-white ml-2">unfold_more</span>
                                </div>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            teams.map(team => (<tr
                                key={team.id}
                                className='dark:border-darkLine border-myLine'
                            >
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-8 h-8">
                                                <Image src={team.img} alt="company name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-base text-myBlack dark:text-myWhite">{team.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="text-base text-myBlue dark:text-myGreen">{team.role}</div>
                                    </div>
                                </td>

                                <td className="text-lg text-myBlack dark:text-myWhite">{team.date}</td>
                                <th className='text-myBlack dark:text-myWhite'>
                                    <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue dark:hover:text-myGreen">
                                        auto_fix
                                    </span>
                                    <span class="material-symbols-outlined cursor-pointer hover:text-red-500">
                                        delete
                                    </span>
                                </th>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Team;