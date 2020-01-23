import React from "react";
import MoodRoundedIcon from "@material-ui/icons/MoodRounded";

const FaceIcon = props => {
  let faceIconVisibility;
  if (!props.student.isAsylumSeekerOrRefugee) {
    faceIconVisibility = "hidden";
  }

  return <MoodRoundedIcon className={`face-icon ${faceIconVisibility}`} />;
};

export default FaceIcon;
