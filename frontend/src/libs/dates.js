import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const Diff = (date1, date2) => {
  const currentDate = () => new Date();

  date1 = date1 !== null ? date1 : currentDate();
  date2 = date2 !== null ? date2 : currentDate();

  let diff = dayjs.duration(dayjs(date1).diff(dayjs(date2)));

  let milliseconds = diff.$ms;

  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const millisecondsPerHour = 1000 * 60 * 60;

  let weeks = Math.floor(milliseconds / millisecondsPerWeek);
  milliseconds = milliseconds % millisecondsPerWeek;

  let days = Math.floor(milliseconds / millisecondsPerDay);
  milliseconds = milliseconds % millisecondsPerDay;

  let hours = Math.floor(milliseconds / millisecondsPerHour);

  let output = "";
  let stay_duration = {
    weeks: 0,
    days: 0,
    hours: 0,
  };
  
  if (weeks > 0) {
    stay_duration.weeks = weeks;
    output += `${weeks} week${weeks > 1 ? "s" : ""}`;
  }
  if (days > 0) {
    stay_duration.days = days;
    output += (output ? ", " : "") + `${days} day${days > 1 ? "s" : ""}`;
  }
  if (hours > 0) {
    stay_duration.hours = hours;
    output += (output ? ", " : "") + `${hours} hour${hours > 1 ? "s" : ""}`;
  }
  return {output,stay_duration};
};
