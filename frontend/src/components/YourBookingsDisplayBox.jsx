import React from "react";
import VolunteerDropDownBest from "./VolunteerDropDownBest";
import CancelBookingButton from "./CancelBookingButton";

function YourBookingsDisplayBox({
  sessions,
  setSessions,
  selectedVolunteer,
  setSelectedVolunteer,
}) {
  return (
    <div className="p-3 sm:p-4 lg:p-4  bg-gradient-to-br from-deep-orange-50 to-deep-orange-200">
      <p>See your booked session(s):</p>
      <VolunteerDropDownBest
        selectedVolunteer={selectedVolunteer}
        setSelectedVolunteer={setSelectedVolunteer}
      />
      <ul>
        {selectedVolunteer
          ? sessions
              .filter(
                (session) => session.volunteer_id === selectedVolunteer.id
              )
              .map((session, index) => (
                <li key={index}>
                  You are booked for {session.formatted_date}{" "}
                  {session.session_type} session
                  <CancelBookingButton
                    selectedSession={session}
                    allSessions={sessions}
                    setSessions={setSessions}
                  />
                </li>
              ))
          : ""}
      </ul>
    </div>
  );
}

export default YourBookingsDisplayBox;
