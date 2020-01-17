import React from "react";

export default ({ firstName, onChange, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlFor="firstName" className="lead">
        First Name
      </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        className={`form-control ${editModeClass}`}
        placeholder="Your first name..."
        value={firstName}
        required
        onChange={onChange}
        disabled={!isEditMode}
      />
    </div>
  );
};
