// import UpperFooter from ".";
import UpperFooter from ".";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
      <div className="hidden md:block lg:block">
        <UpperFooter />
      </div>
      <div className="block md:hidden lg:hidden ">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;
