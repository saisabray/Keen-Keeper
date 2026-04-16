import Image from "next/image";
import React from "react";
import Footerlogo from "../../assets/images/logo-xl.png";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content py-10 md:py-20">
      <aside className="container">
        <div className="flex justify-center items-center w-40 h-14 md:w-100 md:h-20 mx-auto">
          <Image src={Footerlogo} alt="Logo" width={300} height={300} />
        </div>
        <p className="text-base text-white px-2 md:px-0">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <nav>
          <h4 className="text-white text-[18px] md:text-[20px] font-medium">Social Links</h4>
          <div className="flex justify-center items-center gap-5 mt-5">
            <div >
              <Image src={Instagram} alt="Instagram" width={50} height={50} />
            </div>
            <div >
              <Image src={Facebook} alt="Facebook" width={50} height={50} />
            </div>
            <div >
              <Image src={Twitter} alt="Twitter" width={50} height={50} />
            </div>
          </div>
        </nav>
        <hr className="container mx-auto opacity-10 my-5 " />
        <div className="flex flex-col-reverse md:flex-row container justify-between items-center gap-3 md:gap-10">
          <p className="text-base text-[#FAFAFA]">
            &copy; {new Date().getFullYear()} keenKeeper - All right reserved
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <p className="text-base text-[#FAFAFA]">Privacy Policy </p>
            <p className="text-base text-[#FAFAFA]">Terms of Service </p>
            <p className="text-base text-[#FAFAFA]">Cookies</p>
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
