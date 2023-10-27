volunteers = [
  {
    id: 1,
    names: "Afsha",
    phone_number: "07111222333",
    email: "afsha.volunteer@gooddeeds.org",
  },
  {
    id: 2,
    names: "Junita",
    phone_number: "07222111333",
    email: "junita.volunteer@gooddeeds.org",
  },
  {
    id: 3,
    names: "Saliha",
    phone_number: "07111333222",
    email: "saliha.volunteer@gooddeeds.org",
  },
  {
    id: 4,
    names: "Saqib",
    phone_number: "07111222999",
    email: "saqib.volunteer@gooddeeds.org",
  },
  {
    id: 5,
    names: "Daniel",
    phone_number: "07999222333",
    email: "daniel.volunteer@gooddeeds.org",
  },
];

console.log("volunteers data -->", volunteers);

console.log("print first volunteer -->", volunteers[0]);

function findVolunteer(id) {
  const volunteerObj = volunteers.find((volunteer) => volunteer.id === id);
  if (volunteerObj) {
    return volunteerObj.names;
  } else {
    return `volunteer with ID ${id} not found`;
  }
}

console.log(`id 1 is: ${findVolunteer(1)}`);
console.log(`id 5 is: ${findVolunteer(5)}`);
