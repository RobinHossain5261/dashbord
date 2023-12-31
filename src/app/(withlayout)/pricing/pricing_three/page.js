"use client";
import React, { Fragment } from "react";
import "../pricing_one/pricing.css";
import { pricingCards } from "../../../../../public/data/pricingData";
import { Tab } from "@headlessui/react";

const PricingThree = () => {
  return (
    <div className="px-3 lg:px-6 pt-10 pb-8 bg-bgColor dark:bg-darkBg">
      <h2 className="text-myBlack dark:text-white text-[40px] text-center font-semibold mb-5">
        Our Pricing
      </h2>
      <p className="text-center text-lg text-myBlack dark:text-myWhite">
        Vestibulum diam risus, convallis vel blandit eu, iaculis in diam. Fusce
        elementum metus sem.Nulla posuere, tortor sed .
      </p>

      <Tab.Group>
        <Tab.List className="flex items-center justify-center mt-7 mb-10 gap-6">
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
                Billed Monthly
              </button>
            )}
          </Tab>
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
                Billed Annually
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-darkCard p-3 lg:py-7 lg:px-8 rounded boxShadow  border dark:border-darkLine hover:border-myBlue dark:hover:border-myGreen"
              >
                <div className="flex gap-6">
                  <div className=" w-[60px] h-[60px] flex items-center justify-center bg-[#ECEBFB] dark:bg-[#2C3140] rounded">
                    {card.icon}
                  </div>
                  <div>
                    <h5 className="text-myBlue dark:text-myGreen text-xl font-semibold">
                      {card.package}
                    </h5>
                    <h4 className="text-myBlack dark:text-white text-2xl font-semibold mt-2">
                      {card.price}
                    </h4>
                  </div>
                </div>
                <p className="text-lg text-myBlack dark:text-myWhite mt-7">
                  {card.des}
                </p>

                <ul className="mt-4 lg:mt-8 mb-5 lg:mb-10">
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.event}
                  </li>
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6 ">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.campaigns}
                  </li>
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.users}
                  </li>
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.database}
                  </li>
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.security}
                  </li>
                </ul>
                <button className="text-sm ease-in-out duration-300	 py-3 px-4 border border-myBlue dark:border-myGreen font-semibold text-myBlue dark:text-myGreen leading-6	 rounded w-full hover:text-white dark:hover:text-white hover:bg-myBlue dark:hover:bg-myGreen">
                  Selecet Plan
                </button>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-darkCard p-3 lg:py-7 lg:px-8 rounded boxShadow  border dark:border-darkLine hover:border-myBlue dark:hover:border-myGreen"
              >
                <div className="flex gap-6">
                  <div className=" w-[60px] h-[60px] flex items-center justify-center bg-[#ECEBFB] dark:bg-[#2C3140] rounded">
                    {card.icon}
                  </div>
                  <div>
                    <h5 className="text-myBlue dark:text-myGreen text-xl font-semibold">
                      {card.package}
                    </h5>
                    <h4 className="text-myBlack dark:text-white text-2xl font-semibold mt-2">
                      {card.yearlyPrice}
                    </h4>
                  </div>
                </div>
                <p className="text-lg text-myBlack dark:text-myWhite mt-7">
                  {card.des}
                </p>

                <ul className="mt-4 lg:mt-8 mb-5 lg:mb-10">
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.event}
                  </li>
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6 ">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.campaigns}
                  </li>
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.users}
                  </li>
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.database}
                  </li>
                  <li className="text-lg text-myBlack dark:text-myWhite my-3 md:my-5 lg:my-6">
                    <span className="material-symbols-outlined w-6 h-6 align-middle mr-2 group-hover:text-[#4538D3] dark:group-hover:text-[#00E177]">
                      done_all
                    </span>
                    {card.security}
                  </li>
                </ul>
                <button className="text-sm ease-in-out duration-300	 py-3 px-4 border border-myBlue dark:border-myGreen font-semibold text-myBlue dark:text-myGreen leading-6	 rounded w-full hover:text-white dark:hover:text-white hover:bg-myBlue dark:hover:bg-myGreen">
                  Selecet Plan
                </button>
              </div>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <hr className="mt-6 lg:mt-16 border-myLine dark:border-darkLine" />
    </div>
  );
};

export default PricingThree;
