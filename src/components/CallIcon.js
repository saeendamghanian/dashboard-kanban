import React from "react";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import { green, yellow, red } from "@material-ui/core/colors";

const CallIcon = ({ student }) => {
  // The color pool for the different modes of call icon.
  let colors = {
    successful: green[500],
    unsuccessful: red[500],
    notYet: yellow[500]
  };
  let CallIconColor;
  let phoneCallStatus =
    student.phoneCalls === undefined ? "not yet" : student.phoneCalls[0];

  switch (phoneCallStatus) {
    case "successful":
      CallIconColor = colors.successful;
      break;

    case "unsuccessful":
      CallIconColor = colors.unsuccessful;
      break;

    case "not yet":
      CallIconColor = colors.notYet;
      break;

    // Need to handle errors here.
    default:
  }

  return <CallRoundedIcon style={{ color: CallIconColor }} />;
};

export default CallIcon;
