import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const ProgressBar = () => {
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
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default ProgressBar;
