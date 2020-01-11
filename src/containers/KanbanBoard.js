import React from "react";
import ColumnsContainer from "./ColumnsContainer";

const KanbanBoard = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>I'm the kanban board!</h1>;
      <ColumnsContainer />
    </div>
  );
};

export default KanbanBoard;
