import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const Separator = () => <span> &middot; </span>;
    return (
      <div>
        <Link to="/">Home</Link>
        <Separator />
        <Link to="/kanban">Kanban View</Link>
        <Separator />
        <Link to="/list">List View</Link>
        <Separator />
        <Link to="/applicant/:id">Applicant Detail Page</Link>
      </div>
    );
  }
}
export default NavBar;
