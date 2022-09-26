const dateFormat = (date) => {
  const dateFormatLocal = new Date(date).toLocaleString();
  const [dateFormat, time] = dateFormatLocal.trim().split(",");
  return { date: dateFormat, time: time.trim() };
};

export default dateFormat;
