import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";

export default ({ onChange, tel, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label>
        <span>Phone number *</span>
        <span className="tel-preview">{formatPhoneNumberIntl(tel)}</span>
      </label>
      <PhoneInput
        placeholder="Enter phone number"
        value={tel}
        onChange={e => onChange(e)}
        className="form-control"
        disabled={!isEditMode}
      />
    </div>
  );
};
