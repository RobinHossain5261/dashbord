import React from 'react';
import './pricing.css';

const PricingOne = () => {

    const cards = [
        {
            id: 1,
            package: 'Starter',
            price: '$333/month',
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
            des: 'Lorem ipsum dolor sit amet consectetur. A tellus dolor nec potenti. Ornare sem.',
            event: 'Up to 250k events',
            campaigns: 'Run 25 campaigns',
            users: 'Invite up to 10 users',
            database: 'Shared Database',
            security: 'Basic Security'
        }
    ]

    return (
        <div className='px-6 pt-6 pb-[30px] bg-bgColor dark:bg-darkBg'>
            <h2 className='text-myBlack text-[40px] text-center font-semibold mb-5 dark:text-white'>Our Pricing</h2>
            <p className='text-center text-lg text-myBlack dark:text-myWhite'>Vestibulum diam risus, convallis vel blandit eu, iaculis in diam. Fusce <br /> elementum metus sem.Nulla posuere, tortor sed .</p>
            <div className='flex items-center justify-center mt-7'>
                <h4 className='text-lg text-myBlack dark:text-white'>Billed Monthly</h4>
                <div className="form-control mx-[22px]">
                    {/* <label className="cursor-pointer label">
                        <input type="checkbox" className="toggle toggle-primary" checked />
                    </label> */}
                    <input
                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault" />
                </div>
                <h4 className='text-lg text-myBlack  dark:text-white'>Billed Annually</h4>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    cards.map(card => (<div
                        key={card.id}
                        className='bg-white dark:bg-darkCard py-7 px-8 rounded boxShadow text-center border hover:border-myBlue dark:hover:border-[#64C4F7] dark:border-darkLine'
                    >
                        <h5 className='text-myBlue dark:text-myGreen text-xl font-semibold'>{card.package}</h5>
                        <h4 className='text-myBlack dark:text-white text-2xl font-semibold my-2'>{card.price}</h4>
                        <p className='text-lg text-myBlack dark:text-myWhite'>{card.des}</p>

                        <ul className='mt-8 mb-10 '>
                            <li className='text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t w-1/2 mx-auto py-5'>{card.event}</li>
                            <li className='text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t w-1/2 mx-auto py-5'>{card.campaigns}</li>
                            <li className='text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t w-1/2 mx-auto py-5'>{card.users}</li>
                            <li className='text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t w-1/2 mx-auto py-5'>{card.database}</li>
                            <li className='text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t w-1/2 mx-auto py-5'>{card.security}</li>
                        </ul>
                        <button className="btn btn-outline btn-primary dark:btn-outline dark:btn-success w-full">Selecet Plan</button>
                    </div>))
                }
            </div>
            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default PricingOne;