"use client";

import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import TrackRateModal from "../SubscribeModal";

const UpperFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const getUpdate = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getUpdateBtn = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative overflow-hidden h-140 lg:h-235.5 bg-black p-4 font-sans max-w-[1600px] mx-auto">
        <div>
          <Image
            src="/euro.png"
            alt="Euro Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-10 lg:mt-20.25 absolute ml-14 lg:ml-39.25 z-10"
          />
          <Image
            src="/pound.png"
            alt="Pound Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-20 lg:mt-30.25 absolute ml-8 lg:ml-12 z-20"
          />
          <Image
            src="/dollar.png"
            alt="Dollar Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-30 lg:mt-70.25 absolute -ml-4 lg:ml-2 z-30"
          />
          <Image
            src="/naira.png"
            alt="Naira Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-45 lg:mt-90.25 absolute ml-2 lg:ml-39.25 z-40"
          />
        </div>
        <div>
          <Image
            src="/euro.png"
            alt="Euro Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-20.25 absolute ml-90 md:right-50 z-10 xl:ml-320"
          />

          <Image
            src="/dollar.png"
            alt="Dollar Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-40 lg:mt-70.25 absolute ml-85 md:right-20 z-10 xl:ml-330"
          />
          <Image
            src="/yen.png"
            alt="Yen Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-60 lg:mt-110.25 absolute ml-90 md:right-20 z-10 xl:ml-320"
          />
          <Image
            src="/pound.png"
            alt="Pound Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-90 lg:mt-160.25 absolute ml-80 md:right-50 z-10"
          />
        </div>
        <div className="w-full  h-82.25 mx-auto mt-40 lg:mt-70 z-30">
          <div className="mx-auto">
            <h1 className="relative z-10 font-sunflower font-medium  text-[40px]/[43.75px] md:text-[56px]/[57px] mx-auto text-center text-white max-w-70  md:max-w-169.25">
              {" "}
              Every Currency Rate In One Place
            </h1>
            <p className="font-inter font-normal text-[12px]/[15.05px] md:text-[19px]/[27px] text-center text-[#8F8F8F] max-w-60   md:max-w-127 mx-auto relative z-30">
              Information overload is a thing of the past. We aggregate the
              latest market data and project updates so you can focus on making
              informed decisions without the clutter.
            </p>
          </div>
        </div>
        {/* Replace your three vector divs with these */}

        {/* Vector 1 - bottom left */}
        <div className="absolute bottom-50 -left-20 w-[108.35px] h-[181.02px] lg:w-[518px] lg:h-[551px] z-0">
          <Image
            src="/vector.png"
            alt="vector"
            fill
            className="object-contain"
          />
        </div>

        {/* Vector 2 - bottom center */}
        <div className="absolute -bottom-10 left-80 lg:left-140 xl:left-180 w-[108.35px] h-[181.02px] lg:w-[518px] lg:h-[551px] z-0">
          <Image
            src="/vector.png"
            alt="vector"
            fill
            className="object-contain"
          />
        </div>

        {/* Vector 3 - bottom right */}
        <div className="absolute bottom-20 -right-60 w-[108.35px] h-[181.02px] lg:w-[518px] lg:h-[551px] xl:-right-80 z-0">
          <Image
            src="/vector.png"
            alt="vector"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* Lower Footer */}
      <div className=" w-full bg-black h-126.25  lg:h-146.25 mt-0">
        <div className="flex w-full justify-around pl-10 lg:pl-0 gap-8 lg:gap-0 items-center h-116.25">
          <div className="h-56.75 flex flex-col justify-evenly gap-4">
            <p className="font-sunflower font-bold text-[13px] lg:text-[30px] text-white">
              Contact
            </p>
            <h1 className="font-inter font-medium text-[12px] lg:text-[20px] text-[#989898]">
              +1 0000 00000 000
            </h1>
            <h1 className="font-inter font-medium text-[12px] lg:text-[20px] text-[#989898]">
              hello@tap2compare.com
            </h1>
            <h1 className="font-inter font-medium text-[12px] lg:text-[20px] text-[#989898]">
              sales@tap2compare.com
            </h1>
          </div>
          {/*mdi */}
          <div className="h-56.75 flex flex-col  gap-4">
            <p className="font-sunflower font-bold text-[13px] lg:text-[30px] text-white">
              About Us
            </p>
            <h1 className="font-inter font-medium text-[12px] lg:text-[20px] text-[#989898]">
              Company Info
            </h1>
          </div>

          {/*end*/}
          <div className="h-56.75 px-3 flex flex-col items-end gap-4">
            <p className="font-sunflower font-bold text-[13px] lg:text-[30px] text-white">
              Get Updates
            </p>
            <div
              onClick={getUpdateBtn}
              className="w-[156.45px] h-[31.54px] lg:w-62 lg:h-12.5 mt-7 flex justify-between items-center rounded-md bg-white  cursor-pointer"
            >
              <p className="font-sunflower font-medium text-[13px] ml-5 lg:text-[14px] text-[#0A142F]">
                Get Updates
              </p>
              <div className="w-8  lg:w-11.75 lg:h-11.75 bg-[#3CAE8C] rounded-r-md float-end flex text-white items-center justify-center">
                <ArrowRight size={30} />
              </div>
            </div>
            <div className="w-58.75 h-21.75 overflow-hidden flex flex-col lg:flex-row gap-2  items-center">
              <div className="flex gap-2 -ml-12 lg:ml-0">
                <h1 className="font-roboto text-[12px] mt-5 text-white">
                  Excellent
                </h1>
                <div>
                  <p className="font-roboto text-white font-bold text-[12px]">
                    4.8 <span className="font-normal">out of 5</span>
                  </p>
                  <div className="flex gap-1 ">
                    <div className="w-4.75 h-4.75 flex items-center justify-center bg-green-800 text-white">
                      <FontAwesomeIcon icon={faStar} className="text-[12px]" />
                    </div>
                    <div className="w-4.75 h-4.75 flex items-center justify-center bg-green-800 text-white">
                      <FontAwesomeIcon icon={faStar} className="text-[12px]" />
                    </div>
                    <div className="w-4.75 h-4.75 flex items-center justify-center bg-green-800 text-white">
                      <FontAwesomeIcon icon={faStar} className="text-[12px]" />
                    </div>
                    <div className="w-4.75 h-4.75 flex items-center justify-center bg-green-800 text-white">
                      <FontAwesomeIcon icon={faStar} className="text-[12px]" />
                    </div>
                    <div className="w-4.75 h-4.75 flex items-center justify-center bg-green-800 text-white">
                      <FontAwesomeIcon icon={faStar} className="text-[12px]" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <br /> */}
              <h1 className="font-roboto text-[11px] lg:mt-5  text-white flex items-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[12px] text-green-800"
                />
                Trustpilot
              </h1>
            </div>
          </div>
        </div>
        <hr className="h-[0.95px] w-254.75 mx-auto " />
        <div className="justify-around hidden lg:flex items-center mt-10 mb-10">
          <div className="flex gap-5">
            <div className="border text-center rounded-full flex justify-center items-center h-8.25 w-8.25 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="white"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM.24 8h4.5v16H.24V8zM8.25 8h4.31v2.18h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.89V24h-4.5v-7.84c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.14V24h-4.5V8z" />
              </svg>
            </div>
            <div className="border text-center rounded-full flex justify-center items-center h-8.25 w-8.25 bg-black border-white overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="20"
                height="20"
                className="text-[20px]"
              >
                <circle cx="160" cy="256" r="160" fill="black" />
                <path
                  fill="white"
                  d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.09 44.38-121.09 124.72v70.62H22.89V288h81.38v224h100.2V288z"
                />
              </svg>
            </div>
            <div className="border text-center rounded-full flex justify-center items-center h-8.25 w-8.25 border-white">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-[20px] text-white"
              />
            </div>
            <div className="border text-center rounded-full flex justify-center items-center h-8.25 w-8.25 border-white">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[20px] text-white"
              />
            </div>
          </div>

          <div>
            <h1 className="text-white text-[12px] mt-2">
              © 2026 Tap2Compare. All rights reserved.
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:hidden md:hidden justify-evenly items-center mt-5 mb-10">
          <div className="flex gap-5">
            <div className="border rounded-full flex justify-center items-center h-7 w-7 sm:h-8.25 sm:w-8.25 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="white"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM.24 8h4.5v16H.24V8zM8.25 8h4.31v2.18h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.89V24h-4.5v-7.84c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.14V24h-4.5V8z" />
              </svg>
            </div>

            <div className="border rounded-full flex justify-center items-center h-7 w-7 sm:h-8.25 sm:w-8.25 bg-black border-white overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <circle cx="160" cy="256" r="160" fill="black" />
                <path
                  fill="white"
                  d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.09 44.38-121.09 124.72v70.62H22.89V288h81.38v224h100.2V288z"
                />
              </svg>
            </div>

            <div className="border rounded-full flex justify-center items-center h-7 w-7 sm:h-8.25 sm:w-8.25 border-white">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-[14px] sm:text-[20px] text-white"
              />
            </div>

            <div className="border rounded-full flex justify-center items-center h-7 w-7 sm:h-8.25 sm:w-8.25 border-white">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[14px] sm:text-[20px] text-white"
              />
            </div>
          </div>
          <div className="flex justify-evenly gap-20 items-center">
            <div>
              <h1 className="text-white text-[10px]">
                A product of Tap2Compare
              </h1>
            </div>
            <div>
              <h1 className="text-white text-[10px]">
                © 2026 Tap2Compare. All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <TrackRateModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default UpperFooter;
