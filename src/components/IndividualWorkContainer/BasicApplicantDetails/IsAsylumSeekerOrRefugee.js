import React from "react";

export default ({
  onChange,
  isAsylumSeekerOrRefugee,
  isEditMode,
  editModeClass
}) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlor="isAsylumSeekerOrRefugee" className="lead">
        Are you an asylum seeker or a refugee?
      </label>
      <select
        className="form-control"
        id="isAsylumSeekerOrRefugee"
        name="isAsylumSeekerOrRefugee"
        value={isAsylumSeekerOrRefugee}
        required
        onChange={onChange}
        disabled={!isEditMode}
      >
        <option value="" disabled>
          Select here
        </option>
        <option value>Yes</option>
        <option value={false}>No</option>
      </select>
    </div>
  );
};
