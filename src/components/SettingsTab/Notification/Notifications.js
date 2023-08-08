import React from 'react';
import { useState } from 'react';
import { Switch, Tab } from '@headlessui/react';

const Notifications = () => {

    const [enabled, setEnabled] = useState(true);
    const [enabled1, setEnabled1] = useState(true);
    const [enabled2, setEnabled2] = useState(true);
    const [enabled3, setEnabled3] = useState(true);
    const [enabled4, setEnabled4] = useState(true);

    return (
        <div className='p-3 lg:px-8 lg:py-6 bg-white dark:bg-darkCard rounded'>
            <div className='flex items-center gap-2 mb-8'>
                <span className="material-symbols-outlined text-myBlack dark:text-myWhite w-7 h-7">notifications_active</span>
                <h4 className='text-xl lg:text-2xl text-myBlack dark:text-myWhite font-semibold '>Notifications settings </h4>
            </div>

            <div className='w-full'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>Email Notifications</h6>
                            <span className='text-sm text-myGrey dark:text-myWhite'>Receive weekly email notifications.</span>
                        </div>
                        <div className="form-control">
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                    } relative inline-flex h-7 w-14 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled ? 'translate-x-8' : 'translate-x-1'
                                        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className='my-3 lg:my-6 border-myLine dark:border-darkLine' />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>Phone Notifications</h6>
                            <span className='text-sm text-myGrey dark:text-myWhite'>Receive weekly email notifications.</span>
                        </div>
                        <div className="form-control">
                            <Switch
                                checked={enabled1}
                                onChange={setEnabled1}
                                className={`${enabled1 ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                    } relative inline-flex h-7 w-14 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled1 ? 'translate-x-8' : 'translate-x-1'
                                        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className='my-3 lg:my-6 border-myLine dark:border-darkLine' />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>New tasks</h6>
                            <span className='text-sm text-myGrey dark:text-myWhite'>Receive weekly email notifications.</span>
                        </div>
                        <div className="form-control">
                            <Switch
                                checked={enabled3}
                                onChange={setEnabled3}
                                className={`${enabled3 ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                    } relative inline-flex h-7 w-14 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled3 ? 'translate-x-8' : 'translate-x-1'
                                        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className='my-3 lg:my-6 border-myLine dark:border-darkLine' />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>Billing and payments</h6>
                            <span className='text-sm text-myGrey dark:text-myWhite'>Lorem ipsum dolor sit amet consectetur. Id.</span>
                        </div>
                        <div className="form-control">
                            <Switch
                                checked={enabled2}
                                onChange={setEnabled2}
                                className={`${enabled2 ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                    } relative inline-flex h-7 w-14 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled2 ? 'translate-x-8' : 'translate-x-1'
                                        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className='my-3 lg:my-6 border-myLine dark:border-darkLine' />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h6 className='text-base text-myBlack dark:text-white font-semibold mb-2'>Updates and announcements</h6>
                            <span className='text-sm text-myGrey dark:text-myWhite'>Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                        <div className="form-control">
                            <Switch
                                checked={enabled4}
                                onChange={setEnabled4}
                                className={`${enabled4 ? 'bg-blue-600 dark:bg-myGreen' : 'bg-gray-200'
                                    } relative inline-flex  h-7 w-14 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled4 ? 'translate-x-8' : 'translate-x-1'
                                        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Notifications;