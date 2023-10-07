import { React, useState, useEffect } from "react";
import volunteers from "../volunteersdata.json";
import { Select, initTE } from "tw-elements";

function VolunteerDropdown() {
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(0);

  useEffect(() => {
    initTE({ Select });
  }, []);

  const onVolunteerChange = (event) => {
    setSelectedVolunteerId(event.target.value);
  };

  return (
    <>
      <select
        data-te-select-init value={selectedVolunteerId}
        onChange={onVolunteerChange}
      >
        <option value={0}>Select volunteer name</option>
        {volunteers.map((volunteer) => {
          console.log("volunteer -->", volunteer);
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
    </>
  );
}

export default VolunteerDropdown;
