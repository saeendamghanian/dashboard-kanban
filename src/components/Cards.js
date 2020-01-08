import React from "react";
import ApplicantLabel from "./ApplicantLabel";
import IconContainer from "./IconContainer";

const Cards = props => {
  return props.students.map(student => (
    <div>
      <ApplicantLabel student={student} />
      <IconContainer student={student} />
    </div>
  ));
};

export default Cards;
