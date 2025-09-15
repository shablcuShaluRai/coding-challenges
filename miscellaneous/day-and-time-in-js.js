// /Write a JavaScript program to display the current
// day and time in the following format.
// day: Friday
// Time: 19 : 33 Am/ PM 12 pm otherwise it should am
function getCurrentDayTime() {
  const dateObj = {
    day: "",
    time: ""
  };
  const today = new Date("Fri Jun 24 2022 23:41:57");

  dateObj.day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    today
  );
  const hrs = today.getHours();
  let str = "";
  if (hrs > 12) {
    str = `${hrs - 12} : ${today.getMinutes()} PM`;
  } else {
    str = `${hrs} : ${today.getMinutes()} AM`;
  }
  dateObj.time = str;

  return dateObj;
}

document.write("day: ", getCurrentDayTime().day);
document.write("\n");
document.write("Time: ", getCurrentDayTime().time);
