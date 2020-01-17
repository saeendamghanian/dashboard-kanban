import React from "react";
import countryList from "./countryList";

export default ({ onChange, country, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlFor="country" className="lead">
        Which country are you from?
      </label>
      <select
        placeholder="Select your country"
        onChange={onChange}
        id="country"
        name="country"
        className="form-control"
        value={country}
        required
        disabled={!isEditMode}
      >
        <option value="" disabled>
          Select here
        </option>
        {countryList.map(countryObj => (
          <option key={countryObj.code} value={countryObj.name}>
            {countryObj.name}
          </option>
        ))}
      </select>
    </div>
  );
};
