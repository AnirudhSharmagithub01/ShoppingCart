import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoTelegram,
  BiLogoInstagram,
} from "react-icons/bi";
import logo from "../..//logo.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-screen h-auto bg-richblack-900 text-white ">
      <div className="flex flex-col-1 justify-center items-center mx-auto h-12 gap-[200px] " >
        <div className="text-xl  ">
          <span>Get connect with us on Social networks:</span>
        </div>
        <div className="flex flex-col-1 text-3xl gap-[50px]">
          <a href="https://www.facebook.com">
            <BiLogoFacebook />
          </a>
          <a href="https://www.twitter.com">
            <BiLogoTwitter />
          </a>
          <a href="https://www.telegram.com">
            <BiLogoTelegram />
          </a>
          <a href="https://www.instagram.com">
            <BiLogoInstagram />
          </a>
        </div>
      </div>
      <div>
        <div className=" flex flex-col-1 justify-center items-center py-5 space-x-40 item-center w-full ">
          <div className=" space-y-3">
          <Link to='/'>
          <img src={logo} alt="logo" width={120} height={120} />
          </Link>
            
            <p className="w-[130px] text-[14px] text-richblack-200 opacity-50 ">"No decision should be made on empty shopping bag." </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[20px] font-semibold">Products</h6>
            <p>
              <Link to="/clothes">Clothes</Link>
            </p>
            <p>
              <Link to="/skincare">Skin care</Link>
            </p>
            <p>
              <Link to="/electronics">Electronics</Link>
            </p>
            <p>
              <Link to="/grocery">Grocery</Link>
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[20px] font-semibold">Useful Links</h6>
            <p>
              <Link to="/pricing">Pricing</Link>
            </p>
            <p>
              <Link to="/setting">Setting</Link>
            </p>
            <p>
              <Link to="/order">Orders</Link>
            </p>
            <p>
              <Link to="/help">Help</Link>
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[20px] font-semibold">Contact</h6>
            <p>New York, NY 10011, US</p>
            <p>info@example.com</p>
            <p>+ 01 234 567 88</p>
            <p>+ 01 234 567 89</p>
          </div>
        </div>
        <div>
          <div className="text-center p-4 text-[20px]">
            © 2023 Copyright: 
            <Link to='/' className="text-[18px] px-3">
                LInnk denna hai
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
