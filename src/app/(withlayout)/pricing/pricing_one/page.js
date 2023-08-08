"use client";
import React, { useState } from "react";
import "./pricing.css";
import { Switch } from "@headlessui/react";
import { cards } from "../../../../../public/data/pricingData";

const PricingOne = () => {
  const [enabled, setEnabled] = useState(false);

  const [price, setPrice] = useState(false);

  const toggle = () => {
    setPrice(!price);
  };

  return (
    <div className="px-3 lg:px-6 pt-8 lg:pb-[30px] bg-bgColor dark:bg-darkBg">
      <h2 className="text-myBlack text-[40px] text-center font-semibold mb-5 dark:text-white">
        Our Pricing
      </h2>
      <p className="text-center text-lg text-myBlack dark:text-myWhite">
        Vestibulum diam risus, convallis vel blandit eu, iaculis in diam.
        <br /> Fusce elementum metus sem.Nulla posuere, tortor sed .
      </p>
      <div className="flex items-center justify-center whitespace-nowrap mt-7">
        <h4 className="text-sm md:text-lg lg:text-lg text-myBlack dark:text-white">
          Billed Monthly
        </h4>
        <div className="form-control mx-3 lg:mx-[22px]">
          <Switch
            checked={enabled}
            onClick={toggle}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600 dark:bg-myGreen" : "bg-gray-200"
            } relative inline-flex h-7 w-14 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-8" : "translate-x-1"
              } inline-block h-5 w-5 transform rounded-full bg-white transition ease-in-out duration-300`}
            />
          </Switch>
        </div>
        <h4 className="text-sm lg:text-lg md:text-lg text-myBlack  dark:text-white">
          Billed Annually
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 lg:mt-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-darkCard p-2 md:py-4 md:px-5 lg:py-7 lg:px-8 rounded boxShadow text-center border hover:border-myBlue dark:hover:border-[#64C4F7] dark:border-darkLine"
          >
            <h5 className="text-myBlue dark:text-myGreen text-xl font-semibold">
              {card.package}
            </h5>
            <h4 className="text-myBlack dark:text-white text-2xl font-semibold my-2">
              {price ? card.price1 : card.price}
            </h4>
            <p className="text-lg text-myBlack dark:text-myWhite">{card.des}</p>

            <ul className="lg:mt-8 lg:mb-10 my-5 ">
              <li className="text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t lg:w-3/4 mx-auto py-2 md:py-3 lg:py-5">
                {card.event}
              </li>
              <li className="text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t lg:w-3/4 mx-auto py-2 md:py-3 lg:py-5">
                {card.campaigns}
              </li>
              <li className="text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t lg:w-3/4 mx-auto py-2 md:py-3 lg:py-5">
                {card.users}
              </li>
              <li className="text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t lg:w-3/4 mx-auto py-2 md:py-3 lg:py-5">
                {card.database}
              </li>
              <li className="text-lg text-myBlack dark:text-myWhite dark:border-darkLine border-t lg:w-3/4 mx-auto py-2 md:py-3 lg:py-5">
                {card.security}
              </li>
            </ul>
            <button className="btn btn-outline btn-primary dark:btn-outline dark:btn-success w-full">
              Selecet Plan
            </button>
          </div>
        ))}
      </div>
      <hr className="mt-6 border-myLine dark:border-darkLine" />
    </div>
  );
};

export default PricingOne;
