// Date formatting to “dd/mm/yyyy hh:mm”
export const dateFormat = (dateResponse) => {
  const date = new Date(dateResponse);
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
};

// Compare Dates in the range
export const compareDate = (start, end, compareDate) => {
  let startDate, endDate;
  startDate = Date.parse(start);
  endDate = Date.parse(end);

  if (compareDate <= endDate && compareDate >= startDate) {
    return true;
  }
  return false;
};
