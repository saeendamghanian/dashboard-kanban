import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const Separator = () => <span> &middot; </span>;
    return (
      <div>
        <ul className="navbar">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/kanban">Kanban View</Link>
          </li>
          <li className="navbar-item">
            <Link to="/list">List View</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
