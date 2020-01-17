import React from "react";
import Card from "./Card";

const Column = ({ allowedStudents, step }) => {
  const card = allowedStudents
    .map(student => <Card key={student._id} student={student} />)
    .reverse();

  return (
    <div className="column">
      <h4>{`${step.header} (${allowedStudents.length})`}</h4>
      <div>{card}</div>
    </div>
  );
};

export default Column;
