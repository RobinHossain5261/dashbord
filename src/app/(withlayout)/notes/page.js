"use client"
import React, { Fragment, useEffect, useState } from 'react';
import { noteInformations } from '../../../../public/data/utillityData';
import profile from '@/../public/images/profileThree.png';
import Image from 'next/image';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import './notes.css';
import { Listbox } from '@headlessui/react';
import { useTheme } from 'next-themes';
import jenny from '@/../public/images/team4.png';
import developer from '@/../public/images/team5.png';


const people = [
    { id: 1, name: 'This Month', unavailable: false },
    { id: 2, name: 'This Week', unavailable: false },
    { id: 3, name: 'This Year', unavailable: false },
]


const Notes = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const { resolvedTheme, setTheme } = useTheme();

    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML('<p>Type a note...</p>');
        }
    }, [quill]);



    return (
        <div className='px-3 pt-11 pb-6 lg:px-6 bg-bgColor dark:bg-darkBg'>
            <div className='block lg:flex gap-6'>
                <section className='bg-white dark:bg-darkCard p-2 lg:py-7 lg:px-5 h-full rounded cardShadow mb-6'>

                    {/* modal start */}
                    <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle ">
                        <form method="dialog" className="modal-box dark:bg-darkCard">
                            <h3 className="font-bold text-2xl text-myBlue dark:text-myGreen">Edit Profile</h3>
                            <hr className='border-myLine dark:border-darkLine my-3' />
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-semibold text-myBlack dark:text-myWhite ">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Type your number" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-semibold text-myBlack dark:text-myWhite ">Location</span>
                                </label>
                                <input type="text" placeholder="Type your location" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-semibold text-myBlack dark:text-myWhite ">Email</span>
                                </label>
                                <input type="text" placeholder="Type your email" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-semibold text-myBlack dark:text-myWhite ">Website</span>
                                </label>
                                <input type="text" placeholder="Type your website link" className="input input-bordered w-full" />
                            </div>
                            <div className="modal-action">
                                <button className="text-white rounded py-3 px-4 bg-myBlue dark:bg-myGreen">Close</button>
                            </div>
                        </form>
                    </dialog>
                    {/* modal end */}

                    <div className='relative'>
                        <Image className='w-full' src={profile} alt='profile' />
                        <button onClick={() => window.my_modal_4.showModal()} className="hidden md:flex lg:flex items-center gap-2 bg-myBlue dark:bg-myGreen absolute bottom-8 right-6 rounded py-2 px-4">
                            <span className="material-symbols-outlined text-white dark:text-myBlack">edit_square</span>
                            <span className='text-sm  text-white dark:text-myBlack'>Edit profile</span>
                        </button>
                    </div>

                    <h3 className='text-[#1E192A] dark:text-white text-2xl md:text-3xl lg:text-[32px] mt-[30px] font-semibold '>Jenny Pilson</h3>
                    <span className='text-base text-myGrey dark:text-myWhite mt-2 '>UI/UX Designer</span>

                    <div className="overflow-x-auto whitespace-nowrap mt-5 lg:mt-10">
                        <table className="table">
                            <tbody>
                                {
                                    noteInformations.map(info => (<tr
                                        key={info.id}
                                        className='dark:border-darkLine border-myLine'
                                    >
                                        <td className='flex gap-2'>
                                            <div className='text-myGrey dark:text-myLine text-sm'>{info.icon}</div>
                                            <div className='text-myGrey dark:text-myLine text-sm'>{info.name}</div>
                                        </td>
                                        <td className='text-myBlack dark:text-white text-base'>
                                            <span className='text-base text-myBlack dark:text-white'>:</span>
                                        </td>
                                        <td className='text-myBlack dark:text-white text-base'>{info.info}</td>
                                    </tr>))
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className='w-full'>
                    {/* Rech Text  */}
                    <div className='bg-white dark:bg-darkCard text-myBlack dark:text-white rounded p-2 lg:py-7 lg:px-8 '>
                        <div className='h-[300px] lg:h-[200px]'>
                            <div ref={quillRef} />
                        </div>

                        <hr className='border-myLine dark:border-darkLine ' />
                        <div className='mt-10 flex gap-2 flex-wrap justify-between'>
                            <div className='w-[150px] text-myBlack dark:text-myWhite border border-myLine dark:border-darkLine px-4 py-3 rounded flex items-center gap-2'>
                                <span className="material-symbols-outlined">add</span>
                                <button>Add note</button>
                            </div>
                            <button className='bg-myBlue dark:bg-myGreen text-base text-white dark:text-myBlack px-4 py-3 rounded'>Create note</button>
                        </div>
                    </div>

                    {/* Notes Steps */}
                    <div className='mt-6'>
                        <div className='flex gap-2 flex-wrap justify-between items-center mb-10'>
                            <h4 className='text-2xl text-myBlack dark:text-white font-semibold'>Jenny Pilson activity</h4>
                            <div>
                                <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                    <Listbox.Button

                                        className="flex gap-2 items-center  relative w-full rounded-lg text-[#252525] dark:text-white  py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm cursor-pointer">
                                        {selectedPerson.name}
                                        <span className="material-symbols-outlined">
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
                        <div>
                            <div className='timeline dark:before:bg-myBlack relative'>
                                <div className='p-2 sm:py-7 sm:px-8 bg-white dark:bg-darkCard rounded ml-16 sm:ml-20'>
                                    <div className='flex flex-wrap justify-between items-center '>
                                        <h3 className='text-2xl text-myBlack dark:text-white font-semibold'>Note added</h3>
                                        <h5 className='text-xl text-myBlack'>14 Aug - 25 Aug</h5>
                                    </div>
                                    <p className='text-base text-myGrey dark:text-myWhite my-3 sm:my-5 text-justify'>Lorem ipsum dolor sit amet consectetur. Volutpat mattis turpis lorem luctus. Et sed ornare at fermentum vestibulum sit. A sem faucibus cursus pretium vel vitae pellentesque sed vulputate. In turpis leo dictum est id.</p>
                                    <p className='text-base text-myGrey dark:text-myWhite my-3 sm:my-5 text-justify'>Lorem ipsum dolor sit amet consectetur. Euismod vel ut aliquet cursus arcu quisque suspendisse vel tincidunt. Sagittis aliquet dignissim tortor et purus. Risus diam pharetra enim sit ut dis ut cursus eget. </p>
                                    <hr className='border-myLine dark:border-darkLine' />
                                    <div className='mt-5 flex flex-wrap gap-2 items-center justify-between'>
                                        <div className='flex gap-3 items-center'>
                                            <Image className='w-[60px] height-[60px] rounded-full' src={jenny} alt='people' />
                                            <h5 className='text-xl text-myBlack dark:text-white'>Jenny Pilson</h5>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className="material-symbols-outlined text-myBlue dark:text-myGreen bg-[#ecebfb] dark:bg-[#22574b] p-1 rounded-[8px]">edit</span>
                                            <span className="material-symbols-outlined text-myBlue dark:text-myGreen bg-[#ecebfb] dark:bg-[#22574b] p-1 rounded-[8px]">more_horiz</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full text-white dark:text-myBlack bg-myBlue dark:bg-myGreen w-[60px] h-[60px] flex items-center justify-center iconCenter'>
                                    <span className="material-symbols-outlined">event_note</span>
                                </div>
                            </div>

                            <div className='timeline dark:before:bg-myBlack relative my-5'>
                                <div className='p-2 sm:py-7 sm:px-8 bg-white dark:bg-darkCard rounded ml-16 sm:ml-20'>
                                    <div className='flex flex-wrap justify-between items-center '>
                                        <h3 className='text-2xl text-myBlack dark:text-white font-semibold'>Contact form submission</h3>
                                        <h5 className='text-xl text-myBlack'>14 Aug - 25 Aug</h5>
                                    </div>
                                    <p className='text-base text-myGrey dark:text-myLine mt-3 sm:mt-5'>submitted <span className='text-myBlue dark:text-myGreen'>Contact form</span></p>
                                </div>
                                <div className='rounded-full text-white dark:text-myBlack dark:bg-myGreen bg-myBlue w-[60px] h-[60px] flex items-center justify-center iconCenter'>
                                    <span className="material-symbols-outlined">forward_to_inbox</span>
                                </div>
                            </div>

                            <div className='timeline dark:before:bg-myBlack relative'>
                                <div className='p-2 sm:py-7 sm:px-8 bg-white dark:bg-darkCard rounded ml-16 sm:ml-20'>
                                    <div className='flex flex-wrap justify-between items-center '>
                                        <h3 className='text-2xl text-myBlack dark:text-white font-semibold'>Note added</h3>
                                        <h5 className='text-xl text-myBlack'>14 Aug - 25 Aug</h5>
                                    </div>
                                    <p className='text-base text-myGrey dark:text-myWhite my-3 sm:my-5 text-justify'>Lorem ipsum dolor sit amet consectetur. Volutpat mattis turpis lorem luctus. Et sed ornare at fermentum vestibulum sit. A sem faucibus cursus pretium vel vitae pellentesque sed vulputate. In turpis leo dictum est id.</p>
                                    <p className='text-base text-myGrey dark:text-myWhite my-3 sm:my-5 text-justify'>Lorem ipsum dolor sit amet consectetur. Euismod vel ut aliquet cursus arcu quisque suspendisse vel tincidunt. Sagittis aliquet dignissim tortor et purus. Risus diam pharetra enim sit ut dis ut cursus eget. </p>
                                    <hr className='border-myLine dark:border-darkLine' />
                                    <div className='mt-5 flex flex-wrap gap-2 items-center justify-between'>
                                        <div className='flex gap-3 items-center'>
                                            <Image className='w-[60px] height-[60px] rounded-full' src={developer} alt='people' />
                                            <h5 className='text-xl text-myBlack dark:text-white'>Web Developer IV</h5>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className="material-symbols-outlined text-myBlue dark:text-myGreen bg-[#ecebfb] dark:bg-[#22574b] p-1 rounded-[8px]">edit</span>
                                            <span className="material-symbols-outlined text-myBlue dark:text-myGreen bg-[#ecebfb] dark:bg-[#22574b] p-1 rounded-[8px]">more_horiz</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full text-white dark:text-myBlack bg-myBlue dark:bg-myGreen w-[60px] h-[60px] flex items-center justify-center iconCenter'>
                                    <span className="material-symbols-outlined">event_note</span>
                                </div>
                            </div>
                            <div className='timeline dark:before:bg-myBlack relative mt-5'>
                                <div className='p-2 sm:py-7 sm:px-8 bg-white dark:bg-darkCard rounded ml-16 sm:ml-20'>
                                    <div className='flex flex-wrap justify-between items-center '>
                                        <h3 className='text-2xl text-myBlack dark:text-white font-semibold'>Viewed Page</h3>
                                        <h5 className='text-xl text-myBlack'>14 Aug - 25 Aug</h5>
                                    </div>
                                    <p className='text-base text-myGrey dark:text-myLine mt-3 sm:mt-5'>visited <span className='text-myBlue dark:text-myGreen'>Contact form</span></p>
                                </div>
                                <div className='rounded-full text-white dark:text-myBlack bg-myBlue dark:bg-myGreen w-[60px] h-[60px] flex items-center justify-center iconCenter'>
                                    <span className="material-symbols-outlined">visibility</span>
                                </div>
                            </div>
                            <div className='timeline dark:before:bg-myBlack relative overflow-y-hidden mt-5'>
                                <div className='p-2 sm:py-7 sm:px-8 bg-white dark:bg-darkCard rounded ml-16 sm:ml-20'>
                                    <div className='flex flex-wrap justify-between items-center '>
                                        <h3 className='text-2xl text-myBlack dark:text-white font-semibold'>Form submission</h3>
                                        <h5 className='text-xl text-myBlack'>14 Aug - 25 Aug</h5>
                                    </div>
                                    <p className='text-base text-myBlue dark:text-myGreen mt-3 sm:mt-5'>Blog Newsletter</p>
                                </div>
                                <div className='rounded-full text-white dark:text-myBlack bg-myBlue dark:bg-myGreen w-[60px] h-[60px] flex items-center justify-center iconCenter'>
                                    <span className="material-symbols-outlined">forward_to_inbox</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <hr className='border-myLine dark:border-darkLine mt-6' />
        </div>
    );
};

export default Notes;