import React from "react";

export default ({
  onChange,
  disadvantagedBackgroundDescribe,
  isEditMode,
  editModeClass
}) => {
  return (
    <div className="form-group ">
      <label htmlor="disadvantagedBackground" className="lead">
        Please describe. *
      </label>
      <textarea
        type="text"
        name="disadvantagedBackgroundDescribe"
        className="form-control"
        id="disadvantagedBackgroundDescribe"
        placeholder="Describe... "
        value={disadvantagedBackgroundDescribe}
        onChange={onChange}
        required
        disabled={!isEditMode}
      />
    </div>
  );
};
