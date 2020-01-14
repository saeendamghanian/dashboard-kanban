import React from "react";
import Card from "./Card";

const Column = ({ allowedStudents, step }) => {
  const card = allowedStudents
    .map(student => <Card key={student._id} student={student} />)
    .reverse();

  return (
    <div className="column">
      <h3>{`${step.header} (${allowedStudents.length})`}</h3>
      {card}
    </div>
  );
};

export default Column;
