import { React, useState } from "react";
import SessionStatusBox from "./SessionStatusBox";
import YourBookingsDisplayBox from "./YourBookingsDisplayBox";

function BookingInfoContainer({ selectedDate, sessions, setSessions }) {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  return (
    <div className=" border m-2 border-deep-orange-200 lg:mt-20 p-2 mx-8 lg:mx-0 sm:p-2 lg:p-4 flex flex-col gap-2">
      <div className="bg-gradient-to-tl from-deep-orange-100 to-deep-orange-200">
        <p className="text-xl text-center">Booking Information</p>
      </div>
      <SessionStatusBox
        selectedDate={selectedDate}
        sessions={sessions}
        setSessions={setSessions}
        selectedVolunteer={selectedVolunteer}
        setSelectedVolunteer={setSelectedVolunteer}
      />
      <YourBookingsDisplayBox
        sessions={sessions}
        setSessions={setSessions}
        selectedVolunteer={selectedVolunteer}
        setSelectedVolunteer={setSelectedVolunteer}
      />
    </div>
  );
}

export default BookingInfoContainer;
