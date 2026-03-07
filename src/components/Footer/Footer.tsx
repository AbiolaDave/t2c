// import UpperFooter from ".";
import UpperFooter from ".";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
      <div className="hidden md:hidden lg:block">
        <UpperFooter />
      </div>
      <div className="block md:block lg:hidden ">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;
