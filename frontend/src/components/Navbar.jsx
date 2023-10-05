import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-row pb-5 text-sm space-x-9 sm:text-xl lg:text-2xl lg:space-x-40">
        <button>About us</button>
        <button>Volunteer with us</button>
        <button>Contact us</button>
      </ul>
    </nav>
  );
}

export default Navbar;
