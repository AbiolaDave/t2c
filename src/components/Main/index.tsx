import { RatesProviders } from "@/utils/rates/rates";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <div
        id="main"
        className="relative flex flex-col items-center justify-center  bg-[#F6FFFC] font-sans lg:mt-0 lg:pt-20 mx-auto w-full"
      >
        <div className="flex justify-around items-center w-full max-w-7xl mx-auto px-4">
          <div className=" w-49.5 h-[182.41px] lg:w-77.5 lg:h-77.5">
            <Image
              className="w-full h-full object-contain"
              src="/abc.png"
              alt="coin"
              width={410}
              height={410}
            />
          </div>
          <div className="text-right mr-5 md:mr-0 flex flex-col justify-end">
            <h1 className="font-sunflower text-[#3CAE8C] font-light text-[40px]/[40.4px] lg:text-[71px]/[71px] max-w-834 md:max-w-80 lg:max-w-134">
              Compare Market{" "}
              <span className="text-[#6F6F6F]">Rates Instantly</span>
            </h1>
            <h1 className="lg:max-w-104.75 max-w-65 ml-20 md:ml-15 lg:ml-30 text-[#6F6F6F] font-inter font-normal text-[12px]/[13.47px] lg:text-[19px]/[24px] ">
              No amount needed, see the market rates from trusted providers at a
              glance
            </h1>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <Image
            src="/vectormid.png"
            alt="vector"
            width={400}
            height={500}
            className="w-49.75 h-103.75 xl:w-89 absolute left-0 mt-12.5 z-0"
          />
        </div>
        <div className="w-full max-w-7xl mx-auto px-5 md:px-20 lg:px-10 mt-5 lg:mt-0 flex flex-col gap-2.5">
          <div className="overflow-hidden w-full">
            <div className="flex  gap-2.5 marquee-reverse">
              {[...RatesProviders, ...RatesProviders].map((provider, i) => (
                <div
                  className="px-5  h-[48.58px] rounded-[7.53px] lg:h-23.5 shrink-0 lg:rounded-[15px] flex justify-center items-center gap-2 border border-[#6F6F6F1C] bg-white relative z-30"
                  key={i}
                >
                  <div className="w-[42.18px] h-[42.18px] lg:w-13.5 lg:h-13.5 rounded-full overflow-hidden">
                    <Image
                      className="w-[42.18px] h-[42.18px] lg:w-13.5 lg:h-13.5 rounded"
                      src={provider.logo}
                      alt={provider.name}
                      width={100}
                      height={100}
                    />
                  </div>

                  <h1 className="font-sunflower font-bold text-[12.05px] lg:text-2xl text-[#6F6F6F]">
                    {provider.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2.5">
            <div className="overflow-hidden w-full">
              <div className="flex gap-2.5 animate-marquee">
                {[...RatesProviders, ...RatesProviders]
                  .slice()
                  .reverse()
                  .map((provider, i) => (
                    <div
                      key={i}
                      className="px-5 h-[48.58px] rounded-[7.53px] lg:h-23.5 shrink-0 lg:rounded-[15px] flex justify-center items-center gap-2 border border-[#6F6F6F1C] bg-white relative z-30"
                    >
                      <div className="w-[42.18px] h-[42.18px] lg:w-13.5 lg:h-13.5 rounded-full overflow-hidden">
                        <Image
                          className="w-[42.18px] h-[42.18px] lg:w-13.5 lg:h-13.5 rounded"
                          src={provider.logo}
                          alt={provider.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <h1 className="font-sunflower font-bold text-[12.05px] lg:text-2xl text-[#6F6F6F]">
                        {provider.name}
                      </h1>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
