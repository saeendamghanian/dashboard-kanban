import React from "react";
import { Link } from "react-router-dom";

const ApplicantLabel = props => {
  const { applicantId, applicantName } = props.applicantInfo;
  const linkLocation = `/applicant/${applicantId}`;

  return (
    <div>
      <Link to={linkLocation}>{applicantName}</Link>
    </div>
  );
};

export default ApplicantLabel;
