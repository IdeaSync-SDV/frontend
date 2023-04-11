import { DateTime } from 'luxon';

export const dateToRelative = (date) => {
  const now = DateTime.local();
  return capitalize(now.toRelativeCalendar());
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
