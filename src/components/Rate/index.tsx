"use client";

import { RatesProviders } from "@/utils/rates/rates";
import { RatesProviderType } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import RateChart from "./RateCharts";

const Rate = () => {
  const [rateProvider, setRateProvider] = useState(RatesProviders[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const providerClicked = (provider: RatesProviderType, i: number) => {
    setRateProvider(provider);
    setActiveIndex(i);
  };

  return (
    <div className="min-h-screen overflow-hidden p-4 -mt-44 ml-2 lg:ml-32 lg:mt-30 font-sans">
      <div className="text-start">
        <h1 className="font-sunflower text-[#3CAE8C] font-light text-[40px]/[38.16px] lg:text-[71px]/[67px] max-w-80 lg:max-w-125">
          Track Exchange <span className="text-[#6F6F6F]">Rate Trends</span>
        </h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-10">
        <div className="lg:w-187 lg:h-100.5 rounded-[14px] bg-white border border-[#E1E7EF80] p-4">
          <div className="flex items-center">
            <Image
              className="w-11.5 h-11.5"
              src={rateProvider.logo}
              alt={rateProvider.name}
              width={100}
              height={100}
            />
            <h1 className="text-[#0F1729] font-sunflower font-bold text-[20px]/[31px]">
              Rate History: {rateProvider.name}
            </h1>
          </div>

          <div className="h-85">
            <RateChart />
          </div>
        </div>

        <div className=" lg:w-73.25 lg:h-100.5 border border-[#E1E7EF80] rounded-[8.6px] lg:rounded-[15px] bg-white flex flex-col overflow-y-auto px-5  py-5 gap-2.5">
          <h1 className="lg:text-[18px] sticky left-5 text-[#0F1729] font-sunflower font-bold text-[16px]">
            All Providers
          </h1>
          <div className="flex flex-row lg:flex-col gap-2.5  items-center">
            {RatesProviders.map((provider, i) => (
              <>
                <div
                  key={provider.id}
                  onClick={() => providerClicked(provider, i)}
                  className={`flex w-61.5 h-13.25 rounded-[11px] bg-[#E1E7EF33] px-3 lg:px-0 lg:pl-8 items-center gap-2.5 hover:bg-white cursor-pointer ${
                    i === activeIndex
                      ? "border-2 shadow-sm shadow-gray-400 border-[#3CAE8C]"
                      : ""
                  }`}
                >
                  <div className="w-7.5 h-7.5 rounded-[11px] bg-white shadow-sm flex items-center justify-center">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 className="font-inter font-medium text-[15px] text-[#0F1729]">
                    {provider.name}
                  </h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden! w-full">
        <Image
          src="/coinhalf.png"
          alt="coinhalf"
          width={100}
          height={100}
          className="absolute w-32.25 h-25.75 ml-72 lg:h-75 -mt-5 lg:w-55  lg:ml-250 lg:-mt-10 object-fill z-30"
        />
      </div>
    </div>
  );
};

export default Rate;
