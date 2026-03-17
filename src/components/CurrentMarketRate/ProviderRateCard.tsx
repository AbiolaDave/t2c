"use client";

import { CurrencyOption, RatesProviderType } from "@/utils/types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

const ProviderRateCard = ({
  provider,
  index,
  amountInput,
  toCurrency,
}: {
  provider: RatesProviderType;
  index: number;
  amountInput: number;
  toCurrency: CurrencyOption;
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:mt-0 items-center lg:gap-10 ">
      <div
        className={
          index === 0
            ? "w-[350px] ml-8 lg:ml-0 h-[73px] lg:w-99.75 lg:h-32.25 mb-5 border rounded-[11.35px] lg:rounded-[20px] bg-[#3CAE8C] border-[#3CAE8C] flex justify-center text-white items-center gap-4"
            : "w-[350px] ml-8 -mt-5 md:-mt-10 lg:mt-0 lg:ml-0 h-[73px] lg:w-99.75 lg:h-32.25 mb-5 border rounded-[11.35px] lg:rounded-[20px] bg-[#EDF8F5] border-[#EBEBEB] text-black flex justify-center items-center gap-4"
        }
      >
        <div className="w-[40.86px] h-[40.86px] lg:w-18 lg:h-18 lg:ml-4 lg:mt-4 rounded-[50%] overflow-hidden">
          <Image
            src={provider.logo}
            alt={provider.name}
            width={100}
            height={100}
          />
        </div>
        <div>
          <div className="flex items-center">
            <div>
              <h1 className="font-sunflower font-bold text-[14px] lg:text-[19px]">
                {provider.name}
              </h1>
              <h1 className="font-inter text-[12px] -mt-2">Updated 12:52 PM</h1>
            </div>
            {index === 0 && <hr className="w-6.75 rotate-90" />}
            {index === 0 && (
              <div className="w-19.75 h-5.5 rounded-[3px] bg-[#21C45D] flex justify-center items-center gap-1">
                <TrendingUp className="w-2.25 h-2.25 text-black" />
                <h1 className="font-sunflower font-bold text-[13px]">
                  Best Rate
                </h1>
              </div>
            )}
          </div>
          <hr />
          <div>
            <h1 className="font-sunflower font-medium text-[18px] lg:text-[21px]">
              1 USD = {provider.rate}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-14.5 h-14.5 hidden -mt-3  border absolute bg-white rounded-full border-[#EBEBEB] lg:flex items-center justify-center shadow-black ml-6">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-[#94A3B8] text-[22px]"
        />
      </div>

      <div className="h-32.25 flex items-center md:items-start lg:ml-0 ml-4 -mt-7 md:-mt-1 lg:-mt-5 lg:flex-col lg:gap-2">
        <h1 className="font-inter -mt-3 md:mt-6 lg:mt-0 ml-5 lg:ml-0 text-[14px] lg:text-[14px] font-medium  text-[#94A3B8]">
          Equals
        </h1>
        <div className="w-[36px] h-[36px] lg:w-14.5 lg:h-14.5 lg:hidden -mt-3 md:mt-4 lg:mt-0   border bg-white rounded-full  absolute ml-17 border-[#EBEBEB] flex items-center justify-center shadow-black">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[#94A3B8] text-[22px]"
          />
        </div>
        <div className="w-[180px] h-[65px] -mt-5 md:mt-0 ml-8 lg:-mt-0 lg:ml-0 lg:min-w-94.25 lg:h-20 border flex bg-white items-center justify-around rounded-[14px] border-[#EBEBEB]">
          <div>
            <h1 className="font-sunflower font-bold text-[14px] lg:text-[19px] text-black">
              {toCurrency.symbol}{" "}
              {(amountInput * (provider?.price || 0)).toFixed(2)}
            </h1>
            <h1 className="font-inter font-light text-[14px] lg:text-[20px] lg:-mt-2 text-black">
              {toCurrency.name}
            </h1>
          </div>
          <div>
            <div className="hidden lg:flex justify-end">
              <button
                type="button"
                className="bg-[#3CAE8C] text-white py-3 px-1 justify-center z-50 cursor-pointer w-[111.32px] h-[43.43px] rounded-[6.78px] flex items-center"
              >
                <h1 className="text-white text-[14px] font-bold">
                  Go to Provider
                </h1>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex justify-end">
          <button
            type="button"
            className="bg-[#3CAE8C] text-white py-3 px-2 justify-center z-50 cursor-pointer w-[90px] h-[30px] ml-2 -mt-5 md:mt-4 lg:mt-0 rounded-[6.78px] flex items-center"
          >
            <h1 className="text-white text-[8px] font-bold">Go to Provider</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderRateCard;
