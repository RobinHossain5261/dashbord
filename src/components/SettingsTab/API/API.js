import React from 'react';
import { APIs } from '../../../../public/data/settingsData';

const API = () => {
    return (
        <div className='bg-white p-3 lg:px-7 lg:py-8  dark:bg-darkCard rounded'>
            <div className='flex justify-between items-center mb-8'>
                <h6 className='text-xl text-myBlack dark:text-white'>API Settings</h6>
                <button className='text-sm px-4 py-3 bg-myBlue dark:bg-myGreen text-white rounded'>Add</button>
            </div>

            <div className="overflow-x-auto z-50">
                <table className="table overflow-hidden whitespace-nowrap">

                    <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-myWhite'>
                        <tr className='border-myLine dark:border-darkLine'>
                            <th >
                                <div className='flex items-center'>
                                    <span>Site</span>
                                    <span className="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center'>
                                    <span>Invoice ID</span>
                                    <span className="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center'>
                                    <span>Password</span>
                                    <span className="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                </div>
                            </th>

                            <th>
                                <div className='flex items-center'>
                                    <span>Action</span>
                                    <span className="material-symbols-outlined text-myBlack dark:text-myWhite ml-2">unfold_more</span>
                                </div>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            APIs.map(API => (<tr
                                key={API.id}
                                className='dark:border-darkLine border-myLine z-10'
                            >
                                <td className="text-lg text-myBlack dark:text-myWhite ">{API.site}</td>
                                <td className="text-lg text-myBlack dark:text-myWhite ">{API.invoice}</td>
                                <td className="text-lg text-myBlack dark:text-myWhite">{API.password}</td>
                                <th className='text-myBlack dark:text-myWhite'>
                                    <span className="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue dark:hover:text-myGreen">
                                        visibility_off
                                    </span>
                                    <span className="material-symbols-outlined cursor-pointer mr-1 hover:text-red-400">
                                        more_vert
                                    </span>

                                </th>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
            <button className='text-sm text-white px-4 py-3 bg-myBlue dark:bg-myGreen rounded mt-8'>Update Password</button>
        </div>
    );
};

export default API;