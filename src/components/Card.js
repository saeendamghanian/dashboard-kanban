import React from "react";
import ApplicantLabel from "./ApplicantLabel";
import IconContainer from "./IconContainer";

const Card = ({ student }) => {
  return (
    <div className="card">
      <ApplicantLabel student={student} />
      <IconContainer student={student} />
    </div>
  );
};

export default Card;
