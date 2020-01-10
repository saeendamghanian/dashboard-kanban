import React from "react";
import Cards from "./Cards";

const currentStep = student => {
  let currentStepNum = 0;
  // Find the approved steps.
  const steps = student.steps.map(step => step.number).sort();
  const approvedSteps = student.steps.filter(
    step => step.status === "Approved"
  );

  // Find out on which step student is.
  // if (approvedSteps.length > 0) {
  //   approvedSteps.forEach(step => {
  //     if (step.number > currentStepNum) {
  //       currentStepNum = step.number;
  //     }
  //   });
  // }
  if (steps.length !== 0) {
    currentStepNum = steps[steps.length - 1];
  }

  return currentStepNum;
};

const Column = ({ students, step }) => {
  // Find the students which is allowed to be added to column.
  const allowedStudents = students.filter(
    student => currentStep(student) === step.number
  );
  console.log("columnComp", { allowedStudents, step });

  return (
    <div className="column">
      <h3>{step.header}</h3>
      <Cards key={students._id} students={allowedStudents} />
    </div>
  );
};

export default Column;
