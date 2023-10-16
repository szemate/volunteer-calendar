import React, { useState, useEffect } from "react";
import { generateDate, months } from "../utils/generateDate";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import DateBox from "./DateBox";
import BookingInfoContainer from "./BookingInfoContainer";
import { baseUrl } from "../config";

function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/sessions`)
      .then((response) => response.json())
      .then((data) => {
        setSessions(data);
      });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row sm:mx-auto sm:mt-5 sm:gap-1 grow items-start">
      <div className="w-96 sm:w-full lg:w-4/5">
        {/* displaying the month and year*/}
        <div className="flex justify-between px-6 ">
          <p className="font-semibold">
            {months[today.month()]}, {today.year()}
          </p>
          <div className="flex items-center gap-5">
            {/* Button showing previous month */}
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() - 1))}
            />
            {/* button taking us to today */}
            <p
              className="cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </p>
            {/* Button showing previous month */}
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        {/* getting the days */}
        <div className="w-full grid grid-cols-7 text-gray-800 px-8 sm:px-8">
          {days.map((day, index) => {
            return (
              <p key={index} className="h-14 grid place-content-center text-sm">
                {day}
              </p>
            );
          })}
        </div>
        {/* generating date in the calendar */}
        <div className="w-full grid grid-cols-7 px-8 sm:px-8">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <DateBox
                  key={index}
                  index={index}
                  date={date}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  currentMonth={currentMonth}
                  today={today}
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

export default Calendar;
