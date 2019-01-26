import React from "react";

function Header() {
  const TextColor = {};
  const date = new Date();
  const hours = date.getHours();
  let time_of_day;
  if (hours < 12) {
    TextColor.color = "green";
    time_of_day = "morning!";
  } else if (hours > 12 && hours < 18) {
    TextColor.color = "red";
    time_of_day = "afternoon!";
  } else {
    TextColor.color = "purple";
    time_of_day = "night!";
  }
  return (
    <h2 className="header" style={TextColor}>
      Hello World! It is {time_of_day}
    </h2>
  );
}

export default Header;
