import dayjs from "dayjs";

export const generateDateForWeeklyCal = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const currentDate = dayjs();
  const lastDateOfCurrentMonth = dayjs().year(year).month(month).endOf("month");
  const numberOfWeek = 4;
  const dateAfterFourWeeksFromToday = dayjs()
    .year(year)
    .month(month)
    .add(numberOfWeek, "week");
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const firstDateOfNextMonth = firstDateOfMonth.add(1, "month");
  // let currentPeriod =[];

  const arrayOfDatesForWeeklyCal = [];

  console.log("date after 4 weeks from today -->", dateAfterFourWeeksFromToday);
  console.log("lastDateOfCurrentMonth -->", lastDateOfCurrentMonth);
  console.log("currentDate -->", currentDate);

  // generate prefix dates

  for (let i = 0; i < currentDate.day(); i++) {
    arrayOfDatesForWeeklyCal.push({
      currentPeriod: false,
      date: currentDate.day(i),
    });
  }

  // generate the upcoming dates from this month

  for (let i = currentDate.date(); i <= lastDateOfCurrentMonth.date(); i++) {
    arrayOfDatesForWeeklyCal.push({
      date: currentDate.date(i),
      currentPeriod: true,
      today:
        currentDate.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  // generate the upcoming dates from next month

  for (
    let i = firstDateOfNextMonth.date();
    i < dateAfterFourWeeksFromToday.date();
    i++
  ) {
    arrayOfDatesForWeeklyCal.push({
      date: firstDateOfNextMonth.date(i),
      currentPeriod: true,
    });
  }

  // generate suffix dates

  const remainingDates = (numberOfWeek + 1 * 7) - arrayOfDatesForWeeklyCal.length;

  for (
    let i = dateAfterFourWeeksFromToday.date();
    i < dateAfterFourWeeksFromToday.date() + remainingDates;
    i++
  ) {
    arrayOfDatesForWeeklyCal.push({
      date: dateAfterFourWeeksFromToday.date(i),
      currentPeriod: false,
    });
  }

  // // generate current period

  // for (let i = currentDate.date(); i <= lastDateOfCurrentMonth.date(); i++) {
  //   currentPeriod.push({
  //     date: currentDate.date(i),
  //     currentPeriod: true,
  //     today:
  //       currentDate.date(i).toDate().toDateString() ===
  //       dayjs().toDate().toDateString(),
  //   });
  // }

  // for (
  //   let i = firstDateOfNextMonth.date();
  //   i < dateAfterFourWeeksFromToday.date();
  //   i++
  // ) {
  //   currentPeriod.push({
  //     date: firstDateOfNextMonth.date(i),
  //     currentPeriod: true,
  //   });
  // }

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
