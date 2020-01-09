import React from "react";
import Card from "./Card";

const currentStep = student => {
  let currentStep = 0;
  // Find the approved steps.
  const approvedSteps = student.steps.filter(
    step => step.status === "Approved"
  );

  console.log(approvedSteps);

  // Find on which step student is.
  if (approvedSteps.length > 0) {
    approvedSteps.forEach(step => {
      if (step.number > currentStep) {
        currentStep = step.number;
      }
    });
  }

  return currentStep;
};

const Column = ({ step, students }) => {

  // Find the students which is allowed to be added to column.
  const allowedStudents = students.filter(
    student => currentStep(student) === step.number
  );
  console.log('ColumnComp', {allowedStudents, step });

  return (
    <div>
      <h3>{step.header}</h3>
      {allowedStudents.map(student => (
        <Card key={student._id} student={student} />
      ))}
      {/*  */}
    </div>
  );
};

export default Column;
