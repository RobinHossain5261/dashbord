import Chart from 'chart.js/auto';
import React from 'react';
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
    const chartData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [10, 20, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                options: {
                    responsive: true,
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                    },
                  }

            },
            

        ],
    };

    // const plugins = {
    //     id:'plugins',
    //     beforeDatasetsDraw(chart,args,pluginOptions){
    //      const {ctx,data}=chart;

    //      ctx.save();
    //      const xCoor=chart.getDatasetMeta(0).data[0].x;
    //      const yCoor=chart.getDatasetMeta(0).data[0].y;
    //      ctx.font='bold 30px sans-serif';
    //      ctx.fillStyle='rgba(54,162,235,1)';
    //      ctx.textAlign='center';
    //      ctx.textBaseLine='middle';
    //      ctx.fillText=('text',xCoor,yCoor);
    //     }
    //    }

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
            <div className='w-[300px] h-[300px] mx-auto'>
                <Doughnut data={chartData} />
            </div>
            <div className='flex justify-between mt-10'>
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
