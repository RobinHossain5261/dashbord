import React from 'react';
import './doughnutChart.css';
import { Listbox } from "@headlessui/react";
import { useState, Fragment } from "react";
import { Doughnut } from 'react-chartjs-2';

const people = [
    { id: 1, name: 'This Month', unavailable: false },
    { id: 2, name: 'This Week', unavailable: false },
    { id: 3, name: 'This Year', unavailable: false },
]
const DoughnutChart = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    const doughnutStyle = {
        width: "244px",
        height: "40px",
        position: "absolute",
        top: "45%",
        left: "0",
        marginTop: "-15px",
        lineHeight: "19px",
        textAlign: "center",
        zIndex: "999",
    };

    const data5 = {
        labels: ["Blue", "Yellow", "Red"],
        datasets: [
            {
                label: "# of Votes",
                data: [30, 20, 40],
                backgroundColor: ["#64C4F7", "#F8C140", "#FFA5A5"],
                borderWidth: 0,
            },
        ],
    };

    const option5 = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className='bg-white dark:bg-darkCard p-2 lg:py-8 lg:px-4 rounded z-[4]'>
            <div className='flex flex-wrap gap-2 justify-between items-center'>
                <h1 className='text-xl text-myBlack dark:text-white'>Device-users</h1>
                <div>
                    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                        <Listbox.Button

                            className="flex gap-2 items-center  relative w-full cursor-pointer rounded-lg text-[#252525] dark:text-white py-2 px-3 text-left border dark:border-darkLine border-myLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            {selectedPerson.name}
                            <span class="material-symbols-outlined">
                                expand_more
                            </span>
                        </Listbox.Button>
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white dark:bg-darkCard py-2  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                            {people.map((person) => (
                                <Listbox.Option
                                    key={person.id}
                                    value={person}
                                    disabled={person.unavailable}
                                    as={Fragment}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 px-5 ${active ? 'bg-myBlue dark:bg-myGreen text-white' : 'text-gray-900 dark:text-white'
                                        }`
                                    }
                                >
                                    {({ selected }) => (
                                        <li
                                        >
                                            {selected}
                                            {person.name}
                                        </li>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Listbox>
                </div>
            </div>
            <hr className='my-5 lg:my-10 dark:border-darkLine border-myLine' />
            <div className='w-[244px] h-[244px] mx-auto'>

                <div className="inner relative dark:bg-myBlack">
                    <div style={doughnutStyle}>
                        <h4 className="text-2xl text-myBlue dark:text-myPink font-semibold">23.6K</h4>
                        <span className='text-myBlack dark:text-white text-base'>USERS</span>
                    </div >
                    <Doughnut data={data5} options={option5} />
                </div>

            </div>
            <div className='flex gap-3 flex-wrap justify-around mt-10'>
                <div>
                    <h5 className='text-xl text-myBlue dark:text-myGreen text-center'>Mobile</h5>
                    <h3 className='text-myBlack font-bold text-2xl dark:text-white text-center'>91.434%</h3>
                </div >
                <div className='w-[1px] bg-[#ECEEFB]'></div>
                <div>
                    <h5 className='text-xl text-myBlue dark:text-myGreen text-center'>Web</h5>
                    <h3 className='text-myBlack font-bold dark:text-white text-2xl text-center'>93.64%</h3>
                </div>
                <div className='w-[1px] bg-[#ECEEFB]'></div>
                <div>
                    <h5 className='text-xl text-myBlue dark:text-myGreen text-center'>Other</h5>
                    <h3 className='text-myBlack font-bold dark:text-white text-2xl text-center'>66.364%</h3>
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
