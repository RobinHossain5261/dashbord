"use client"
import photo1 from '@/../public/images/photo1.png';
import photo2 from '@/../public/images/photo2.png';
import photo3 from '@/../public/images/photo3.png';
import Image from 'next/image';

import './task.css';

import ProgressBar from "@ramonak/react-progress-bar";

export const metadata = {
    title: 'DashBord-Tasks',
    description: 'Development Tasks',
}
const tasks = () => {

    const tasks = [
        {
            id: 1,
            name: 'Design Tasks',
            complete: '8 of 10 completed',
            icon: <span class="material-symbols-outlined">
                edit_square
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            progress: <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
            />
        },
        {
            id: 2,
            name: 'Development Tasks',
            complete: '7 of 10 completed',
            icon: <span class="material-symbols-outlined">
                frame_source
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            progress: <ProgressBar
                completed={70}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted1"
                labelClassName="label"
            />
        },
        {
            id: 3,
            name: 'Marketing Tasks',
            complete: '9 of 10 completed',
            icon: <span class="material-symbols-outlined">
                campaign
            </span>,
            more: <span class="material-symbols-outlined">
                more_vert
            </span>,
            progress: <ProgressBar
                completed={90}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted2"
                labelClassName="label"
            />
        },
    ]

    const teamProgress = [
        {
            id: 1,
            name: 'Jerome Bell',
            complete: '8 of 10 completed',
            parcent: '80%',
            img: photo1,
            progress: <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
            />
        },
        {
            id: 2,
            name: 'Annete Black',
            complete: '7 of 10 completed',
            parcent: '70%',
            img: photo2,
            progress: <ProgressBar
                completed={70}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted1"
                labelClassName="label"
            />
        },
        {
            id: 3,
            name: 'Jacob Jones',
            complete: '9 of 10 completed',
            parcent: '90%',
            img: photo3,
            progress: <ProgressBar
                completed={90}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted2"
                labelClassName="label"
            />
        },
        {
            id: 4,
            name: 'Jenny Wilson',
            complete: '8 of 10 completed',
            parcent: '80%',
            img: photo1,
            progress: <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
            />
        },
    ]

    const cards = [
        {
            id: 1,
            name: 'Incomplete tasks',
            view: '4.6k',
            icon: <span class="material-symbols-outlined">
                add
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            bgColor: '#FFA5A5',
            color: 'black'
        },
        {
            id: 2,
            name: 'Users',
            view: '25.6k',
            icon: <span class="material-symbols-outlined">
                group
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#00E177',
            color: 'white'
        },
        {
            id: 3,
            name: 'Completed',
            view: '25.6k',
            icon: <span class="material-symbols-outlined">
                done_all
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#00E177',
            color: 'white'
        },
        {
            id: 4,
            name: 'Overdue tasks',
            view: '5.5k',
            icon: <span class="material-symbols-outlined">
                notifications_active
            </span>,
            increment: '11.3%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#00E177',
            color: 'white'
        }
    ]

    const reportCards = [
        {
            id: 1,
            title: 'The process of designing landing pages',
            date: 'Sep 24 2023',
            category: "Design",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo1
        },
        {
            id: 2,
            title: 'Mobile app UI/UX design & development',
            date: 'Sep 24 2023',
            category: "Development",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo2
        },
        {
            id: 3,
            title: 'Writing content for use in website layout',
            date: 'Sep 24 2023',
            category: "Design",
            des: 'Lorem ipsum dolor sit amet consectetur. Vitae volutpat ut vestibulum ac amet.',
            icon: <span class="material-symbols-outlined">
                calendar_month
            </span>,
            img: photo3
        },
    ]

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p>Jul 9, 2023</p>

            {/* task cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
                {
                    tasks.map(task => (<div
                        key={task.id}
                        className="bg-white py-4 px-6 rounded"
                    >
                        <div className="flex justify-between">
                            <span className="text-[#4538D3] p-4 shadow-md rounded text-3xl">{task.icon}</span>
                            <span>{task.more}</span>
                        </div>
                        <h2 className="text-2xl font-semibold text-[#2E293E] mt-6 mb-3">{task.name}</h2>
                        <span>{task.progress}</span>
                        <p className="text-[#584E69] text-lg mt-3">{task.complete}</p>
                    </div>))
                }
            </div>

            {/* Team progress */}
            <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="py-8 px-7 rounded bg-white">
                    <div className="flex justify-between mb-7 items-center">
                        <h1 className="text-xl text-[#2E293E]">Team Progress</h1>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>This month</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>

                    <div>

                        {
                            teamProgress.map(progress => (<div
                                key={progress.id}
                            >
                                <hr className='my-5' />
                                <div className='flex items-center'>
                                    <Image src={progress.img} alt="buyer" className='mr-3' />

                                    <div className='flex-grow'>
                                        <h3 className='text-2xl font-semibold text-[#2E293E] mb-3'>{progress.name}</h3>
                                        <span>{progress.progress}</span>
                                        <div className='flex justify-between mt-3'>
                                            <span className='text-[#584E69] text-lg'>{progress.complete}</span>
                                            <span className='text-[#584E69] text-lg'>{progress.parcent}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>))
                        }

                    </div>
                </div>

                {/* Task Reports */}
                <div className="py-8 px-7 rounded bg-white">
                    <div className="flex justify-between mb-7 items-center">
                        <h1 className="text-xl text-[#2E293E]">Tasks Reports</h1>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>This month</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
                        {
                            cards.map(card => (<div
                                key={card.id}
                                className="bg-white py-4 px-6 rounded shadow-lg">
                                <div className="flex justify-between">
                                    <h3 className="text-base">{card.name}</h3>
                                    <span className="w-10 h-10 bg-[#F1F1FA] text-[#4538D3] flex justify-center items-center rounded">{card.icon}</span>
                                </div>
                                <div className="flex">
                                    <h1 className="text-2xl font-semibold">{card.view}</h1>
                                    <div className='py-1 ] px-2 rounded ml-4  flex '
                                        style={{ backgroundColor: card.bgColor, color: card.color }}
                                    >
                                        <h5 >{card.increment}</h5>
                                        <span className="ml-1 hover:skew-y-12">{card.trending}</span>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                </div>
            </div>
            <hr className="my-6" />

            {/* Task report card */}
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl text-[#2E293E]">Task reports</h3>
                    <p className="border text-[#2E293E] bg-[#ECEEFB] py-3 px-4 rounded">Browse all tasks</p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        reportCards.map(card => (<div
                            key={card.id}
                            className="bg-white py-8 px-10 rounded border hover:border-[#4538D3] hover:-skew-y-3 duration-300"
                        >
                            <Image className='w-[120px] h-[120px] mx-auto mb-8' src={card.img} alt="buyer" />
                            <h2 className='text-[#2E293E] text-2xl font-semibold text-center mb-7'>{card.title}</h2>
                            <div className='flex justify-between mb-7'>
                                <p className='text-[#4538D3] rounded border py-1 px-2 bg-[#F6F6FB]'>{card.category}</p>
                                <div className='border'></div>
                                <div className='flex'>
                                    <span>{card.icon}</span>
                                    <p className='ml-1'>{card.date}</p>
                                </div>
                            </div>
                            <p className='text-lg'>{card.des}</p>
                        </div>))
                    }
                </div>
            </div>

        </div>
    )
}
export default tasks;