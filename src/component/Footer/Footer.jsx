import Image from "next/image";
import React from "react";
import Footerlogo from "../../assets/images/logo-xl.png";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content  py-20">
      <aside className="container">
        <Image src={Footerlogo} alt="Logo" width={300} height={300} />
        <p className="text-base text-white">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <nav>
          <h4 className="text-white text-[20px] font-medium">Social Links</h4>
          <div className="flex justify-center items-center gap-5 mt-5">
            <div>
              <Image src={Instagram} alt="Instagram" width={50} height={50} />
            </div>
            <div>
              <Image src={Facebook} alt="Facebook" width={50} height={50} />
            </div>
            <div>
              <Image src={Twitter} alt="Twitter" width={50} height={50} />
            </div>
          </div>
        </nav>
        <hr className="container mx-auto opacity-10 my-5 " />
        <div className="flex container justify-between items-center gap-10">
          <p className="text-base text-[#FAFAFA]">
            &copy; {new Date().getFullYear()} keenKeeper - All right reserved
          </p>
          <div className="flex justify-between gap-5">
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
