import React from "react";
import DateInput from "date-input";
import moment from "moment";

export default ({ onChange, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items date-of-birth-input">
      <label htmlFor="dateOfBirth" className="w-50 lead">
        Date Of Birth
      </label>
      <DateInput
        shouldValidate
        onChange={value => onChange(value)}
        maxDate={moment().format("YYYY-MM-DD")}
        maxDateError="Your birthday should be a past date"
        disabled={!isEditMode}
      />
    </div>
  );
};
