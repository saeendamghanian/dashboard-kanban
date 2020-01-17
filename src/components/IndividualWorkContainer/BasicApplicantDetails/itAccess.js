import React from "react";

export default ({ onChange, itAccess, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlFor="itAccess" className="lead">
        Do you have access to a computer and the internet? *
      </label>
      <select
        className="form-control"
        id="itAccess"
        name="itAccess"
        value={itAccess}
        required
        onChange={onChange}
        disabled={!isEditMode}
      >
        <option> Select here</option>
        <option value>Yes</option>
        <option value={false}>No</option>
      </select>
    </div>
  );
};
