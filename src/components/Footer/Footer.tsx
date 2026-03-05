// import UpperFooter from ".";
import UpperFooter from ".";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
      <div className="hidden md:block lg:block bg-blue-500">
        <UpperFooter />
      </div>
      <div className="block md:hidden lg:hidden bg-red-500">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;
