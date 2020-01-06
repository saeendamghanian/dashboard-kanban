import React from "react";
import ApplicantLabel from "./ApplicantLabel";
import IconContainer from "./IconContainer";

const Cards = props => {
  return (
    <div>
      <ApplicantLabel {...props} />
      <IconContainer {...props} />
    </div>
  );
};

export default Cards;
