"use client";

import { CurrencyOption } from "@/utils/types";

const AmountInput = ({
  amount,
  amountInput,
  fromCurrency,
  handleAmountChange,
}: {
  amount: number;
  amountInput: number;
  fromCurrency: CurrencyOption;
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
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
  );
};

export default AmountInput;
