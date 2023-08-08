"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  companies,
  searchengine,
  socialmedia,
  streaming,
} from "../../../../public/data/integrationsData";
import { Tab } from "@headlessui/react";

const intregrations = () => {
  return (
    <div className="px-3 lg:px-6 pt-8 pb-6 bg-bgColor dark:bg-darkBg min-h-screen">
      <h3 className="text-[32px] text-myBlack font-semibold dark:text-white">
        Integrations
      </h3>
      <span className="text-sm text-myBlack dark:text-white">
        Lorem ipsum dolor sit amet consectetur.
      </span>

      <Tab.Group>
        <Tab.List className="flex flex-wrap gap-6 px-2 py-3 rounded my-5 lg:my-10">
          <Tab
            className="text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-myBlue dark:bg-myGreen text-white"
                    : "bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite"
                }
              >
                All
              </button>
            )}
          </Tab>
          <Tab
            className="text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none flex items-center gap-2"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-myBlue dark:bg-myGreen text-white"
                    : "bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite"
                }
              >
                <span>Search engine</span>
                <span className="material-symbols-outlined">search</span>
              </button>
            )}
          </Tab>

          <Tab
            className="text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none  flex items-center gap-2"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-myBlue dark:bg-myGreen text-white"
                    : "bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite"
                }
              >
                <span>Social media</span>
                <span className="material-symbols-outlined">share_reviews</span>
              </button>
            )}
          </Tab>
          <Tab
            className="text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none flex items-center gap-2"
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-myBlue dark:bg-myGreen text-white"
                    : "bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite"
                }
              >
                <span>Streaming</span>
                <span className="material-symbols-outlined">live_tv</span>
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white dark:bg-darkCard px-2 pt-2 pb-5 lg:px-8 lg:py-7 rounded text-center cardShadow"
              >
                <Image
                  className="cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto"
                  src={company.img}
                  alt="facebook"
                />
                <h4 className="text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5">
                  {company.name}
                </h4>
                <p className="text-myGrey dark:text-myWhite text-center text-base mb-5 lg:mb-8">
                  {company.des}
                </p>
                <Link
                  href="/integrations/integrationsSingle"
                  className="text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded"
                >
                  View integrations
                </Link>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {searchengine.map((company) => (
              <div
                key={company.id}
                className="bg-white dark:bg-darkCard px-2 pt-2 pb-4 lg:px-8 lg:py-7 rounded text-center cardShadow"
              >
                <Image
                  className="cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto"
                  src={company.img}
                  alt="facebook"
                />
                <h4 className="text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5">
                  {company.name}
                </h4>
                <p className="text-myGrey dark:text-myWhite text-center text-base mb-4 lg:mb-8">
                  {company.des}
                </p>
                <Link
                  href="/integrations/integrationsSingle"
                  className="text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded"
                >
                  View integrations
                </Link>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {socialmedia.map((company) => (
              <div
                key={company.id}
                className="bg-white dark:bg-darkCard px-2 pt-2 pb-5 lg:px-8 lg:py-7 rounded text-center cardShadow"
              >
                <Image
                  className="cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto"
                  src={company.img}
                  alt="facebook"
                />
                <h4 className="text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5">
                  {company.name}
                </h4>
                <p className="text-myGrey dark:text-myWhite text-center text-base mb-5 lg:mb-8">
                  {company.des}
                </p>
                <Link
                  href="/integrations/integrationsSingle"
                  className="text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded"
                >
                  View integrations
                </Link>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {streaming.map((company) => (
              <div
                key={company.id}
                className="bg-white dark:bg-darkCard px-2 pt-2 pb-5 lg:px-8 lg:py-7 rounded text-center cardShadow"
              >
                <Image
                  className="cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto"
                  src={company.img}
                  alt="facebook"
                />
                <h4 className="text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5">
                  {company.name}
                </h4>
                <p className="text-myGrey dark:text-myWhite text-center text-base mb-5 lg:mb-8">
                  {company.des}
                </p>
                <Link
                  href="/integrations/integrationsSingle"
                  className="text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded"
                >
                  View integrations
                </Link>
              </div>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default intregrations;
