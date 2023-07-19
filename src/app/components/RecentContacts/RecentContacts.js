import { Listbox } from "@headlessui/react";
import { useState, Fragment } from "react";
import Image from 'next/image';
import buyer1 from '../../../../public/images/photo.png';
import buyer2 from '../../../../public/images/photo1.png';
import buyer3 from '../../../../public/images/photo2.png';
import buyer4 from '../../../../public/images/photo3.png';
import buyer5 from '@/../public/images/photo4.png';
import { useTheme } from "next-themes";



const people = [
    { id: 1, name: 'This Month', unavailable: false },
    { id: 2, name: 'This Week', unavailable: false },
    { id: 3, name: 'This Year', unavailable: false },
]

const RecentContacts = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const { resolvedTheme, setTheme } = useTheme();
    const buyers = [
        {
            id: 1,
            name: 'Floyd Miles',
            status: 'Successful',
            email: 'info@example.com',
            time: '1 Year ago',
            image: buyer1,
            color: '#4538D3',
            color1:'#00E177'
        },
        {
            id: 2,
            name: 'Devon Lane',
            status: 'Pending',
            email: 'info@example.com',
            time: '6 month ago',
            image: buyer2,
            color: '#725002',
            color1:'#F8C140'
        },
        {
            id: 3,
            name: 'Jacob Jones',
            status: 'Override',
            email: 'info@example.com',
            time: '1 month ago',
            image: buyer3,
            color: '#A82500',
            color1:'#FFA5A5'
        },
        {
            id: 4,
            name: 'Cody Fisher',
            status: 'Successful',
            email: 'info@example.com',
            time: '3 Year ago',
            image: buyer4,
            color: '#4538D3',
            color1:'#00E177'
            
        },
        {
            id: 5,
            name: 'Jane Copper',
            status: 'Successful',
            email: 'info@example.com',
            time: '1 Year ago',
            image: buyer5,
            color: '#4538D3',
            color1:'#00E177'
        },

    ]

    return (
        <div className="overflow-x-auto py-8 px-5  bg-white dark:bg-darkCard rounded whitespace-nowrap">
            <div className="flex justify-between items-center">
                <h1 className='text-2xl text-myBlack dark:text-white'>Recent Contacts</h1>
                <div>
                    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                        <Listbox.Button

                            className="lg:flex hidden gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] dark:text-white border-myLine dark:border-darkLine py-2 px-3 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
            <hr className='my-8 border-myLine dark:border-darkLine' />
            <div className="overflow-x-auto whitespace-nowrap">
                <table className="table">

                    <thead className='bg-[#F5F7FD] dark:bg-darkBg'>
                        <tr className="dark:border-darkLine">
                            <th className='text-lg text-myBlack dark:text-white'>Full Name</th>
                            <th className='text-lg text-myBlack dark:text-white'>Status</th>
                            <th className='text-lg text-myBlack dark:text-white'>Email</th>
                            <th className='text-lg text-myBlack dark:text-white'>Time</th>
                        </tr>
                    </thead>

                    <tbody >
                        {
                            buyers.map(buyer => (<tr
                            key={buyer.id}
                            className="dark:border-darkLine border-myLine"
                            >
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <Image src={buyer.image} alt="buyer" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-base dark:text-myWhite text-myBlack">{buyer.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-base' style={{ 
                                    color:resolvedTheme==='dark' ? `${buyer.color1}` :`${buyer.color}`
                                }}><li>{buyer.status}</li></td>
                                <td className='text-myBlue dark:text-[#64C4F7] text-base'>{buyer.email}</td>
                                <td className='text-myBlack dark:text-myWhite text-base'>{buyer.time}</td>

                            </tr>))
                        }


                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default RecentContacts;