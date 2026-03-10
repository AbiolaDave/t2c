"use client";

import { useFormik } from "formik";
// import { useRouter } from "next/router";
import ChangeRateView from "@/utils/ChangeRateView/ChangeRateView";
import { Currencies } from "@/utils/rates/rates";
import { CurrencyOption } from "@/utils/types";
import { ArrowLeftRight, ArrowUpDown, Menu, X } from "lucide-react";
import { useState } from "react";
import * as yup from "yup";
import { CurrencySelect } from "../Currencies/Currencies";
import TrackRateModal from "../SubscribeModal";

const Hero1 = () => {
  const [fromCurrency, setFromCurrency] = useState<CurrencyOption>(
    Currencies[0],
  );
  const [toCurrency, setToCurrency] = useState<CurrencyOption>(Currencies[1]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const [amountValue, setAmountValue] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getUpdate = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values) => {
      // if (!formik.isValid) return;
      setAmountValue(Number(values.amount));
      document.getElementById("userRate")?.scrollIntoView({
        behavior: "smooth",
      });
    },
    validationSchema: yup.object({
      amount: yup.number(),
    }),
  });
  const navDirect = (params: string) => {
    if (params == "compare") {
      document.getElementById("compare")?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (params == "providers") {
      document.getElementById("main")?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (params == "trends") {
      document.getElementById("rate")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        id="hero"
        className="flex items-center justify-center overflow-hidden p-2 md:p-4 bg-[#F6FFFC] font-sans "
      >
        <main className="h-205 md:h-205 h-175 mt-0  lg:mt-0 lg:h-205.75 w-full rounded-b-[20.96px] lg:rounded-[39px] bg-[#121421] overflow-hidden md:px-5 lg:px-20">
          <div className="relative">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20 mt-10 font-sunflower">
              <div className="flex text-white gap-2">
                <div className="block md:hidden lg:hidden">
                  <Menu
                    className="cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                </div>
                <p className="text-white text-[18px] font-light">Tap2Compare</p>
              </div>
              <div className="hidden md:flex lg:flex justify-evenly items-center lg:gap-10 md:gap-5">
                <h1
                  onClick={() => navDirect("compare")}
                  className="text-white text-[18px] font-light"
                >
                  Compare Exchange Rates
                </h1>
                <h1
                  onClick={() => navDirect("providers")}
                  className="text-white text-[18px] font-light"
                >
                  Providers
                </h1>
                <h1
                  onClick={() => navDirect("trends")}
                  className="text-white text-[18px] font-light"
                >
                  Trends
                </h1>
              </div>
              <div className="">
                <button
                  className="bg-[#1F202C] text-white py-3 px-3 rounded-[100%] border border-[#59608A] cursor-pointer"
                  onClick={getUpdate}
                >
                  <h1 className="text-white text-[18px] font-light">
                    Get Updates
                  </h1>
                </button>
              </div>
              {isMenuOpen && (
                <div className="absolute left-0 top-15 w-full flex flex-col md:hidden bg-[#121421] h-[200px] justify-center items-center px-6 py-4 gap-4 z-50">
                  <div
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute left-10 top-5 mb-5"
                  >
                    <X />
                  </div>
                  <h1
                    onClick={() => navDirect("compare")}
                    className="text-white text-[18px] font-light cursor-pointer hover:text-[#3CAE8C] transition-colors"
                  >
                    Compare Exchange Rates
                  </h1>
                  <h1
                    onClick={() => navDirect("providers")}
                    className="text-white text-[18px] font-light cursor-pointer hover:text-[#3CAE8C] transition-colors"
                  >
                    Providers
                  </h1>
                  <h1
                    onClick={() => navDirect("trends")}
                    className="text-white text-[18px] font-light cursor-pointer hover:text-[#3CAE8C] transition-colors"
                  >
                    Trends
                  </h1>
                </div>
              )}
            </div>
            {/* Text + Glass Morphism */}
            <div className="w-full relative">
              <div className="absolute -left-30">
                <div className="rounded-[100%] border bg-[#3CAE8C] w-61.25 h-61.25 blur-3xl"></div>
              </div>
              {/* Text */}
              <div className="relative z-30 mt-32">
                <div className="lg:max-w-[1280px] mx-auto px-6 lg:px-10">
                  <h1 className="font-light text-[40px]/[40px] md:text-[65px]/[75px] lg:text-[75px]/[75px] font-sunflower  text-[#F8FAFC] max-w-75 md:max-w-[700px] lg:max-w-4xl">
                    Compare Exchange Rates{" "}
                    <span className="text-[#D9D9D9]">Across Platforms</span>
                  </h1>
                  <h1 className="font-normal text-[12px]/[13.47px] max-w-56.25 md:max-w-150 mt-5 md:mt-0 md:text-[16px] lg:text-[20px] font-inter text-[#94A3B8]">
                    Find the best exchange rates. Save money on every transfer.
                  </h1>
                </div>
              </div>
              {/* Glass Morphism 2*/}
              <div className="absolute right-0 top-0">
                <div className="rounded-[100%] hidden lg:block border bg-[#3CAE8C] w-61.25 h-61.25 blur-3xl"></div>
              </div>
            </div>
          </div>
          {/* Inputs Border */}
          <div className="relative isolate">
            <div className="absolute -ml-30 lg:ml-3.25 mt-8 rounded-[100%] bg-[#3CAE8C]  w-61.25 h-61.25 blur-3xl z-0"></div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 z-30 relative mt-10 lg:mt-30">
              <div
                id="compare"
                className=" max-w-89.75 h-76.5 md:max-w-full lg:w-251.25 lg:max-w-full lg:h-60.5 border-2 lg:border-4 rounded-[16.68px] lg:rounded-4xl   border-[#3CAE8C] flex flex-col pt-5 lg:pt-0 "
              >
                <div className="flex flex-col lg:flex-row justify-start lg:justify-around items-center md:items-start lg:items-center h-full">
                  <div className="flex flex-col -ml-12 md:ml-10 lg:ml-0 lg:flex-row lg:gap-18">
                    <div>
                      <label className="text-white">
                        <h1>From</h1>
                      </label>
                      <CurrencySelect
                        value={fromCurrency}
                        options={Currencies}
                        onChange={setFromCurrency}
                      />
                    </div>
                    <button
                      onClick={swapCurrencies}
                      className="border-3 w-11.75 h-11.75 lg:w-13.75 lg:h-13.75 rounded-full flex flex-col justify-center cursor-pointer items-center border-[#EBEBEB] bg-black text-white absolute ml-32 lg:mt-9 mt-14 md:ml-68 z-3"
                    >
                      <ArrowLeftRight className="hidden lg:block" size={30} />
                      <ArrowUpDown size={25} className="block lg:hidden" />
                    </button>
                    <div>
                      <label className="text-white">
                        <h1>To</h1>
                      </label>
                      <CurrencySelect
                        value={toCurrency}
                        options={Currencies}
                        onChange={setToCurrency}
                      />
                    </div>
                  </div>

                  <div className="ml-0 md:ml-10 lg:ml-0">
                    <label className="text-white" htmlFor="">
                      <h1>Amount</h1>
                    </label>
                    <input
                      value={formik.values.amount}
                      onChange={formik.handleChange}
                      name="amount"
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.amount && formik.touched.amount
                          ? "w-[283.32px] max-w-[293.32px] h-[45.21px] md:min-w-[620px] lg:min-w-[297.13px]  lg:w-[297.13px] lg:h-19 rounded-[8.17px] bg-red-100  lg:rounded-[15px] border border-[#3CAE8C] px-4 flex items-center justify-between text-black font-sunflower font-bold text-[23px] hover:bg-gray-50 transition-colors"
                          : "w-[283.32px] max-w-[293.32px] h-[45.21px] md:min-w-[620px] lg:min-w-[297.13px] lg:w-[297.13px] lg:h-19 bg-white border border-[#3CAE8C] rounded-[8.17px] lg:rounded-[15px] px-4 flex items-center justify-between text-black font-sunflower font-bold text-[23px] hover:bg-gray-50 transition-colors"
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-end mx-auto mt-3 lg:mr-20 mb-8">
                  <button
                    type="submit"
                    onClick={() => formik.handleSubmit()}
                    className="bg-[#3CAE8C] text-white w-[113.9px] h-[43.96px] lg:w-[137.15px] lg:h-[52.94px] rounded-[100%] z-30 cursor-pointer rotation-[3.04deg] px-2"
                  >
                    <h1 className="text-white text-[13.99px] lg:text-[16.84px] font-light">
                      Compare Rates
                    </h1>
                  </button>
                  <button
                    type="submit"
                    onClick={() => formik.handleSubmit()}
                    className="border border-r-[#000000] border-t-[#000000] border-b-[#666666] border-l-[#666666] text-white w-[113.9px] h-[43.96px] lg:w-[137.15px] lg:h-[52.94px] rounded-[100%] z-0 absolute rotate-[-10.49deg]"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="userRate">
        <ChangeRateView
          amountValue={amountValue}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
        />
      </div>

      <TrackRateModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Hero1;
