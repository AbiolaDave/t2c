import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const UpperFooter = () => {
  return (
    <>
      {/* ===================== UPPER FOOTER (ORIGINAL – FULLY RESTORED) ===================== */}
      <div className="overflow-hidden h-140 lg:h-235.5 bg-black p-4 -mt-40 font-sans">
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
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-20.25 absolute ml-90 lg:ml-250"
          />
          <Image
            src="/dollar.png"
            alt="Dollar Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-40 lg:mt-70.25 absolute ml-85 lg:ml-300"
          />
          <Image
            src="/yen.png"
            alt="Yen Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-60 lg:mt-110.25 absolute ml-90 lg:ml-280"
          />
          <Image
            src="/pound.png"
            alt="Pound Coin"
            width={100}
            height={100}
            className="w-[40.04px] h-[35.78px] lg:w-23.25 lg:h-21.25 mt-90 lg:mt-160.25 absolute ml-80 lg:ml-240"
          />
        </div>

        <div className="w-166.25 h-82.25 mx-auto mt-40 lg:mt-70 z-30">
          <h1 className="font-sunflower font-medium ml-14 lg:ml-0 text-[40px]/[43.75px] lg:text-[76px]/[77px] text-center text-white max-w-70 lg:max-w-169.25">
            Every Currency Rate In One Place
          </h1>
          <p className="font-inter text-[12px]/[15.05px] lg:text-[19px]/[27px] text-center text-[#8F8F8F] max-w-60 ml-18 lg:ml-0 lg:max-w-127 relative z-50 mx-auto">
            Information overload is a thing of the past. We aggregate the latest
            market data and project updates so you can focus on making informed
            decisions without the clutter.
          </p>
        </div>

        <Image
          src="/vector.png"
          alt="vector"
          width={400}
          height={400}
          className="w-[108.35px] h-[181.02px] lg:w-129.5 lg:h-137.75 lg:-mt-120.5 -mt-100 -ml-4 lg:-ml-6"
        />

        <Image
          src="/vector2.png"
          alt="vector"
          width={400}
          height={400}
          className="w-[108.35px] h-[181.02px] lg:w-129.5 lg:h-137.75 mt-5 lg:-mt-50.5 ml-40 lg:ml-90"
        />

        <Image
          src="/vector.png"
          alt="vector"
          width={400}
          height={400}
          className="w-[108.35px] h-[181.02px] lg:w-129.5 lg:h-137.75 -mt-90 lg:-mt-120.5 ml-80 lg:ml-300"
        />
      </div>

      {/* ===================== LOWER FOOTER (IMPROVED) ===================== */}
      <div className="w-full bg-black">
        <div className="flex justify-between mb-5 px-6 lg:px-0 max-w-7xl ">
          {/* LEFT */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-sunflower text-white text-[13px] lg:text-[30px] font-bold">
                Contact
              </p>
              <p className="text-[#989898] text-[12px] lg:text-[20px]">
                +1 0000 00000 000
              </p>
              <p className="text-[#989898] text-[12px] lg:text-[20px]">
                hello@tap2compare.com
              </p>
              <p className="text-[#989898] text-[12px] lg:text-[20px]">
                sales@tap2compare.com
              </p>
            </div>

            <div>
              <p className="font-sunflower text-white text-[13px] lg:text-[30px] font-bold">
                About Us
              </p>
              <p className="text-[#989898] text-[12px] lg:text-[20px]">
                Company Info
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-6">
            <p className="font-sunflower text-white text-[13px] lg:text-[30px] font-bold">
              Get Update
            </p>

            <div className="flex bg-white rounded-md overflow-hidden">
              <p className="px-5 py-2 text-[#0A142F] text-[13px]">
                Get Rate updates
              </p>
              <div className="bg-[#3CAE8C] px-4 flex items-center text-white">
                <ArrowRight size={22} />
              </div>
            </div>

            <div className="text-white text-[12px]">
              <p>Excellent</p>
              <p className="font-bold">
                4.8 <span className="font-normal">out of 5</span>
              </p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-green-800 w-4.75 h-4.75 flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon={faStar} className="text-[12px]" />
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-1 mt-1 text-[11px]">
                <FontAwesomeIcon icon={faStar} className="text-green-800" />
                Trustpilot
              </p>
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
            <div
              className="border rounded-full flex justify-center items-center 
                        h-7 w-7 sm:h-8.25 sm:w-8.25 border-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="white"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM.24 8h4.5v16H.24V8zM8.25 8h4.31v2.18h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.89V24h-4.5v-7.84c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.14V24h-4.5V8z" />
              </svg>
            </div>

            <div
              className="border rounded-full flex justify-center items-center 
                        h-7 w-7 sm:h-8.25 sm:w-8.25 bg-black border-white overflow-hidden"
            >
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

            <div
              className="border rounded-full flex justify-center items-center 
                        h-7 w-7 sm:h-8.25 sm:w-8.25 border-white"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-[14px] sm:text-[20px] text-white"
              />
            </div>

            <div
              className="border rounded-full flex justify-center items-center 
                        h-7 w-7 sm:h-8.25 sm:w-8.25 border-white"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[14px] sm:text-[20px] text-white"
              />
            </div>
          </div>
          <div className="flex justify-evenly mt-3 gap-20 items-center">
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
    </>
  );
};

export default UpperFooter;
