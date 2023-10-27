import { React, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import volunteers from "../volunteersdata.json";

function ViewDropDownSimple() {
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(0);

  const onVolunteerChange = (event) => {
    setSelectedVolunteerId(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Volunteer Name</InputLabel>
        <Select
          value={selectedVolunteerId}
          onChange={onVolunteerChange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="VolunteerName"
        >
          {volunteers.map((volunteer) => {
            return (
              <MenuItem key={volunteer.id} value={volunteer.id}>
                {volunteer.first_name} {volunteer.last_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default ViewDropDownSimple;

// import { Select, Option } from "@material-tailwind/react";

// export function VolunteerDropDown() {
//   return (
//     <div className="w-72">
//       <Select label="Select Version">
//         <Option>Material Tailwind HTML</Option>
//         <Option>Material Tailwind React</Option>
//         <Option>Material Tailwind Vue</Option>
//         <Option>Material Tailwind Angular</Option>
//         <Option>Material Tailwind Svelte</Option>
//       </Select>
//     </div>
//   );
// }

// export default VolunteerDropDown;
