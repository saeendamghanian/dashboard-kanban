import React from "react";

export default ({ onChange, city, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlFor="city" className="lead">
        Which city do you currently live in?
      </label>
      <input
        type="text"
        id="city"
        name="city"
        className="form-control"
        placeholder="E.g., London or Manchester"
        value={city}
        required
        onChange={onChange}
        disabled={!isEditMode}
      />
    </div>
  );
};
