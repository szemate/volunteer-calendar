import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import sessions from "../sessionsdata.json";

const columns = [
  { id: "day", label: "Day", minWidth: 10 },
  { id: "formatted_date", label: "Date", minWidth: 10 },
  { id: "morning_shift", label: "Morning Shift", minWidth: 10 },
  { id: "evening_shift", label: "Evening Shift", minWidth: 10 },
  { id: "session_status", label: "Session Status", minWidth: 10 },
];

function SlotsCalendar() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(14);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleBookSession = (row, shift) => {
    // Check if the session is available before booking
    if (row.session_status === "available") {
      // We can make an API call or perform any necessary actions
      console.log(
        `Booked session for date ${row.formatted_date}, shift ${shift}`
      );
      // After successful booking, we want to update the session status in our data to "booked" for this session
      row.session_status = "booked";

      // We want to update other relevant info and re-render the component to reflect the updated state,
    } else {
      // Handle the case when the session is not available to book
      console.log("Session is not available for booking.");
    }
  };

  const handleBookingInfoClick = (row) => {
    setSelectedSession(row);
  };

  const handleBackToCalendar = () => {
    setSelectedSession(null);
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 700 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="left"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedSession ? (
                <TableRow>
                  <TableCell colSpan={5}>
                    <button onClick={handleBackToCalendar}>
                      Back to Calendar
                    </button>
                    <div>
                      {
                        <div>
                          <strong>Your Booking Information:</strong>
                          <br />
                          Date: {selectedSession.formatted_date}
                          <br />
                          Shift:{" "}
                          {selectedSession.morning_shift ||
                            selectedSession.evening_shift}
                          <br />
                          Status: Booked
                        </div>
                      }
                      Date: {selectedSession.formatted_date}, Shift:{" "}
                      {selectedSession.morning_shift ||
                        selectedSession.evening_shift}
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                sessions
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, rowIndex) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={rowIndex}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align="left">
                              {column.id === "morning_shift" ||
                              column.id === "evening_shift" ? (
                                <button
                                  onClick={() => {
                                    if (row.session_status === "available") {
                                      handleBookSession(row, column.id);
                                    } else if (
                                      row.session_status === "bagged"
                                    ) {
                                      handleBookingInfoClick(row);
                                    }
                                  }}
                                  disabled={row.session_status !== "available"}
                                  style={{
                                    backgroundColor:
                                      row.session_status === "booked"
                                        ? "lightgrey"
                                        : row.session_status === "bagged"
                                        ? "lightpink"
                                        : "lightgreen",
                                    color: "white",
                                  }}
                                >
                                  {row.session_status === "booked"
                                    ? "TAKEN"
                                    : row.session_status === "bagged"
                                    ? "Your Booking Info"
                                    : "Book Now"}
                                </button>
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[14, 28, 62, 64]}
          component="div"
          count={sessions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default SlotsCalendar;
