import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


function ConfirmationDialogueBoxMatTWWorks() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Book now
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          Confirm your booking for this day and date
        </DialogHeader>
        <DialogBody divider>
          <VolunteerDropdown />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default ConfirmationDialogueBoxMatTWWorks;
