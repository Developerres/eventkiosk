// Date formatting to “dd/mm/yyyy hh:mm”
const datePadded = (...input) => {
  let paddedArray = [];
  for (let i of input) {
    paddedArray = [...paddedArray, i.toString().padStart(2, "0")];
  }
  return paddedArray;
};

export const dateFormat = (dateResponse) => {
  const date = new Date(dateResponse);

  let paddedArray = datePadded(
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
    date.getHours(),
    date.getMinutes()
  );
  let [day, month, year, hours, minutes] = paddedArray;

  return `${day}/${month}/${year} ${hours}:${minutes}`;
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
