import React from "react";

export default ({ onChange, lastName, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlFor="lastName" className="lead">
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        className="form-control"
        placeholder="Your last name..."
        value={lastName}
        required
        onChange={onChange}
        disabled={!isEditMode}
      />
    </div>
  );
};
