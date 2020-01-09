import React from "react";
import ApplicantLabel from "../ApplicantLabel";
import IconContainer from "../IconContainer";

const Card = ({ student }) => {
  return (
    <div>
      {student.fullName}
      {/* <ApplicantLabel student={student} /> */}
      {/* <IconContainer student={student} /> */}
    </div>
  );
};

export default Card;
