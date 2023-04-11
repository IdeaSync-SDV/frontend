import { DateTime } from 'luxon';

export const dateToRelative = (isoDate) => {
  const date = DateTime.fromISO(isoDate);
  return capitalize(date.toRelativeCalendar());
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
