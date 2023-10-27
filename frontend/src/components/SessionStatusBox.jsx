import React from "react";

import capitalizeFirstLetter from "../utils/capitalizeFirstLetter.js";
import ConfirmationDialogueBoxBest from "./ConfirmationDialogueBoxBest";

function SessionStatusBox({
  selectedDate,
  selectedVolunteer,
  setSelectedVolunteer,
  sessions,
  setSessions,
}) {
  const matchingSessions = sessions.filter(
    (session) => session.formatted_date === selectedDate.format("DD-MM-YYYY")
  );
  console.log("selected date in Status box", selectedDate);
  return (
    <div className="px-8 sm:px-12 sm:p-4 bg-red-200 lg:text-lg">
      <p className="font-semibold py-2 pb-3">
        Sessions Status for {selectedDate.toDate().toDateString()}:
      </p>
      {matchingSessions.length === 0 && <p>No sessions exist for this date</p>}
      {matchingSessions.length > 0 &&
        matchingSessions.map((session, index) => (
          <div key={index}>
            <div>
              {session.volunteer_id != null ? (
                `${capitalizeFirstLetter(session.session_type)}- ${
                  session.volunteer_first_name
                } ${session.volunteer_last_name} has booked this session`
              ) : (
                <div>
                  {capitalizeFirstLetter(session.session_type)}- This session is
                  available to book
                  <ConfirmationDialogueBoxBest
                    sessionId={session.session_id}
                    selectedVolunteer={selectedVolunteer}
                    setSelectedVolunteer={setSelectedVolunteer}
                    sessions={sessions}
                    setSessions={setSessions}
                  />
                </div>
              )}
            </div>
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

// <div>
//     <p>Session Status...</p>
//     <p>No sessions exist</p>
//     <div>
//         <p>Volunteer name has booked this session</p>
//         <p>This session is available to book
//             <ConfirmationDialogueBoxBest />
//     </div>
//     </p>
// </div>
