import React from "react";
import CallIcon from "./CallIcon";
import FaceIcon from "./FaceIcon";
import ElapsedDate from "./ElapsedDate";

const IconContainer = props => {
  return (
    <div>
      <CallIcon {...props} />
      <FaceIcon {...props} />
      <ElapsedDate {...props} />
    </div>
  );
};

export default IconContainer;
