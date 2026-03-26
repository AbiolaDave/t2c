"use client";

import { RatesProviders } from "@/utils/rates/rates";
import { CurrencyOption, RatesProviderType } from "@/utils/types";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import AmountInput from "./AmountInput";
import BestRatesList from "./BestRateList";
import TrendsSection from "./TrendSection";

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

  return (
    <div
      id="main"
      className=" flex flex-col items-center justify-center overflow-x-hidden bg-[#F6FFFC] font-sans -mt-30 lg:-mt-5 z-50 pb-30 pt-40 w-full"
    >
      <div className="flex flex-col md:flex-row md:gap-3 lg:gap-10 justify-between items-center w-full lg:justify-center 2xl:justify-around px-4 py-4">
        <AmountInput
          amount={amount}
          amountInput={amountInput}
          fromCurrency={fromCurrency}
          handleAmountChange={handleAmountChange}
        />

        <BestRatesList
          bestRates={bestRates}
          amountInput={amountInput}
          toCurrency={toCurrency}
        />
      </div>

      <div className="hidden lg:block">
        <Image
          src="/vectormid.png"
          alt="vector"
          width={400}
          height={500}
          className="w-49.75 h-103.75 absolute -ml-40 lg:-ml-180.5 -mt-28.5 z-0"
        />
      </div>

      <TrendsSection
        rateProvider={rateProvider}
        chartReady={chartReady}
        providers={RatesProviders}
        activeIndex={activeIndex}
        onProviderClick={providerClicked}
      />
    </div>
  );
};

export default CurrentMarketRate;
