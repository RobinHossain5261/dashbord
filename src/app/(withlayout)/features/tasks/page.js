import Image from "next/image";
import React from "react";
import { reportCards } from "../../../../../public/data/featuresData";

const tasks = () => {
  return (
    <div className="px-3 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg">
      <h3 className="text-[32px] font-semibold text-myBlack dark:text-white">
        Tasks
      </h3>
      <span className="text-sm text-myBlack dark:text-white">
        Lorem ipsum dolor sit ammet consectetur.
      </span>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCards.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-darkCard p-2 md:py-6 lg:py-8 md:px-8 lg:px-10 rounded   hover:-skew-y-3 duration-300"
          >
            <Image
              className="w-[120px] h-[120px] rounded-full mx-auto mb-3 lg:mb-8"
              src={card.img}
              alt="buyer"
            />
            <h4 className="text-myBlack dark:text-white text-xl lg:text-2xl font-semibold text-center mb-3 lg:mb-7">
              {card.title}
            </h4>
            <div className="flex flex-wrap justify-around mb-3 lg:mb-8">
              <p className="text-myBlue  dark:text-myGreen dark:bg-[#2C3140] rounded py-1 px-5 md:px-8  lg:px-12 bg-[#F6F6FB] text-sm">
                {card.category}
              </p>
              <div className="border dark:border-darkLine"></div>
              <div className="flex items-center">
                <span className="cursor-pointertext-myGrey  dark:text-myWhite">
                  {card.icon}
                </span>
                <p className="ml-1 text-sm text-myGrey dark:text-myWhite">
                  {card.date}
                </p>
              </div>
            </div>
            <p className="text-lg text-center text-myGrey dark:text-myWhite">
              {card.des}
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-6 border-myLine dark:border-darkLine" />
    </div>
  );
};

export default tasks;
