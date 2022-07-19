import React from 'react';
import './SeasonDisplay.css';

// const month = new Date().getMonth() + 1;

const seasonConfig = {
  Summer: {
    text: `It's hot! Let's hit the beach.`,
    iconName: 'sun',
  },
  Winter: {
    text: `Burr! It's chilly and windy!`,
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  //   console.log(season);
  const { text, iconName } = seasonConfig[season];
  //   console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
