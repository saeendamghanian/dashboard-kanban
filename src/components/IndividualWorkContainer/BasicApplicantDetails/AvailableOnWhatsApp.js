import React from "react";

export default ({
  onChange,
  availableOnWhatsApp,
  isEditMode,
  editModeClass
}) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlor="availableOnWhatsApp" className="lead">
        Available on WhatsApp?
      </label>
      <select
        className="form-control"
        id="availableOnWhatsApp"
        name="availableOnWhatsApp"
        value={availableOnWhatsApp}
        required
        onChange={onChange}
        placeholder="07894561230"
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
