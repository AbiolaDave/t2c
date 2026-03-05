"use client";

import CurrentMarketRate from "@/components/CurrentMarketRate";
import Main from "@/components/Main";
import Rate from "@/components/Rate";
import Trust from "@/components/Trust";
import { CurrencyOption } from "../types";

const ChangeRateView = ({
  amountValue,
  fromCurrency,
  toCurrency,
}: {
  amountValue: number;
  fromCurrency: CurrencyOption;
  toCurrency: CurrencyOption;
}) => {
  const amount = amountValue > 0 ? amountValue : 0;

  return (
    <>
      {amount > 0 ? (
        <div className="bg-[#F6FFFC]">
          <CurrentMarketRate
            amount={amount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
          <Trust />
        </div>
      ) : (
        <>
          <div className="bg-[#F6FFFC]">
            <Main />
            <Rate />
            <Trust />
          </div>
        </>
      )}
    </>
  );
};

export default ChangeRateView;
