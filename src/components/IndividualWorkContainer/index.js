import React from "react";
import ProgressBar from "./ProgressBar";
import BasicApplicantDetails from "./BasicApplicantDetails";
import ApplicationProcess from "./ApplicationProcess";

export default class IndividualWorkContainer extends React.Component {
  render() {
    const steps = [
      "step1",
      "step2",
      "step3",
      "step4",
      "step5",
      "step6",
      "step7",
      "step8"
    ];
    const currentStep = 4;

    return (
      <div>
        <ProgressBar steps={steps} currentStep={currentStep} />
        <BasicApplicantDetails />
        <ApplicationProcess />
      </div>
    );
  }
}
