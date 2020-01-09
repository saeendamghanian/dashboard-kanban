import React from "react";
import Cards from "./Cards";

const Column = props => {
  const currentStep = student => {
    let currentStep = 0;
    // Find the approved steps.
    const approvedSteps = student.steps.filter(
      step => step.status === "Approved"
    );

    console.log(approvedSteps);

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
  const allowedStudents = props.students.filter(
    student => currentStep(student) === props.step.number
  );
  console.log(allowedStudents);

  return (
    <div>
      <h3>{props.step.header}</h3>
      <Cards key={allowedStudents._id} students={allowedStudents} />
    </div>
  );
};

export default Column;
