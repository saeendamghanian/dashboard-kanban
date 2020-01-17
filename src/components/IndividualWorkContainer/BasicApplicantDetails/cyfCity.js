import React from "react";

function chooseCity(cities) {
  const filteredCities = cities.filter(
    city =>
      city.visibleIn && city.visibleIn.includes("APPLICATION_PROCESS_FORM")
  );
  return filteredCities.map(city => {
    return (
      <option key={city._id} value={city._id}>
        {city.name}
      </option>
    );
  });
}

export default ({ onChange, cityId, cities, isEditMode, editModeClass }) => {
  return (
    <div className="form-group application-form-section-one-items">
      <label htmlFor="cityId" className="lead">
        Which Code Your Future coding community is close to you?
      </label>
      <select
        className="form-control"
        id="cityId"
        name="cityId"
        placeholder="Chose"
        value={cityId}
        // required
        onChange={onChange}
        disabled={!isEditMode}
      >
        <option value="" disabled>
          Select here
        </option>
        <option value="Rome">Rome</option>
        <option value="London">London</option>
        {/* {chooseCity(cities.cities)} */}
      </select>
    </div>
  );
};
