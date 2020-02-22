import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to the KANBAN project</h1>
      <h3 style={{ textAlign: "center" }}>
        Go to <Link to="/dashboard-kanban/kanban">Kanban View</Link> page
      </h3>
    </div>
  );
};

export default Welcome;
