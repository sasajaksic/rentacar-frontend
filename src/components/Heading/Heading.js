import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div className="block-heading">
      <h2 className="text-info">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
