import React from "react";
import ApplicantLabel from "./ApplicantLabel";
import IconContainer from "./IconContainer";

const Cards = ({ students }) => {
  return students
    .map(student => (
      <div className="card">
        <ApplicantLabel student={student} />
        <IconContainer student={student} />
      </div>
    ))
    .reverse();
};

export default Cards;
