import React from "react";
import Cards from "./Cards";

const Column = props => {
  const currentStep = student => {
    let currentStep = 0;
    // Find the approved steps.
    const approvedSteps = student.steps.map(step => step.status === "Approved");

    // Find on which step student is.
    if (approvedSteps.lentgh > 0) {
      approvedSteps.forEach(step => {
        if (step.number > currentStep) {
          currentStep = step.number;
        }
      });
    }

    return currentStep;
  };

  // Find the students which is allowed to be added to column.
  const allowedStudents = this.state.students.filter(
    student => currentStep(student) === props.step.number
  );

  return (
    <div>
      <h3>{props.step.header}</h3>
      <Cards students={allowedStudents} />
    </div>
  );
};

export default Column;
