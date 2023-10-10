import React from "react";
import sessions from "../sessionsdata.json";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter.js";
import ConfirmationDialogueBoxBest from "./ConfirmationDialogueBoxBest";

function SessionStatusBox({ selectedDate }) {
  const matchingSessions = sessions.filter(
    (session) => session.formatted_date === selectedDate.format("DD-MM-YYYY")
  );
  console.log("selected date in Status box", selectedDate);
  return (
    <div className="p-3 mt-4 sm:mt-8 lg:mt-9 lg:p-4 sm:p-4 bg-orange-200">
      <p className="font-semibold py-2">
        Sessions Status for {selectedDate.toDate().toDateString()}:
      </p>
      {matchingSessions.length === 0 && <p>No sessions exist for this date</p>}
      {matchingSessions.length > 0 &&
        matchingSessions.map((session, index) => (
          <div key={index}>
            <p>
              {session.volunteer_id != null ? (
                `${capitalizeFirstLetter(session.session_type)}- ${
                  session.volunteer_first_name
                } ${session.volunteer_last_name} has booked this session`
              ) : (
                <>
                  {capitalizeFirstLetter(session.session_type)}- This session is
                  available to book
                  <ConfirmationDialogueBoxBest sessionId={session.session_id} />
                </>
              )}
            </p>
          </div>
        ))}
    </div>
  );
}

export default SessionStatusBox;

// Pseudocode:
// check selectedDate exists in the sessions data if it doesn't exist it gives us an empty array
// if it doesn't exist then we render "no sessions exist for this date"
// if the selectedDate exist in the sessions data  then give the info about the session status:
// - if it a volunteer_id exist then say volunteer_name booked this session
// - or else this session is available to book
