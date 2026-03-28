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
      amount: 0,
    },
    onSubmit: (values) => {
      // if (!formik.isValid) return;
      setAmountValue(Number(values.amount));
      document.getElementById("userRate")?.scrollIntoView({
        behavior: "smooth",
      });
    },
    validationSchema: yup.object({
      amount: yup
        .number()
        .required("Please enter a number")
        .min(1, "Minimun value is 1"),
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

  const returnHome = () => {
    formik.values.amount = 0;
    setAmountValue(0);
  };

  return (
    <>
      {/* overflow Tap2Compare */}
      <div
        id="hero"
        style={{ overflowX: "clip" }}
        className="relative flex items-center justify-center p-2 md:pt-[25px] md:px-[29px] bg-[#F6FFFC] font-sans max-w-[1600px] mx-auto z-20"
      >
        <main
          style={{ overflowX: "clip" }}
          className="md:h-205 h-175 mt-0 lg:mt-0 lg:h-205.75 rounded-b-[20.96px] lg:rounded-[39px] bg-[#121421] md:px-5 lg:px-20 w-full max-w-[1600px]!"
        >
          <div className="relative">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20 md:mt-10 font-sunflower">
              <div className="flex text-white gap-2">
                <div className="block md:hidden lg:hidden">
                  <Menu
                    className="cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                </div>
                <p
                  onClick={returnHome}
                  className="text-white text-[18px] font-light cursor-pointer"
                >
                  Tap2Compare
                </p>
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
                <div className="absolute left-0 top-15 w-full flex flex-col md:hidden bg-[#121421] h-[200px] text-white justify-center items-center px-6 py-4 gap-4 z-50">
                  <div
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute left-10 top-5 mb-10 hover:bor"
                  >
                    <X size={30} />
                  </div>
                  <h1
                    onClick={() => navDirect("compare")}
                    className="text-white mt-5 text-[18px] font-light cursor-pointer hover:text-[#3CAE8C] transition-colors"
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
              <div className="relative z-30 mt-10 md:mt-32">
                <div className="lg:max-w-[1280px] @container mx-auto px-6 lg:px-10">
                  <h1 className="font-light text-[40px]/[40px] md:text-[60px]/[75px] min[1031px]:text-[75px]/[75px] font-sunflower text-[#F8FAFC] max-w-75 md:max-w-[700px]  min-[1031]:max-w-4xl min-[600px]:text-[60px]/[75px] min-[744px]:text-[60px]/[75px] min-[600px]:max-w-[700px] min-[1024px]:max-[1030px]:text-[20px]/[65px] min-[1000px]:max-[1030px]:max-w-4xl">
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
          <div className="w-full">
            <div className="absolute -ml-30 lg:ml-3.25 mt-8 rounded-[100%] bg-[#3CAE8C]  w-61.25 h-61.25 blur-3xl z-0"></div>
            <div className="max-w-[1280px]  mx-auto px-6 lg:px-10 z-30 relative mt-10 lg:mt-30">
              {/* lg:w-251.25 */}
              <div
                id="compare"
                className=" max-w-full h-76.5 md:max-w-full  lg:max-w-full lg:h-60.5 border-2 lg:border-4 rounded-[16.68px] lg:rounded-4xl   border-[#3CAE8C] flex flex-col pt-5 lg:pt-0 "
              >
                <div className="flex flex-col lg:flex-row  lg:justify-around items-center md:items-start lg:items-center h-full px-5 lg:px-10 lg:gap-5">
                  {/* <div className="flex flex-col bg-purple-600 -ml-12 md:ml-10 lg:ml-0 lg:flex-row lg:gap-18"> */}
                  <div className=" w-full">
                    <label className="text-white">
                      <h1>From</h1>
                    </label>
                    <div className=" w-full">
                      <CurrencySelect
                        value={fromCurrency}
                        options={Currencies}
                        onChange={setFromCurrency}
                      />
                    </div>
                  </div>

                  <div className="lg:-mt-6 z-10 -ml-10 md:mx-auto -mt-3 lg:-ml-10 w-[0px] lg:h-[full] h-[0px]">
                    <button
                      onClick={swapCurrencies}
                      className="border-3 w-11.75 h-11.75 lg:w-13.75 lg:h-13.75 rounded-full flex flex-col justify-center cursor-pointer items-center border-[#EBEBEB] bg-black text-white"
                    >
                      <ArrowLeftRight className="hidden lg:block" size={30} />
                      <ArrowUpDown size={25} className="block lg:hidden" />
                    </button>
                  </div>
                  <div className="lg:ml-5 mt-3 lg:mt-0 w-full">
                    <label className="text-white">
                      <h1>To</h1>
                    </label>
                    <div className="w-full">
                      <CurrencySelect
                        value={toCurrency}
                        options={Currencies}
                        onChange={setToCurrency}
                      />
                    </div>
                  </div>
                  {/* </div> */}

                  <div className="ml-0 md:ml-0 lg:ml-0 w-full">
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
                          ? "w-full min-w-full max-w-full h-[45.21px] md:min-w-full lg:min-w-full  lg:w-full lg:h-19 rounded-[8.17px] bg-red-100  lg:rounded-[15px] border border-[#3CAE8C] px-4 flex items-center justify-between text-black font-sunflower font-bold text-[23px] hover:bg-gray-50 transition-colors"
                          : "w-full min-w-full max-w-full h-[45.21px] md:min-w-full lg:min-w-full lg:w-full lg:h-19 bg-white border border-[#3CAE8C] rounded-[8.17px] lg:rounded-[15px] px-4 flex items-center justify-between text-black font-sunflower font-bold text-[23px] hover:bg-gray-50 transition-colors"
                      }
                    />
                    <div>
                      <small className="text-red-400">
                        {formik.touched.amount ? formik.errors.amount : ""}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mx-auto mt-3 lg:mr-20 mb-8">
                  <button
                    type="submit"
                    onClick={() => formik.handleSubmit()}
                    // onChange={formik.handleChange}
                    className="bg-[#3CAE8C] text-white w-[113.9px] h-[43.96px] lg:w-[137.15px] lg:h-[52.94px] rounded-[100%] z-30 cursor-pointer rotation-[3.04deg] px-2"
                  >
                    <h1 className="text-white text-[13.99px] lg:text-[16.84px] font-light">
                      Compare Rates
                    </h1>
                  </button>
                  <button
                    type="submit"
                    onClick={() => formik.handleSubmit()}
                    // onChange={formik.handleChange}
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
