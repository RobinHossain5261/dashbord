import Chart from 'chart.js/auto';
import React from 'react';
import './doughnutChart.css';

import { Listbox } from "@headlessui/react";
import { useState, Fragment } from "react";
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";
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
        labels: ["Red", "Blue", "Yellow"],
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
        <div className='bg-white py-8 px-[30px] rounded'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl text-[#2E293E]'>Device-users</h1>
                <div>
                    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                        <Listbox.Button

                            className="lg:flex hidden gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] bg-white py-2 px-3 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            {selectedPerson.name}
                            <span class="material-symbols-outlined">
                                expand_more
                            </span>
                        </Listbox.Button>
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white py-2  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                            {people.map((person) => (
                                <Listbox.Option
                                    key={person.id}
                                    value={person}
                                    disabled={person.unavailable}
                                    as={Fragment}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 px-5 ${active ? 'bg-[#4538D3] text-white' : 'text-gray-900'
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
            <hr className='my-10' />
            <div className='w-[300px] h-[300px] mx-auto flex items-center justify-center'>

                <div className="inner relative">
                    <div style={doughnutStyle}>
                        <h4 className="text-2xl text-[#4538D3] font-semibold">23.6K</h4>
                        <span className='text-[#2E293E] text-base'>USERS</span>
                    </div >
                    <Doughnut data={data5}  options={option5}/>
                </div>

            </div>
            <div className='flex justify-around mt-10'>
                <div>
                    <h5 className='text-xl text-[#4538D3]'>Mobile</h5>
                    <b className='text-[#2E293E] text-2xl'>91.434%</b>
                </div>
                <div className='w-[1px] bg-[#ECEEFB]'></div>
                <div>
                    <h5 className='text-xl text-[#4538D3]'>Web</h5>
                    <b className='text-[#2E293E] text-2xl'>93.64%</b>
                </div>
                <div className='w-[1px] bg-[#ECEEFB]'></div>
                <div>
                    <h5 className='text-xl text-[#4538D3]'>Other</h5>
                    <b className='text-[#2E293E] text-2xl'>66.364%</b>
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
