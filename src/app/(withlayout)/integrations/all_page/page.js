"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import integrations from "@/../public/images/pages/integrations.png";
import darkIntegrations from "@/../public/images/pages/darkIntegrations.png";
import darkIntegrationsSingle from "@/../public/images/pages/darkIntegrationsSingle.png";
import integrationsSingle from "@/../public/images/pages/integrationsSingle.png";
import Image from "next/image";

const allPage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="px-3 lg:px-6 pb-6 pt-10 bg-bgColor dark:bg-darkBg min-h-screen ">
      <h3 className="text-[32px] font-semibold text-myBlack dark:text-white">
        Integrations
      </h3>
      <span className="text-sm text-myBlack dark:text-white">
        Lorem ipsum dolor sit ammet consectetur.
      </span>
      <div className="flex flex-wrap gap-6 mt-8">
        <Link
          href="/integrations"
          className="card  bg-white dark:bg-darkCard shadow-xl group"
        >
          <figure className="px-5 pt-5">
            <Image
              src={resolvedTheme === "dark" ? darkIntegrations : integrations}
              alt="page"
              className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">
              Integration
            </h2>
            <p className="text-base text-myBlue dark:text-myGreen">View Page</p>
          </div>
        </Link>
        <Link
          href="/integrations/integrations_single"
          className="card bg-white dark:bg-darkCard shadow-xl group"
        >
          <figure className="px-5 pt-5">
            <Image
              src={
                resolvedTheme === "dark"
                  ? darkIntegrationsSingle
                  : integrationsSingle
              }
              alt="page"
              className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">
              Integrations Single
            </h2>
            <p className="text-base text-myBlue dark:text-myGreen">View Page</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default allPage;
