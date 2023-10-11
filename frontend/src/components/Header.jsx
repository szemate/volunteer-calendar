import React from "react";
import goodDeedLogo from "./images/good-deed-app-logo.jpg";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="flex flex-row pb-2 pt-6 text-xs sm:px-8 sm:pt-7 sm:text-3xl sm:font-bold sm:tracking-wider">
        <img
          src={goodDeedLogo}
          alt="Good deed app logo"
          className=" ml-6 mt-1 h-11 sm:mx-7 sm:h-20"
        />
        <h1 className=" text-2xl lg:text-4xl font-bold m-3">Good Deeds App</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
