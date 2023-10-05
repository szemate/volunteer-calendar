import React from "react";
import conditions from "../utils/conditions";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import sessions from "../sessionsdata.json";

function DateBox({
  index,
  date,
  selectedDate,
  setSelectedDate,
  currentMonth,
  today,
}) {
  const stringDate = date.format("DD-MM-YYYY");
  const doesSessionExist = sessions.findIndex(
    (session) => stringDate === session.formatted_date
  );

  console.log(stringDate, doesSessionExist);

  return (
    <div>
      <div
        key={index}
        // className="h-14 border grid place-content-center text-sm"
        className={conditions(
          "h-14 w-12 hover:bg-black hover:text-white transition-all cursor-pointer border text-sm grid grid-cols-2 border-spacing-1 sm:border p-1 lg:p-2 sm:h-16 sm:w-16",
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
        <div className={conditions(
            doesSessionExist === -1 ? "hidden" : "block" 
        )}>
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

