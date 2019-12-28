import React from "react";
import moment from "moment";

const ElapsedDate = props => {
  let lastCall = moment([2019, 11, 28]);

  return <time>{moment().diff(lastCall, "days")} days ago</time>;
};

export default ElapsedDate;
