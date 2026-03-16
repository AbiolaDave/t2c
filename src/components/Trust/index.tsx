import { faSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShieldCheck } from "lucide-react";

const Trust = () => {
  return (
    <>
      <div className="w-full  bg-[#F6FFFC] relative lg:pt-0 overflow-x-hidden pb-20  mx-auto">
        <div className="flex justify-center gap-5 items-center  lg:gap-40 ">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-[35.02px] h-[35.02px] lg:w-15.25 lg:h-15.25 text-[#3CAE8C] rounded-[5.86px] lg:rounded-[14px] border border-[#3CAE8C] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUserGroup}
                className="text-[18px] lg:text-[35px]"
              />
            </div>
            <h1 className="font-sunflower font-bold text-center text-[24px]/[13px] lg:text-[48px]/[24px] text-[#6F6F6F] max-w-22 lg:max-w-27">
              50K+{" "}
              <span className="text-[14px] lg:text-[17px]">Active Users</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-[35.02px] h-[35.02px] lg:w-15.25 lg:h-15.25 text-[#3CAE8C] rounded-[5.86px] lg:rounded-[14px] border border-[#3CAE8C] flex items-center justify-center gap-0.5">
              <FontAwesomeIcon
                icon={faSquare}
                className="text-xs! lg:text-lg!"
              />
              <div className="w-0.5 h-5 bg-[#3CAE8C]"></div>
              <FontAwesomeIcon
                icon={faSquare}
                className="text-xs! lg:text-lg!"
              />
            </div>
            <h1 className="font-sunflower font-bold text-center text-[24px]/[13px] lg:text-[48px]/[24px] text-[#6F6F6F] max-w-29  lg:max-w-36">
              1M+{" "}
              <span className="text-[14px] lg:text-[17px]">
                Comparisons Made
              </span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-[35.02px] h-[35.02px] lg:w-15.25 lg:h-15.25 text-[#3CAE8C] rounded-[5.86px] lg:rounded-[14px] border border-[#3CAE8C] flex items-center justify-center text-[35px]">
              <ShieldCheck
                color="#3CAE8C"
                fill="#3CAE8C"
                className="text-[24px] lg:text-[35px]"
                size="55"
                stroke="white"
                strokeWidth="2"
              />
            </div>
            <h1 className="font-sunflower font-bold text-center text-[23px]/[13px] lg:text-[48px]/[24px] text-[#6F6F6F]  max-w-38 lg:max-w-32">
              100% <br className="block lg:hidden" />
              <span className="text-[14px]  lg:text-[17px]">
                Secure & Private
              </span>
            </h1>
          </div>
          {/* <FontAwesomeIcon icon={faMark} size="lg" /> */}
        </div>
      </div>
    </>
  );
};

export default Trust;
