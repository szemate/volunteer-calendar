import React from "react";
import VolunteerDropDownBest from "./VolunteerDropDownBest";

function YourBookingsDisplayBox() {
  return (
    <div className="p-3 mt-4 lg:mt-4 lg:p-4 sm:p-4 bg-deep-orange-200">
      <p>See your upcoming booked session(s):</p>
      <VolunteerDropDownBest />
    </div>
  );
}

export default YourBookingsDisplayBox;
