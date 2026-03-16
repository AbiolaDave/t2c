// import UpperFooter from ".";
import UpperFooter from ".";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
      <div className="hidden md:block lg:block max-w-[1600px] mx-auto">
        <UpperFooter />
      </div>
      <div className="block md:hidden lg:hidden max-w-[1600px] mx-auto">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;
