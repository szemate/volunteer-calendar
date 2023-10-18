import React from "react";
import conditionalClasses from "../utils/conditionalClasses";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";

function WeeklyDateBox({
  index,
  date,
  selectedDate,
  setSelectedDate,
  currentPeriod,
  today,
  sessions,
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
  console.log("today", today);
  console.log("date", date);
  return (
    <div key={index} className="h-14 border grid place-content-center">
      <div
        key={index}
        className={conditionalClasses(
          "h-14 w-12 hover:bg-black hover:text-white transition-all cursor-pointer border border-blue-gray-100 text-sm grid grid-cols-2 border-spacing-1 sm:border p-1 sm:h-15 sm:w-20 lg:h-15 lg:w-20 lg:text-lg lg:p-2 lg:my-1 lg:mx-2",
          date < today ? "" : "text-gray-400",
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
                  color: "orange",
                }}
                fontSize="small"
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

export default WeeklyDateBox;
