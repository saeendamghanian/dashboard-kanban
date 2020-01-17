import React from "react";

export default ({ onChange, experience, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlor="experience" className="lead">
        Programming Experience *
      </label>
      <select
        className="form-control"
        id="experience"
        name="experience"
        value={experience}
        required
        onChange={onChange}
        disabled={!isEditMode}
      >
        <option value="" disabled>
          Select here
        </option>
        <option>None</option>
        <option>Basic</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </div>
  );
};
