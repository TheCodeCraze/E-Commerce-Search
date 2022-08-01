import React from "react";

const Location = ({ badge, location }) => {
  return (
    <div className="Location">
      {badge !== "None" && (
        <img className="marker" src={badge} alt="location marker" />
      )}
      <p className="detail">{location}</p>
    </div>
  );
};

export default Location;
