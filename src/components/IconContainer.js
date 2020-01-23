import React from "react";
import CallIcon from "./CallIcon";
import FaceIcon from "./FaceIcon";
import ElapsedDate from "./ElapsedDate";

const IconContainer = props => {
  return (
    <div className="icon-container">
      <FaceIcon {...props} />
      <CallIcon {...props} />
      <ElapsedDate {...props} />
    </div>
  );
};

export default IconContainer;
