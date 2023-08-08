"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Account from "@/components/SettingsTab/Account/Account";
import Team from "@/components/SettingsTab/Team/Team";
import Belling from "@/components/SettingsTab/Belling/Belling";
import Notifications from "@/components/SettingsTab/Notification/Notifications";
import API from "@/components/SettingsTab/API/API";

const settingsTwo = () => {
  return (
    <div className="px-3 lg:px-6 pt-11 sm:pb-6 bg-bgColor dark:bg-darkBg">
      <h3 className="text-[32px] font-semibold text-myBlack dark:text-white">
        General settings
      </h3>
      <span className="text-sm text-myBlack dark:text-white ">
        Lorem ipsum dolor sit ammet consectetur.
      </span>

      <div className="mt-8">
        <Tab.Group>
          <div className="lg:flex gap-6 w-full">
            <div className="w-full lg:w-[504px] bg-white  dark:bg-darkCard h-full rounded cardShadow p-3 lg:py-7 lg:px-8 mb-6">
              <Tab.List>
                <Tab
                  className=" hover:text-myBlue dark:hover:text-myGreen outline-none"
                  as={Fragment}
                >
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? " text-myBlue dark:text-myGreen"
                          : "text-myBlack dark:text-myWhite"
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">edit</span>
                        <span className=" text-base">Account</span>
                      </span>
                    </button>
                  )}
                </Tab>
                <hr className="my-3 border-myLine dark:border-darkLine " />
                <Tab
                  className=" hover:text-myBlue dark:hover:text-myGreen outline-none"
                  as={Fragment}
                >
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? " text-myBlue dark:text-myGreen"
                          : "text-myBlack dark:text-myWhite"
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">group</span>
                        <span className=" text-base">Team</span>
                      </span>
                    </button>
                  )}
                </Tab>
                <hr className="my-3 border-myLine dark:border-darkLine " />
                <Tab
                  className="hover:text-myBlue dark:hover:text-myGreen outline-none"
                  as={Fragment}
                >
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? " text-myBlue dark:text-myGreen"
                          : "text-myBlack dark:text-myWhite"
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          add_card
                        </span>
                        <span className=" text-base">Billing</span>
                      </span>
                    </button>
                  )}
                </Tab>
                <hr className="my-3 border-myLine dark:border-darkLine " />
                <Tab
                  className=" hover:text-myBlue dark:hover:text-myGreen outline-none"
                  as={Fragment}
                >
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? " text-myBlue dark:text-myGreen"
                          : "text-myBlack dark:text-myWhite"
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          notifications
                        </span>
                        <span className=" text-base">Notification</span>
                      </span>
                    </button>
                  )}
                </Tab>
                <hr className="my-3 border-myLine dark:border-darkLine " />
                <Tab
                  className="hover:text-myBlue dark:hover:text-myGreen outline-none"
                  as={Fragment}
                >
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? " text-myBlue dark:text-myGreen"
                          : "text-myBlack dark:text-myWhite"
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          settings
                        </span>
                        <span className=" text-base">API</span>
                      </span>
                    </button>
                  )}
                </Tab>
              </Tab.List>
            </div>

            <Tab.Panels className="w-full">
              <Tab.Panel>
                <Account />
              </Tab.Panel>
              <Tab.Panel>
                <Team />
              </Tab.Panel>
              <Tab.Panel>
                <Belling />
              </Tab.Panel>
              <Tab.Panel>
                <Notifications />
              </Tab.Panel>
              <Tab.Panel>
                <API />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
      <hr className="mt-6 border-myLine dark:border-darkLine" />
    </div>
  );
};

export default settingsTwo;
