import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const ProgressBar = ({ steps, currentStep }) => {
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
