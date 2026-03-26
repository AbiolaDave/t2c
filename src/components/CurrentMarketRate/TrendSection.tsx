"use client";

import { RatesProviderType } from "@/utils/types";
import Image from "next/image";
import ProviderSidebar from "./ProviderSideBar";
import RateHistoryChart from "./RateHistoryChart";

const TrendsSection = ({
  rateProvider,
  chartReady,
  providers,
  activeIndex,
  onProviderClick,
}: {
  rateProvider: RatesProviderType;
  chartReady: boolean;
  providers: RatesProviderType[];
  activeIndex: number;
  onProviderClick: (provider: RatesProviderType, i: number) => void;
}) => {
  return (
    <div className="relative w-full overflow-x-hidden mt-10 lg:mt-0 p-4 ml-0 font-sans">
      <div className="">
        <h1 className="font-sunflower text-[#0F1729] font-light text-[40px]/[38.16px]  lg:text-[71px]/[67px] max-w-125">
          Trends
        </h1>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-3 lg:gap-10 mt-10 2xl:gap-16 w-full">
        <RateHistoryChart rateProvider={rateProvider} chartReady={chartReady} />
        <ProviderSidebar
          providers={providers}
          activeIndex={activeIndex}
          onProviderClick={onProviderClick}
        />
      </div>

      <div className="overflow-hidden! z-50 w-full">
        <Image
          src="/coinhalf.png"
          alt="coinhalf"
          width={400}
          height={400}
          className="absolute w-32.25 h-25.75 -right-10 lg:-right-5 2xl:-right-12 lg:h-75 -mt-5 lg:w-55 lg:-mt-30 object-fill z-30"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src="/vectormid.png"
          alt="vector"
          width={400}
          height={500}
          className="w-29.75 h-73.75 -mt-30  absolute  z-50"
        />
      </div>
    </div>
  );
};

export default TrendsSection;
