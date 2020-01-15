import React from "react";
import moment from "moment";

const ElapsedDate = ({ student }) => {
  let lastCall = student.updatedAt;
  let duration = moment().diff(lastCall, "days");

  return <time>{moment.duration(duration * -1, "days").humanize(true)}</time>;
};

export default ElapsedDate;
