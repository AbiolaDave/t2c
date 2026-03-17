"use client";

import { RatesProviderType } from "@/utils/types";
import Image from "next/image";
import RateChart from "../Rate/RateCharts";

const RateHistoryChart = ({
  rateProvider,
  chartReady,
}: {
  rateProvider: RatesProviderType;
  chartReady: boolean;
}) => {
  return (
    <div className="md:w-120 lg:w-187 md:h-100.5 rounded-[14px] bg-white border border-[#E1E7EF80] p-4 relative z-30">
      <div className="flex items-center gap-2">
        <div className="w-11.5 h-11.5 rounded-[50%] overflow-hidden">
          <Image
            className=" "
            src={rateProvider.logo}
            alt={rateProvider.name}
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-[#0F1729] font-sunflower font-bold text-[20px]/[31px]">
          Rate History: {rateProvider.name}
        </h1>
      </div>
      {/* Only render chart when container is ready overflow */}
      {chartReady && (
        <div className="w-full mt-10 md:mt-0 h-85">
          <RateChart />
        </div>
      )}
    </div>
  );
};

export default RateHistoryChart;
