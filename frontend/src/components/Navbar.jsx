import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-row pb-8 text-sm space-x-9 sm:text-xl lg:text-3xl lg:space-x-40">
        <li>About us</li>
        <li>Volunteer with us</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
