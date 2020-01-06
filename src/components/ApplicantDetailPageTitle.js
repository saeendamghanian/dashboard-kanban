import React from "react";

const ApplicantDetailPageTitle = props => {
  return (
    <h1 style={{ textAlign: "center" }}>I'm the applicant {props.params.id}</h1>
  );
};

export default ApplicantDetailPageTitle;
