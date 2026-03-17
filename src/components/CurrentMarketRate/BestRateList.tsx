"use client";

import { CurrencyOption, RatesProviderType } from "@/utils/types";
import ProviderRateCard from "./ProviderRateCard";

const BestRatesList = ({
  bestRates,
  amountInput,
  toCurrency,
}: {
  bestRates: RatesProviderType[];
  amountInput: number;
  toCurrency: CurrencyOption;
}) => {
  return (
    <div className="mt-10 lg:mt-0">
      {bestRates.map((provider, i) => (
        <ProviderRateCard
          key={provider.id}
          provider={provider}
          index={i}
          amountInput={amountInput}
          toCurrency={toCurrency}
        />
      ))}
    </div>
  );
};

export default BestRatesList;
