import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <h1 className="text-white text-2xl font-semibold">Krypto</h1>
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap mt-4 sm:mt-0 w-full sm:w-auto">
          <Link to="/"><p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">BlockExplorer</p></Link>
          <Link to="/tutorial"><p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">Tutorials</p></Link>
          <Link to="/wallets"><p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">Wallets</p></Link>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-4">
        <p className="text-white text-sm text-center">Come join us and explore the crypto world</p>
        <a href="https://university.alchemy.com/" target="_blank" rel="noopener noreferrer">
          <p className="text-white text-sm text-center font-medium mt-2 hover:underline">Alchemy University</p>
        </a>
      </div>

      <div className="w-full h-[0.25px] bg-gray-400 mt-5" />

      <div className="w-full flex justify-between items-center mt-3 text-white text-xs">
        <p>@2025 Krypto</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
