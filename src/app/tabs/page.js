"use client"
import React from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const tabs = () => {

    // const [activeTab, setActiveTab] = useState("tab1");
    // const handleTab1 = () => {
    //     setActiveTab('tab1');
    // }

    // const handleTab2 = () => {
    //     setActiveTab('tab2');
    // }


    return (
        <div className='px-6 pt-10 Tabs'>
            <h3 className='mb-10 text-2xl'>Tabs creationg</h3>
            <Tabs >
                <TabList className='flex gap-6 mb-10'>
                    <Tab className='bg-myBlue'>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default tabs;