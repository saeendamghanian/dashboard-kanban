import React from "react";
import ProgressBar from "./ProgressBar";
import BasicApplicantDetails from "./BasicApplicantDetails";

export default class IndividualWorkContainer extends React.Component {
  render() {
    return (
      <div>
        <ProgressBar />
        <BasicApplicantDetails />
      </div>
    );
  }
}
