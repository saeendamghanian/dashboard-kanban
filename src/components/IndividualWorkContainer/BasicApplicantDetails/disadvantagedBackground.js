import React from "react";

export default ({
  onChange,
  disadvantagedBackground,
  isEditMode,
  editModeClass
}) => {
  return (
    <div className="form-group ">
      <label htmlor="disadvantagedBackground" className="lead">
        Do you consider yourself to be from a disadvantaged background? *
      </label>
      <select
        className="form-control"
        id="disadvantagedBackground"
        name="disadvantagedBackground"
        value={disadvantagedBackground}
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
