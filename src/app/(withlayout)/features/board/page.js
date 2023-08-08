import Image from "next/image";
import React from "react";
import img1 from "@/../public/images/img1.png";
import img2 from "@/../public/images/img2.png";
import img3 from "@/../public/images/img3.png";
import img4 from "@/../public/images/img4.png";
import { boards } from "../../../../../public/data/featuresData";
import Link from "next/link";

const board = () => {
  return (
    <div className="px-3 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg">
      <h3 className="text-[32px] font-semibold text-myBlack dark:text-white">
        Board{" "}
      </h3>
      <span className="text-sm text-myBlack dark:text-white">
        Lorem ipsum dolor sit ammet consectetur.
      </span>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boards.map((bord) => (
          <div
            key={bord.id}
            className="bg-white dark:bg-darkCard p-3 lg:py-10 lg:px-8 rounded hover:-skew-y-3 duration-300"
          >
            <span className="text-sm text-white dark:text-myGreen bg-myBlue dark:bg-[#2C3140] py-1 px-2 rounded">
              {bord.work}
            </span>
            <h4 className="text-2xl text-myBlack my-3 lg:mt-6 lg:mb-4 font-semibold dark:text-white">
              {bord.title}
            </h4>
            <p className="text-lg text-myBlack mb-3 lg:mb-7 dark:text-myWhite">
              {bord.des}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <Link href="" className="text-myGrey dark:text-myLine">
                  {bord.file}
                </Link>
                <Link href="" className="text-myGrey flex items-center gap-1">
                  <span className="text-myGrey dark:text-myLine">
                    {" "}
                    {bord.note}
                  </span>
                  <span className="text-base text-myGrey dark:text-myLine">
                    4
                  </span>
                </Link>
              </div>
              <div className="flex">
                <Image
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={img1}
                  alt="bord member"
                />
                <Image
                  className="w-10 h-10 -ml-5 rounded-full border-2 border-white"
                  src={img2}
                  alt="bord member"
                />
                <Image
                  className="w-10 h-10 -ml-5 rounded-full border-2 border-white"
                  src={img3}
                  alt="bord member"
                />
                <Image
                  className="w-10 h-10 -ml-5 rounded-full border-2 border-white"
                  src={img4}
                  alt="bord member"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-6 border-myLine dark:border-darkLine" />
    </div>
  );
};

export default board;
