import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-wrap justify-between items-center al">
      <div className="flex items-center mb-4 sm:mb-0">
        <img src={logo} alt="USA Sports Logo" className="h-8 mr-3" />
        <span>USA Sports</span>
      </div>
      <div className="copy-right mb-4 sm:mb-0">
        <span>&nbsp;&nbsp;© 2023 USA Sports. All Rights Reserved.</span>
      </div>
      <div className="flex">
        <a href="https://instagram.com" className="text-white mx-2">
          <FaInstagram size="24" />
        </a>
        <a href="https://whatsapp.com" className="text-white mx-2">
          <FaWhatsapp size="24" />
        </a>
        <a href="https://facebook.com" className="text-white mx-2">
          <FaFacebookF size="24" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;