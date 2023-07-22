import React from 'react';
import profile from '@/../public/images/profileTwo.png';
import bgProfile from '@/../public/images/bgProfile2.png';
import facebook from '@/../public/images/fb.png';
import google from '@/../public/images/google.png';
import telegram from '@/../public/images/telegram.png';
import Image from 'next/image';

const profileTwo = () => {

    const informations = [
        {
            id: 1,
            name: 'Phone Number',
            info: '(405) 555-0128',
            icon: <span class="material-symbols-outlined">call</span>,
            more: <span class="material-symbols-outlined">more_vert</span>
        },
        {
            id: 2,
            name: 'Location',
            info: 'New York',
            icon: <span class="material-symbols-outlined">location_on</span>,
            more: <span class="material-symbols-outlined">more_vert</span>
        },
        {
            id: 3,
            name: 'support Email',
            info: 'info@example.com',
            icon: <span class="material-symbols-outlined">outgoing_mail</span>,
            more: <span class="material-symbols-outlined">more_vert</span>
        },
        {
            id: 4,
            name: 'Website',
            info: 'google.com',
            icon: <span class="material-symbols-outlined">language</span>,
            more: <span class="material-symbols-outlined">more_vert</span>
        },
        {
            id: 5,
            name: 'Contact Since',
            info: '14 Aug - 25 Aug',
            icon: <span class="material-symbols-outlined">calendar_month</span>,
            more: <span class="material-symbols-outlined">more_vert</span>
        },
    ]

    return (
        <div className='bg-bgColor dark:bg-darkBg'>
            <section className='relative bg-bgColor dark:bg-darkBg'>
                <Image className='bg-myBlack h-[400px] w-full object-cover' src={bgProfile} alt="bgProfile" />
                <div className='flex flex-wrap gap-4 items-center justify-between w-4/5 absolute centerDiv'>
                    <div className='flex items-center gap-2 md:gap-6 lg:gap-6'>
                        <Image className='w-[120px] h-[120px] rounded-full' src={profile} alt="profile" />
                        <div>
                            <h3 className='text-lg lg:text-[32px] whitespace-nowrap font-semibold text-white'>Data Coordiator</h3>
                            <span className='text-sm  text-white'>Bluth CEO</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 bg-myBlue dark:bg-myGreen rounded py-3 px-4 cursor-pointer'>
                        <span class="material-symbols-outlined text-white dark:text-myBlack">edit_square</span>
                        <span className='text-sm  text-white dark:text-myBlack'>Edit profile</span>
                    </div>
                </div>
            </section>

            <section className='px-6 pt-10 pb-6 block lg:flex gap-6'>
                {/* Profile details  */}
                <div className=''>
                    <div className='bg-white dark:bg-darkCard py-7 px-5 w-full rounded cardShadow mb-6'>
                        <h3 className='text-[#1E192A] dark:text-white text-[32px] mt-[30px] font-semibold '>Profile details</h3>
                        <hr className='my-10 border-myLine dark:border-darkLine' />
                        <div className="overflow-x-auto whitespace-nowrap">
                            <table className="table">
                                <tbody>
                                    {
                                        informations.map(info => (<tr
                                            key={info.id}
                                            className='dark:border-darkLine'
                                        >
                                            <td className='flex gap-2'>
                                                <div className='text-myGrey dark:text-myLine text-sm'>{info.icon}</div>
                                                <div className='text-myGrey dark:text-myLine text-sm'>{info.name}</div>
                                            </td>
                                            <td className='text-myBlack dark:text-white text-base'>{info.more}</td>
                                            <td className='text-myBlack dark:text-white text-base'>{info.info}</td>
                                        </tr>))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Skills part  */}
                    <div className='py-10 px-4 md:px-8 lg:px-8 my-6 rounded w-full bg-white dark:bg-darkCard cardShadow'>
                        <h4 className='text-myBlack text-2xl font-semibold dark:text-white'>Skills</h4>
                        <hr className='border-myLine dark:border-darkLine my-10' />
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5 '>

                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-2 md:px-4 lg:px-4 border border-myLine rounded'>UI/UX Degsign</span>

                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-3 md:px-4 lg:px-4 border border-myLine rounded'>Web Degsign</span>

                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-2 md:px-4 lg:px-4 border border-myLine rounded'>Development</span>

                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300 text-center py-3 px-2 md:px-4 lg:px-4 border border-myLine rounded'>Development</span>

                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-2 md:px-4 lg:px-4 border border-myLine rounded'>Product Design</span>

                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-2 md:px-4 lg:px-4 border border-myLine rounded'>Branding Design</span>
                        </div>
                    </div>
                </div>
                {/* About us part  */}
                <div className='py-10 px-8 rounded h-full bg-white dark:bg-darkCard cardShadow'>
                    <h4 className='text-2xl font-semibold text-myBlack dark:text-white mb-8'>About Us</h4>
                    <p className='text-base text-[#252525] dark:text-myWhite mb-7 text-justify'>Lorem ipsum dolor sit amet consectetur. Volutpat mattis turpis lorem luctus. Et sed ornare at fermentum vestibulum sit. A sem faucibus cursus pretium vel vitae pellentesque sed vulputate. In turpis leo dictum est id. Sed mi sed neque quam sit.</p>
                    <p className='text-base text-[#252525] dark:text-myWhite mb-7 text-justify'>Lorem ipsum dolor sit amet consectetur. Volutpat sed gravida ultrices elit lectus odio nunc natoque. Ut aliquam cursus consectetur urna nunc nunc tellus. </p>
                    <p className='text-base text-[#252525] dark:text-myWhite mb-7 text-justify'>Lorem ipsum dolor sit amet consectetur. Euismod vel ut aliquet cursus arcu quisque suspendisse vel tincidunt. </p>

                    <ol className='list-decimal	list-inside'>
                        <li className='text-sm text-[#252525] dark:text-myWhite mb-[17px] text-justify	'>Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam volutpat.</li>
                        <li className='text-sm text-[#252525] dark:text-myWhite mb-[17px] text-justify	'>Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam volutpat.</li>
                        <li className='text-sm text-[#252525] dark:text-myWhite mb-[17px] text-justify	'>Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam volutpat.</li>
                        <li className='text-sm text-[#252525] dark:text-myWhite mb-[17px] text-justify'>Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam volutpat.</li>
                        <li className='text-sm text-[#252525] dark:text-myWhite mb-[17px] text-justify'>Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam volutpat.</li>
                    </ol>
                    <p className='text-base text-[#252525] dark:text-myWhite mt-7 text-justify'>Lorem ipsum dolor sit amet consectetur. Euismod vel ut aliquet cursus arcu quisque suspendisse vel tincidunt. Sagittis aliquet dignissim tortor et purus. Risus diam pharetra enim sit ut dis ut cursus eget. Massa bibendum nec ut enim id erat arcu.</p>
                </div>
            </section>


            {/* Experience */}
            <section className='px-6 pb-6'>
                <h4 className='text-2xl text-myBlack dark:text-white font-semibold mb-10'>Experience</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    <div className='p-5 rounded bg-white dark:bg-darkCard cardShadow'>
                        <div className='flex items-center justify-between flex-wrap'>
                            <div className='flex items-center gap-3'>
                                <Image className='w-10 h-10 rounded-full' src={google} alt="google" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-myBlack dark:text-white'>Google</h4>
                                    <span className='text-lg text-myGrey dark:text-myWhite'>New York, NY</span>
                                </div>
                            </div>
                            <span className='text-sm text-myBlue dark:text-myGreen'>Jun 2022 - Apr 2023</span>
                        </div>
                        <p className='text-lg text-myGrey mt-8 dark:text-myLine text-justify'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className='p-5 rounded bg-white dark:bg-darkCard cardShadow'>
                        <div className='flex items-center justify-between flex-wrap'>
                            <div className='flex items-center gap-3'>
                                <Image className='w-10 h-10 rounded-full' src={facebook} alt="facebook" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-myBlack dark:text-white'>Facebook</h4>
                                    <span className='text-lg text-myGrey dark:text-myWhite'>New York, NY</span>
                                </div>
                            </div>
                            <span className='text-sm text-myBlue dark:text-myGreen'>Jun 2022 - Apr 2023</span>
                        </div>
                        <p className='text-lg text-myGrey mt-8 dark:text-myLine text-justify'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className='p-5 rounded bg-white dark:bg-darkCard cardShadow'>
                        <div className='flex items-center justify-between flex-wrap'>
                            <div className='flex items-center gap-3'>
                                <Image className='w-10 h-10 rounded-full' src={telegram} alt="telegram" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-myBlack dark:text-white'>Telegram</h4>
                                    <span className='text-lg text-myGrey dark:text-myWhite'>New York, NY</span>
                                </div>
                            </div>
                            <span className='text-sm text-myBlue dark:text-myGreen'>Jun 2022 - Apr 2023</span>
                        </div>
                        <p className='text-lg text-myGrey mt-8 dark:text-myLine text-justify'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                </div>
            </section>
            <hr className='pb-8 mx-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default profileTwo;