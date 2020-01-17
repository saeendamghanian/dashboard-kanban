import React from "react";
import { Link } from "react-router-dom";

const ApplicantLabel = ({ student }) => {
  const { userId, fullName } = student;
  const linkLocation = `/applicant/${fullName}`;

  return (
    <div className="applicant-name">
      <Link to={linkLocation}>{fullName}</Link>
    </div>
  );
};

export default ApplicantLabel;
