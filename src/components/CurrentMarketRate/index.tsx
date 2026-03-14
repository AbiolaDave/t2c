"use client";

// CustomTooltip

import { RatesProviders } from "@/utils/rates/rates";
import { CurrencyOption, RatesProviderType } from "@/utils/types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import RateChart from "../Rate/RateCharts";

const CurrentMarketRate = ({
  amount,
  fromCurrency,
  toCurrency,
}: {
  amount: number;
  fromCurrency: CurrencyOption;
  toCurrency: CurrencyOption;
}) => {
  const [rateProvider, setRateProvider] = useState(RatesProviders[0]);
  const [amountInput, setAmountInput] = useState<number>(amount);
  const [activeIndex, setActiveIndex] = useState(0);
  const [chartReady, setChartReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setChartReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Memoize best rates to avoid recalculating on every render
  const bestRates = useMemo(() => {
    return [...RatesProviders].sort((a, b) => b.price - a.price).slice(0, 3);
  }, []);

  useEffect(() => {
    setAmountInput(amount);
  }, [amount]);
  // Memoize callback to prevent unnecessary re-renders
  const providerClicked = useCallback(
    (provider: RatesProviderType, i: number) => {
      setRateProvider(provider);
      setActiveIndex(i);
    },
    [],
  );

  // Handle input change
  const handleAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmountInput(Number(e.target.value) || 0);
    },
    [],
  );

  // Don't render until mounted to avoid hydration issues
  // if (!mounted) {
  //   return null;
  // }

  return (
    <div
      id="main"
      className="flex flex-col lg:min-h-screen items-center justify-center overflow-hidden! p-4 bg-[#F6FFFC] font-sans -ml-8 md:ml-0  lg:ml-0 -mt-30 lg:-mt-5 pt-40"
    >
      <div className="flex flex-col md:flex-row md:gap-3 lg:gap-10 justify-between items-center w-272.5 md:w-160 lg:w-272.5">
        <div className="md:ml-0 -ml-20">
          <h1 className="text-[27.24px]/[24.97px] lg:text-[48px]/[44px] font-light font-sunflower max-w-[170px] lg:max-w-69.75 text-[#0F1729]">
            Current Market Rates
          </h1>
          <p className="font-inter font-medium text-[14px] text-[#94A3B8] mt-5">
            Amount to Send
          </p>
          <div className="relative w-60 md:w-70.25 mt-3 h-15 md:h-20">
            {/* Styled display */}
            <div className="pointer-events-none absolute inset-0 flex justify-between items-center px-5">
              <div>
                <span className="font font-light text-[20px] md:text-[32px] text-[#606060] mr-2">
                  {fromCurrency.symbol}
                </span>
                <span className="font-sunflower font-bold text-[20px] md:text-[32px] text-black">
                  {amount}
                </span>
              </div>
              <div className="w-20.25 h-7.5 rounded-[5px] text-black px-1.25 py-1.25 bg-[#EBEBEB] truncate">
                {fromCurrency.name}
              </div>
            </div>

            {/* Real input */}
            <input
              type="number"
              value={amountInput}
              onChange={handleAmountChange}
              className="w-full h-full bg-white rounded-[14px] border-[1.2px] border-[#EBEBEB] px-5 text-transparent caret-black focus:outline-none"
              aria-label="Amount to send"
            />
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          {bestRates.map((provider, i) => (
            <div
              key={provider.id}
              className="flex flex-col lg:flex-row justify-center lg:mt-0 items-center lg:gap-10 "
            >
              <div
                className={
                  i === 0
                    ? "w-[350px] ml-8 lg:ml-0 h-[73px] lg:w-99.75 lg:h-32.25 mb-5 border rounded-[11.35px] lg:rounded-[20px] bg-[#3CAE8C] border-[#3CAE8C] flex justify-center text-white items-center gap-4"
                    : "w-[350px] ml-8 -mt-5 md:-mt-10 lg:mt-0 lg:ml-0 h-[73px] lg:w-99.75 lg:h-32.25 mb-5 border rounded-[11.35px] lg:rounded-[20px] bg-[#EDF8F5] border-[#EBEBEB] text-black flex justify-center items-center gap-4"
                }
              >
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={100}
                  height={100}
                  className="w-[40.86px] h-[40.86px] lg:w-18 lg:h-18 lg:ml-4 lg:mt-4"
                />
                <div>
                  <div className="flex items-center">
                    <div>
                      <h1 className="font-sunflower font-bold text-[14px] lg:text-[19px]">
                        {provider.name}
                      </h1>
                      <h1 className="font-inter text-[12px] -mt-2">
                        Updated 12:52 PM
                      </h1>
                    </div>
                    {i === 0 && <hr className="w-6.75 rotate-90" />}
                    {i === 0 && (
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
                    <h1 className="text-white text-[8px] font-bold">
                      Go to Provider
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Image
          src="/vectormid.png"
          alt="vector"
          width={400}
          height={500}
          className="w-49.75 h-103.75 absolute -ml-180.5 -mt-28.5 z-0"
        />
      </div>

      <div className="min-h-screen w-screen lg:w-full overflow-hidden mt-10 lg:mt-20 p-4  ml-8 md:ml-12 font-sans lg:ml-50">
        <div className="">
          <h1 className="font-sunflower text-[#0F1729] font-light text-[40px]/[38.16px]  lg:text-[71px]/[67px] max-w-125">
            Trends
          </h1>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-3 lg:gap-10 mt-10 2xl:max-w-full 2xl:gap-50">
          <div className="md:w-120 lg:w-187 md:h-100.5 rounded-[14px] bg-white border border-[#E1E7EF80] p-4 relative z-30">
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
            {/* Only render chart when container is ready */}
            {chartReady && (
              <div className="w-full mt-10 md:mt-0 h-85">
                <RateChart />
              </div>
            )}
          </div>

          <div className="md:w-60 lg:w-73.25 md:h-100.5 border border-[#E1E7EF80] rounded-[8.6px] lg:rounded-[15px] bg-white flex flex-col overflow-y-auto px-5  py-5 gap-2.5">
            <h1 className="lg:text-[18px] sticky left-5 text-[#0F1729] font-sunflower font-bold text-[20px]">
              All Providers
            </h1>
            <div className="flex flex-row md:flex-col gap-2.5  items-center">
              {RatesProviders.map((provider, i) => (
                <div
                  onClick={() => providerClicked(provider, i)}
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
        </div>
        <div className="overflow-hidden! w-full">
          <Image
            src="/coinhalf.png"
            alt="coinhalf"
            width={400}
            height={400}
            className="absolute w-32.25 h-25.75  -right-10 lg:h-75 -mt-5 lg:w-55  lg:-mt-10 object-fill z-30"
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/vectormid.png"
            alt="vector"
            width={400}
            height={500}
            className="w-29.75 h-73.75 -mt-30  absolute  z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentMarketRate;
