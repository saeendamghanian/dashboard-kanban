import React from "react";

export default ({ onChange, studying, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlor="studying" className="lead">
        Are you currently studying?
      </label>
      <select
        className="form-control"
        id="studying"
        name="studying"
        value={studying}
        required
        onChange={onChange}
        disabled={!isEditMode}
      >
        <option value="" disabled>
          Select here
        </option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Not Studying">Not Studying</option>
      </select>
    </div>
  );
};
