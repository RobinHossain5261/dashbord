"use client"
import { useState } from 'react';
import '../pricingOne/pricing.css';


const PricingTwo = () => {
   
    const [price,setPrice]=useState(true);

   
    const cards = [ 
        {
            id: 1,
            package: 'Starter',
            price: '$333/month',
            yearPrice: '$1333/year',
            des: 'Lorem ipsum dolor sit amet consectetur. A tellus dolor nec potenti. Ornare sem.',
            event: 'Up to 250k events',
            campaigns: 'Run 25 campaigns',
            users: 'Invite up to 10 users',
            database: 'Shared Database',
            security: 'Basic Security'
        },
        {
            id: 2,
            package: 'Professional',
            price: '$433/month',
            yearPrice: '$1433/year',
            des: 'Lorem ipsum dolor sit amet consectetur. A tellus dolor nec potenti. Ornare sem.',
            event: 'Up to 250k events',
            campaigns: 'Run 25 campaigns',
            users: 'Invite up to 10 users',
            database: 'Shared Database',
            security: 'Basic Security'
        },
        {
            id: 3,
            package: 'Premium',
            price: '$633/month',
            yearPrice: '$1533/year',
            des: 'Lorem ipsum dolor sit amet consectetur. A tellus dolor nec potenti. Ornare sem.',
            event: 'Up to 250k events',
            campaigns: 'Run 25 campaigns',
            users: 'Invite up to 10 users',
            database: 'Shared Database',
            security: 'Basic Security'
        }
    ]

 

    return (
        <div className='px-2 lg:px-6 pt-10 pb-8 bg-bgColor dark:bg-darkBg'>
            <h2 className='text-myBlack text-[40px] text-center font-semibold mb-5 dark:text-white'>Our Pricing</h2>
            <p className='lg:w-1/3 mx-auto text-center text-lg text-myBlack dark:text-myWhite'>Vestibulum diam risus, convallis vel blandit eu, iaculis in diam. Fusce elementum metus sem.Nulla posuere, tortor sed .</p>
            <div className='flex items-center justify-center mt-7 mb-10 gap-6'>
                <button style={{backgroundColor:price===true ? '#4538D3' : '', color:price===true ? '#FFFFFF' : ''}} onClick={()=>setPrice(true)} className={`text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded`}>Billed Monthly</button>
                <button style={{backgroundColor:price===false ? '#4538D3' : '', color:price===false ? '#FFFFFF' : ''}} onClick={()=>setPrice(false)} className={`text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded`}>Billed Annually</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cards.map(card => (<div
                        key={card.id}
                        className='group bg-white dark:bg-darkCard p-3 lg:py-7 lg:px-8 rounded boxShadow border dark:border-darkLine hover:border-myBlue dark:hover:border-myGreen'
                    >
                        <h5 className='text-myBlue dark:text-myGreen text-xl font-semibold'>{card.package}</h5>

                        <h4 className='text-myBlack text-2xl font-semibold my-2 dark:text-myWhite'>
                        {price == true ? card.price : card.yearPrice}
                            </h4>

                        <p className='text-lg text-justify text-myBlack dark:text-myWhite'>{card.des}</p>

                        <ul className='mt-4 mb-5 lg:mt-8 lg:mb-10'>
                            <li className='text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6'><span class="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                                done_all</span>{card.event}</li>
                            <li className='text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6 '><span class="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                                done_all</span>{card.campaigns}</li>
                            <li className='text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6'><span class="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                                done_all</span>{card.users}</li>
                            <li className='text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6'><span class="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                                done_all</span>{card.database}</li>
                            <li className='text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6'><span class="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                                done_all</span>{card.security}</li>
                        </ul>
                        <button className="text-sm ease-in-out duration-300	 py-3 px-4 border border-myBlue dark:border-myGreen font-semibold text-myBlue dark:text-myGreen leading-6	 rounded w-full hover:text-white dark:hover:text-white hover:bg-myBlue dark:hover:bg-myGreen">Selecet Plan</button>
                    </div>))
                }
            </div>
            <hr className='mt-6 lg:mt-20 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default PricingTwo;