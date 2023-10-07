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
  const existingSessions = sessions.filter(
    (session) => stringDate === session.formatted_date
  );
  const existingMorningSession = existingSessions.find(
    (session) => session.session_type === "morning"
  );
  const existingEveningSession = existingSessions.find(
    (session) => session.session_type === "evening"
  );

  //   console.log(stringDate, doesSessionExist);

  return (
    <div>
      <div
        key={index}
        // className="h-14 border grid place-content-center text-sm"
        className={conditions(
          "h-14 w-12 hover:bg-black hover:text-white transition-all cursor-pointer border text-sm grid grid-cols-2 border-spacing-1 sm:border p-1 lg:p-2 sm:h-16 sm:w-16 lg:h-20 lg:w-32",
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
        <p>{date.date()}</p>
        <div className="grid grid-col sm:p-2">
          <div className={existingMorningSession ? "block" : "hidden"}>
            {existingMorningSession?.volunteer_id ? (
              <LightModeRoundedIcon
                sx={{
                  color: "gray",
                }}
                fontSize="string"
              />
            ) : (
              <LightModeRoundedIcon
                sx={{
                  color: "yellow",
                }}
                fontSize="string"
              />
            )}
          </div>
          <div className={existingEveningSession ? "block" : "hidden"}>
            {existingEveningSession?.volunteer_id ? (
              <NightlightRoundSharpIcon
                sx={{
                  color: "gray",
                }}
                fontSize="string"
              />
            ) : (
              <NightlightRoundSharpIcon
                sx={{
                  color: "blue",
                }}
                fontSize="string"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateBox;

/* plan:we are mapping through the dates and creating a date box for each date, we are passing in a date value. So each date box contains a reference to the date that we generated. Knowing that we can compare the date that is passed to our date box with dates from the sessions data

1. We will format the "date" variable into a string.Knowledge:
- after that we need to check if it matches with the formatted_date in the sessions data
- once we've done that we will have each date box which will have a variable that will have a formatted_date string
- we know each box component will be render from top to bottom
- we are creating a value from the prop date and it is created from each render

2. After that we can create a new variable existingSessions and we will use filter method to our sessions data to get an array of objects that matches the same date (if the date value matches the formatted_date from sessions data)

3. We create existingMorningSessions and existingEveningSessions and use find method to go through the existingSessions data

4. Then in our calendar date if existingMorningSessions or existingEveningSessions is true, we have the icons displayed; if existingMorningSessions or existingEveningSessions is false, then no icons displayed

5. We also use a ternary operator with LightModeRoundedIcon that checks if existingMorningSessions is true and has volunteer_id then we have our icons gray if the existingMorningSessions is null then we have our icons coloured as they are available to book.
*/
