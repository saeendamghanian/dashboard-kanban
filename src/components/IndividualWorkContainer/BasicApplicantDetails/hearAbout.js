import React from "react";

export default ({ onChange, hearAbout, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlFor="hearAbout" className="lead">
        How did you hear about us? *
      </label>
      <input
        type="text"
        id="hearAbout"
        name="hearAbout"
        className="form-control"
        placeholder="E.g., from your friends or council or internet search"
        value={hearAbout}
        required
        onChange={onChange}
        disabled={!isEditMode}
      />
    </div>
  );
};
