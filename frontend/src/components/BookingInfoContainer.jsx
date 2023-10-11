import React from "react";
import SessionStatusBox from "./SessionStatusBox";
import YourBookingsDisplayBox from "./YourBookingsDisplayBox";

function BookingInfoContainer({ selectedDate }) {
  return (
    <div className=" border m-2 border-deep-orange-200 lg:mt-20 p-2 mx-8 lg:mx-0 sm:p-2 lg:p-4 flex flex-col gap-2">
      <div className="bg-deep-orange-100">
        <p className="text-xl text-center">Booking Information</p>
      </div>
      <SessionStatusBox selectedDate={selectedDate} />
      <YourBookingsDisplayBox />
    </div>
  );
}

export default BookingInfoContainer;
