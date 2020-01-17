import React from "react";

export default ({ onChange, gender, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlor="gender" className="lead">
        Gender
      </label>
      <select
        className={`form-control form-control-lg ${editModeClass}`}
        name="gender"
        id="gender"
        value={gender}
        onChange={onChange}
        required
        disabled={!isEditMode}
      >
        <option value="" disabled>
          Select here
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
        <option value="PreferNotToSay">Prefer not to say</option>
      </select>
    </div>
  );
};
