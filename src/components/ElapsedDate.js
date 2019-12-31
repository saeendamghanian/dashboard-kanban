import React from "react";
import moment from "moment";

const ElapsedDate = props => {
  let lastCall = moment([2019, 10, 15]);
  let duration = moment().diff(lastCall, "days");

  return <time>{moment.duration(duration * -1, "days").humanize(true)}</time>;
};

export default ElapsedDate;
