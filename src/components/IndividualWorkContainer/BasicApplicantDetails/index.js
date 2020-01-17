import React from "react";
import FirstName from "./firstName";
import LastName from "./lastName";
import Gender from "./gender";
import DateOfBirth from "./dateOfBirth";
import PhoneNumber from "./phoneNumber";
import AvailableOnWhatsApp from "./AvailableOnWhatsApp";
import Country from "./country";
import City from "./city";
import CyfCity from "./cyfCity";
import IsAsylumSeekerOrRefugee from "./IsAsylumSeekerOrRefugee";
import DisadvantagedBackground from "./disadvantagedBackground";
import DisadvantagedBackgroundDescribe from "./disadvantagedBackgroundDescribe";
import CurrentlyEmployed from "./currentlyEmployed";
import Studying from "./studying";
import Experience from "./experience";
import ItAccess from "./itAccess";
import HearAbout from "./hearAbout";
import "./index.css";

const isEditMode = false;
const editModeClass = isEditMode ? "edit-mode" : "not-edit-mode";

export default ({
  onChange,
  firstName,
  gender,
  lastName,
  city,
  tel,
  availableOnWhatsApp,
  country,
  dateOfBirthOnChange,
  cities,
  cityId,
  isAsylumSeekerOrRefugee,
  disadvantagedBackground,
  disadvantagedBackgroundDescribe,
  currentlyEmployed,
  studying,
  itAccess,
  hearAbout,
  experience,
  telOnChange
}) => {
  return (
    <form className="form-container">
      <h4 style={{ textAlign: "center" }}>Basic Applicant Details</h4>
      <FirstName
        onChange={onChange}
        firstName={firstName}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <LastName
        onChange={onChange}
        lastName={lastName}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <Gender
        onChange={onChange}
        gender={gender}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <DateOfBirth
        onChange={dateOfBirthOnChange}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <PhoneNumber
        onChange={telOnChange}
        tel={tel}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <AvailableOnWhatsApp
        onChange={onChange}
        availableOnWhatsApp={availableOnWhatsApp}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <Country
        onChange={onChange}
        country={country}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <City
        onChange={onChange}
        city={city}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <CyfCity
        onChange={onChange}
        cityId={cityId}
        cities={cities}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <IsAsylumSeekerOrRefugee
        onChange={onChange}
        isAsylumSeekerOrRefugee={isAsylumSeekerOrRefugee}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      {isAsylumSeekerOrRefugee === false && (
        <DisadvantagedBackground
          onChange={onChange}
          disadvantagedBackground={disadvantagedBackground}
          isEditMode={isEditMode}
          editModeClass={editModeClass}
        />
      )}
      {disadvantagedBackground && !isAsylumSeekerOrRefugee && (
        <DisadvantagedBackgroundDescribe
          onChange={onChange}
          disadvantagedBackgroundDescribe={disadvantagedBackgroundDescribe}
          isEditMode={isEditMode}
          editModeClass={editModeClass}
        />
      )}
      <CurrentlyEmployed
        onChange={onChange}
        currentlyEmployed={currentlyEmployed}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <Studying
        onChange={onChange}
        studying={studying}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <ItAccess
        onChange={onChange}
        itAccess={itAccess}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <Experience
        onChange={onChange}
        experience={experience}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
      <HearAbout
        onChange={onChange}
        hearAbout={hearAbout}
        isEditMode={isEditMode}
        editModeClass={editModeClass}
      />
    </form>
  );
};
