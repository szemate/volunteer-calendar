import React from "react";
import conditions from "../utils/conditions";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";

function DateBox({
  index,
  date,
  selectedDate,
  setSelectedDate,
  currentMonth,
  today,
}) {
  return (
    <div>
      <div
        key={index}
        // className="h-14 border grid place-content-center text-sm"
        className={conditions(
          "h-12 w-10 hover:bg-black hover:text-white transition-all cursor-pointer border p-1 text-sm grid grid-cols-2 border-spacing-1",
          currentMonth ? "" : "text-gray-400",
          today ? "bg-red-400 text-white" : "",
          selectedDate.toDate().toDateString() === date.toDate().toDateString()
            ? "bg-black text-white"
            : ""
        )}
        onClick={() => {
          setSelectedDate(date);
        }}
      >
        <h1>{date.date()}</h1>
        <div>
          <LightModeRoundedIcon
            sx={{
              color: "yellow",
            }}
            fontSize="string"
          />
          <NightlightRoundSharpIcon
            sx={{
              color: "blue",
            }}
            fontSize="string"
          />
        </div>
      </div>
    </div>
  );
}

export default DateBox;
