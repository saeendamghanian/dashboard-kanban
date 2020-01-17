import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";

export default ApplicationProcess = () => {
  const [value, setValue] = React.useState("one");

  return (
    <AppBar position="static">
      <Tabs value={value}>
        <Tab value="step1" label="New Applicant" wrapped></Tab>
        <Tab value="step2" label="New Applicant" wrapped></Tab>
        <Tab value="step3" label="New Applicant" wrapped></Tab>
        <Tab value="step4" label="New Applicant" wrapped></Tab>
        <Tab value="step5" label="New Applicant" wrapped></Tab>
        <Tab value="step6" label="New Applicant" wrapped></Tab>
        <Tab value="step7" label="New Applicant" wrapped></Tab>
        <Tab value="step8" label="New Applicant" wrapped></Tab>
      </Tabs>
    </AppBar>
  );
};
