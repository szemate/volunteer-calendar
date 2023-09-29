import React, { useState } from "react";
import { generateDate, months } from "../utils/generateDate";
import dayjs from "dayjs";
import conditions from "../utils/conditions";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Calendar() {
  const firstDateOfMonth = dayjs().year(2023).month(9).startOf("month");
  console.log("first day of month", firstDateOfMonth);

  console.log(generateDate());

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  //   const days = [
  //     "Saturday",
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //   ];

  return (
    <div className="flex flex-col sm:flex-row w-1/2 sm:mx-auto  sm:mt-5 sm:divide-x-2 sm:gap-10 h-screen items-start">
      <div className="w-96 h-96 ">
        <div className="flex justify-between px-3 ">
          <h1 className="font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <GrFormPrevious className="w-5 h-5 cursor-pointer" />
            <h1 className="cursor-pointer">Today</h1>
            <GrFormNext className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <div className="w-full grid grid-cols-7 text-gray-700">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="h-14 grid place-content-center text-sm"
              >
                {day}
              </h1>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7">
          {generateDate().map(({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="h-14 border grid place-content-center text-sm"
              >
                <h1
                  className={conditions(
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-red-600 text-white" : "",
                    "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                  )}
                >
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-96 w-96 px-4 mt-8 sm:px-5">
        <h1 className="font-bold">Sessions Status for 29th Sep 2023</h1>
        <p>Morning Session: Booked by someone</p>
        <p>Evening Session: You've booked it</p>
      </div>
    </div>
  );
}

export default Calendar;
