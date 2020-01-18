import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map(step => (
          <Step key={step}>
            <StepLabel>{step.header}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default ProgressBar;
