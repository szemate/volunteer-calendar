import React from "react";
import goodDeedLogo from "./images/good-deed-app-logo.jpg";

function Header() {
  return (
    <div>
      <header className="flex flex-row pb-8 pt-8 text-xs sm:px-8 sm:pt-8 sm:text-4xl sm:font-bold sm:tracking-wider lg:text-6xl">
        <img
          src={goodDeedLogo}
          alt="Good deed app logo"
          className="w-13 ml-6 mt-3 h-9 sm:mx-7 sm:h-16 sm:w-24"
        />
        <h1 className=" text-2xl lg:text-5xl font-bold m-3">
          Good Deeds App
        </h1>
      </header>
    </div>
  );
}

export default Header;
