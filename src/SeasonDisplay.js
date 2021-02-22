import React from "react";
import './SeasonDisplay.css'

const SeasonCofig = {
  summer: {
    text: "let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonCofig[season];
  console.log(iconName);
  return (
    <div className={`season-display ${season}`}>
      <i className={` massive ${iconName} icon icon-left`}></i>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
