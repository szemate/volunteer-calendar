import React from "react";
import conditions from "../utils/conditions";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import sessions from "../sessionsdata.json";

/* plan:
we are mapping through the dates and creating a date box for each date, we are passing in a date value. So each date  box contains a reference to the date that we generated. 
Knowing that we can compare the date that is passed to our date box with dates from the sessions data

1- we will format the "date" variable into a string.
- after that we need to check if it matches with the formatted_date in the sessions data
- once we've done that we will have each date box will have a variable that will have a formatted_date string
- we know each box component will be render from top to bottom
- we are creating a value from the prop date and it is created from each render

2- after that we can create a new variable doesSessionExist and we will assign includes array method to that (if the date value matches the formatted_date from sessions data)

- map through the sessions data
- our calendar date exists in our sessions: we have the icons displayed; if it doesn't exist then no icons displayed
- 
*/

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
