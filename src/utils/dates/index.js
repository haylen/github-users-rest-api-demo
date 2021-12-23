export const maybeWithLeadingZero = (number) =>
  number > 9 ? number : `0${number}`;

export const toAmPm = (hours, minutes) =>
  hours > 12
    ? `${maybeWithLeadingZero(hours - 12)}:${maybeWithLeadingZero(minutes)} pm`
    : `${maybeWithLeadingZero(hours)}:${maybeWithLeadingZero(minutes)} am`;

export const formatedTimestamp = (timestamp) => {
  if (!timestamp) return null;

  const dateObj = new Date(timestamp);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${day} ${month} ${year}, ${toAmPm(hours, minutes)}`;
};
