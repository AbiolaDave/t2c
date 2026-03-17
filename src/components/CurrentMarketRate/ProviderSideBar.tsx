"use client";

import { RatesProviderType } from "@/utils/types";
import Image from "next/image";

const ProviderSidebar = ({
  providers,
  activeIndex,
  onProviderClick,
}: {
  providers: RatesProviderType[];
  activeIndex: number;
  onProviderClick: (provider: RatesProviderType, i: number) => void;
}) => {
  return (
    <div className="md:w-60 lg:w-73.25 md:h-100.5 border border-[#E1E7EF80] rounded-[8.6px] lg:rounded-[15px] bg-white flex flex-col overflow-y-auto px-5  py-5 gap-2.5">
      <h1 className="lg:text-[18px] sticky left-5 text-[#0F1729] font-sunflower font-bold text-[20px]">
        All Providers
      </h1>
      <div className="flex flex-row md:flex-col gap-2.5  items-center">
        {providers.map((provider, i) => (
          <div
            onClick={() => onProviderClick(provider, i)}
            key={provider.id}
            className={`flex w-45 px-2 lg:px-0 lg:w-48.5 h-13.25 shrink-0 rounded-[11px] bg-[#E1E7EF33] items-center justify-around gap-2.5 hover:bg-white cursor-pointer ${
              i === activeIndex
                ? "border-2 shadow-sm shadow-[#3CAE8C] border-[#3CAE8C]"
                : ""
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6.5 h-6.5 lg:w-7.5 lg:h-7.5 rounded-[11px] bg-white shadow-xs flex items-center justify-between">
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="font-inter font-medium text-[12px] md:text-[13px] text-[#0F1729]">
                {provider.name}
              </h1>
            </div>
            <div>
              <h1 className="font-inter font-medium text-[12px] md:text-[13px] text-[#0F1729]">
                {provider.rate}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderSidebar;
