import React, { useState, useEffect } from "react";
import {
  generateDateForWeeklyCal,
  months,
} from "../utils/generateDateForWeeklyCal";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import WeeklyDateBox from "./WeeklyDateBox";
import BookingInfoContainer from "./BookingInfoContainer";
import { baseUrl } from "../config";

function WeeklyCalendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs().startOf("day");
  const [startDate, setStartDate] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [sessions, setSessions] = useState([]);
  const endDate = startDate.add(4, "week");

  useEffect(() => {
    fetch(`${baseUrl}/sessions`)
      .then((response) => response.json())
      .then((data) => {
        setSessions(data);
      });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row sm:mx-auto sm:mt-5 sm:gap-1 grow items-center lg:items-start lg:m-4 lg:p-2">
      <div className="w-full py-2 lg:p-6  bg-blue-gray-50">
        <div className=" flex flex-row justify-between">
          {/* displaying the months and year */}
          <div className="flex px-6 font-semibold lg:text-xl">
            <div>
              <div>
                {months[startDate.month()]} {startDate.year()} /{" "}
                {months[endDate.month()]} {endDate.year()}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {/* Button showing previous month */}
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => setStartDate(startDate.subtract(4, "week"))}
            />
            {/* button taking us to today */}
            <p
              className="cursor-pointer bg-red-400 p-2 text-white lg:text-xl"
              onClick={() => setStartDate(currentDate)}
            >
              Today
            </p>
            {/* Button showing previous month */}
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => setStartDate(startDate.add(4, "week"))}
            />
          </div>
        </div>

        {/* rendering the days in the weekly calendar*/}
        <div className="w-full grid grid-cols-7 text-gray-800 px-8 sm:px-8 lg:text-lg lg:my-1 lg:mx-4">
          {days.map((day, index) => {
            return (
              <p key={index} className="h-14 grid place-content-center text-sm">
                {day}
              </p>
            );
          })}
        </div>
        {/* rendering the dates in the weekly calendar */}
        <div className="w-full grid grid-cols-7 px-8">
          {generateDateForWeeklyCal(startDate).map(
            (date, index) => {
              return (
                <WeeklyDateBox
                  key={index}
                  date={date}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  sessions={sessions}
                  setSessions={setSessions}
                />
              );
            }
          )}
        </div>
      </div>
      <BookingInfoContainer
        sessions={sessions}
        setSessions={setSessions}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default WeeklyCalendar;
