import React from "react";

export default ({ onChange, currentlyEmployed, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlor="currentlyEmployed" className="lead">
        Are you currently employed?
      </label>
      <select
        className="form-control"
        id="currentlyEmployed"
        name="currentlyEmployed"
        value={currentlyEmployed}
        required
        onChange={onChange}
        disabled={!isEditMode}
      >
        <option value="" disabled>
          Select here
        </option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Unemployed">Unemployed</option>
      </select>
    </div>
  );
};
