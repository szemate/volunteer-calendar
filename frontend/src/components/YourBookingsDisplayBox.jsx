import React from "react";
import VolunteerDropDownBest from "./VolunteerDropDownBest";

function YourBookingsDisplayBox({
  sessions,
  setSessions,
  selectedVolunteer,
  setSelectedVolunteer,
}) {
  return (
    <div className="p-3 sm:p-4 lg:p-4  bg-gradient-to-br from-deep-orange-50 to-deep-orange-200">
      <p>See your upcoming booked session(s):</p>
      <VolunteerDropDownBest
        selectedVolunteer={selectedVolunteer}
        setSelectedVolunteer={setSelectedVolunteer}
      />
    </div>
  );
}

export default YourBookingsDisplayBox;
