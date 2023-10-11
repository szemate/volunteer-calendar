import { React, useState, useEffect } from "react";
import volunteers from "../volunteersdata.json";
import { Select, initTE } from "tw-elements";

function VolunteerDropdownComplexWorks() {
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(0);

  useEffect(() => {
    initTE({ Select });
  }, []);

  const onVolunteerChange = (event) => {
    setSelectedVolunteerId(event.target.value);
  };

  return (
    <div className="font-bold text-lg bg-red-200">
      <select
        data-te-select-init
        value={selectedVolunteerId}
        onChange={onVolunteerChange}
      >
        {/* if I want the first option to be a string I put the initial useState(0) and use the string in jsx as below: */}
        <option value={0}>Select a name before booking </option>
        {volunteers.map((volunteer) => {
          return (
            <option
              key={volunteer.id}
              value={volunteer.id}
              data-te-select-icon={volunteer.photo}
            >
              {volunteer.first_name} {volunteer.last_name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default VolunteerDropdownComplexWorks;
