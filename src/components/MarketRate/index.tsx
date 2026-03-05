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
      className="flex flex-col min-h-screen items-center justify-center overflow-hidden p-4 bg-[#F6FFFC] font-sans -ml-8 lg:ml-0 -mt-20 lg:-mt-5 pt-40 "
    >
      <div className="flex flex-col lg:flex-row lg:gap-10 justify-between items-center w-272.5">
        <div>
          <h1 className="text-[27.24px]/[24.97px] lg:text-[48px]/[44px] font-light font-sunflower max-w-[170px] lg:max-w-69.75 text-[#0F1729]">
            Current Market Rates
          </h1>
          <p className="font-inter font-medium text-[14px] text-[#94A3B8] mt-5">
            Amount to Send
          </p>
          <div className="relative w-70.25 mt-3 h-20">
            {/* Styled display */}
            <div className="pointer-events-none absolute inset-0 flex justify-between items-center px-5">
              <div>
                <span className="font font-light text-[32px] text-[#606060] mr-2">
                  {fromCurrency.symbol}
                </span>
                <span className="font-sunflower font-bold text-[32px] text-black">
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

        <div>
          {bestRates.map((provider, i) => (
            <div
              key={provider.id}
              className="flex flex-col lg:flex-row justify-center mt-10 lg:mt-0 items-center lg:gap-10 gap-0"
            >
              <div
                className={
                  i === 0
                    ? "w-[319px] h-[73px] lg:w-99.75 lg:h-32.25 mb-5 border rounded-[11.35px] lg:rounded-[20px] bg-[#3CAE8C] border-[#3CAE8C] flex justify-center text-white items-center gap-4"
                    : "w-[319px] h-[73px] lg:w-99.75 lg:h-32.25 mb-5 border rounded-[11.35px] lg:rounded-[20px] bg-white border-[#EBEBEB] text-black flex justify-center items-center gap-4"
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

              <div className="h-32.25 flex gap-2 items-center -mt-7 lg:flex-col lg:gap-2">
                <h1 className="font-inter ml-5 lg:ml-0 text-[14px] lg:text-[14px] font-medium text-[#94A3B8]">
                  Equals
                </h1>
                <div className="w-[40px] h-[40px] lg:w-14.5 lg:h-14.5 lg:hidden   border bg-white rounded-full  absolute ml-15 border-[#EBEBEB] flex items-center justify-center shadow-black">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[#94A3B8] text-[22px]"
                  />
                </div>
                <div className="w-[200px] h-[65px]  lg:ml-0 lg:min-w-94.25 lg:h-20 border flex bg-white items-center justify-around rounded-[14px] border-[#EBEBEB]">
                  <div>
                    <h1 className="font-sunflower font-bold text-[14px] lg:text-[19px] text-black">
                      {toCurrency.symbol}
                      {(amountInput * (provider?.price || 0)).toFixed(2)}
                    </h1>
                    <h1 className="font-inter font-light text-[14px] lg:text-[20px] lg:-mt-3 text-black">
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
                    className="bg-[#3CAE8C] text-white py-3 px-2 justify-center z-50 cursor-pointer w-[90px] h-[30px] rounded-[6.78px] flex items-center"
                  >
                    <h1 className="text-white text-[12px] font-bold">
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

      <div className="min-h-screen overflow-hidden mt-20 p-4 ml-12 font-sans">
        <div className="text-start">
          <h1 className="font-sunflower text-[#0F1729] font-light text-[71px]/[67px] max-w-125">
            Trends
          </h1>
        </div>

        <div className="flex gap-10 mt-5">
          <div className="w-187 h-100.5 rounded-[14px] bg-white border border-[#E1E7EF80] p-4">
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
              <div className="w-full mt-10 h-[calc(100%-60px)]">
                <RateChart />
              </div>
            )}
          </div>

          <div className="flex flex-col w-73.25 h-100.5 border bg-red-600 border-[#E1E7EF80] rounded-[15px] gap-2.5 overflow-y-auto justify-start py-5 items-center">
            {RatesProviders.map((provider, i) => (
              <div
                onClick={() => providerClicked(provider, i)}
                key={provider.id}
                className={`flex w-61.5 h-13.25 shrink-0 rounded-[11px] bg-[#E1E7EF33] items-center justify-around gap-2.5 hover:bg-white cursor-pointer ${
                  i === activeIndex
                    ? "border-2 shadow-sm shadow-[#3CAE8C] border-[#3CAE8C]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7.5 h-7.5 rounded-[11px] bg-white shadow-sm flex items-center justify-between">
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
                <div>
                  <h1 className="font-inter font-medium text-[15px] text-[#0F1729]">
                    {provider.rate}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="object-fill">
          <Image
            src="/coinhalf.png"
            alt="coinhalf"
            width={100}
            height={100}
            className="absolute h-75 w-55 ml-240 -mt-10 object-fill z-30"
          />
        </div>
      </div>
      {/* <div className="bg-red-600 w-[900px] mx-auto">
        <Image
          src="/vectormid.png"
          alt="vector"
          width={400}
          height={500}
          className="block md:hidden w-49.75 h-103.75ml-200  absolute  z-0"
        />
      </div> */}
    </div>
  );
};

export default CurrentMarketRate;
