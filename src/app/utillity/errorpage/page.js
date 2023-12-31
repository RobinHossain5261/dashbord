import React from "react";
import bg from "@/../public/images/404_bg.png";
import oops from "@/../public/images/oops.png";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-bgColor bg-no-repeat bg-auto bg-center  bg-[url('/images/404_bg.png')] dark:bg-darkBg">
      <div className="hero-content text-center ">
        <div>
          <Image
            className="w-full object-cover mb-5 sm:mb-[60px]"
            src={oops}
            alt="oops"
          />
          <h1 className="text-xl sm:text-[40px] text-myBlack dark:text-white font-semibold mb-3 sm:mb-6">
            404 Error Page Not Found
          </h1>
          <p className="lg:w-[500px] mx-auto text-base text-myGrey dark:text-myWhite mb-5 sm:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            href="/"
            className="text-sm text-white dark:text-myBlack dark:bg-myGreen bg-myBlue px-4 py-3 rounded"
          >
            Go Back Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
