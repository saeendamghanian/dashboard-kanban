import React from "react";
import ApplicantLabel from "./ApplicantLabel";
import IconContainer from "./IconContainer";

const Cards = props => {
  // The fake data instead of the data which should get from DB.
  let callStatus = ["successful", "unsuccessful", "not yet"];
  let applicantInfo = { applicantId: "17", applicantName: "Saeen" };

  return (
    <div>
      <ApplicantLabel applicantInfo={applicantInfo} />
      <IconContainer callStatus={callStatus[0]} hasMet={true} />
    </div>
  );
};

export default Cards;
