import React from "react";

function Navbar() {
  return (
    <nav >
      <ul className="flex flex-row my-3 text-sm space-x-9 sm:space-x-20 lg:my-5 sm:text-xl lg:text-2xl lg:space-x-40">
        <button>About us</button>
        <button>Volunteer with us</button>
        <button>Contact us</button>
      </ul>
    </nav>
  );
}

export default Navbar;
