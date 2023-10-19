import dayjs from "dayjs";

export const generateDateForWeeklyCal = (startDate) => {
  const month = startDate.month();
  const year = startDate.year();

  const lastDateOfCurrentMonth = startDate.endOf("month");
  const dateAfterFourWeeksFromToday = startDate.add(4, "week");
  const firstDateOfMonth = startDate.startOf("month");
  const firstDateOfNextMonth = firstDateOfMonth.add(1, "month");

  const arrayOfDatesForWeeklyCal = [];

  console.log("date after 4 weeks from today -->", dateAfterFourWeeksFromToday);
  console.log("lastDateOfCurrentMonth -->", lastDateOfCurrentMonth);
  console.log("currentDate -->", startDate);

  // generate prefix dates

  for (let i = 0; i < startDate.day(); i++) {
    arrayOfDatesForWeeklyCal.push(startDate.day(i));
  }

  // generate the upcoming dates from this month

  for (let i = startDate.date(); i <= lastDateOfCurrentMonth.date(); i++) {
    arrayOfDatesForWeeklyCal.push(startDate.date(i));
  }

  // generate the upcoming dates from next month

  for (
    let i = firstDateOfNextMonth.date();
    i < dateAfterFourWeeksFromToday.date();
    i++
  ) {
    arrayOfDatesForWeeklyCal.push(firstDateOfNextMonth.date(i));
  }

  // generate suffix dates

  const remainingDates = (4 + 1 * 7) - arrayOfDatesForWeeklyCal.length;

  for (
    let i = dateAfterFourWeeksFromToday.date();
    i < dateAfterFourWeeksFromToday.date() + remainingDates;
    i++
  ) {
    arrayOfDatesForWeeklyCal.push(dateAfterFourWeeksFromToday.date(i));
  }

  return arrayOfDatesForWeeklyCal;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
