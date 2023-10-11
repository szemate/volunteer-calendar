import React from "react";
import SessionStatusBox from "./SessionStatusBox";
import YourBookingsDisplayBox from "./YourBookingsDisplayBox";

function BookingInfoContainer({ selectedDate }) {
  return (
    <div className=" border m-2 border-deep-orange-200 mt-12 p-2 lg:mt-20 mx-8 lg:mx-0 sm:p-2 lg:p-4">
      <SessionStatusBox selectedDate={selectedDate} />
      <YourBookingsDisplayBox />
    </div>
  );
}

export default BookingInfoContainer;
