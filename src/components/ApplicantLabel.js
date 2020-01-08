import React from "react";
import { Link } from "react-router-dom";

const ApplicantLabel = props => {
  const { userId, fullName } = props.students;
  const linkLocation = `/applicant/${userId}`;

  return (
    <div>
      <Link to={linkLocation}>{fullName}</Link>
    </div>
  );
};

export default ApplicantLabel;
