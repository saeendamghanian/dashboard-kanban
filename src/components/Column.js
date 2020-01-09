import React from "react";
import Cards from "./Cards";

const currentStep = student => {
  let currentStepNum = 0;
  // Find the approved steps.
  const approvedSteps = student.steps.filter(
    step => step.status === "Approved"
  );

  console.log("ApprovedSteps", approvedSteps);

  // Find out on which step student is.
  if (approvedSteps.length > 0) {
    approvedSteps.forEach(step => {
      if (step.number > currentStepNum) {
        currentStepNum = step.number;
      }
    });
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
      <Cards key={students._id} students={students} />
    </div>
  );
};

export default Column;
