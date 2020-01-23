import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { blue, cyan, red } from "@material-ui/core/colors";

const TabContent = args => {
  const { step } = args;

  return <p>{step.description}</p>;
};

const ApplicationProcess = ({ steps }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = steps.map(step => (
    <Tab key={step.number} label={step.header} wrapped></Tab>
  ));

  const tabContents = steps.map((step, index) => {
    return (
      value === index && (
        <TabContent key={step.number} value={value} index={index} step={step} />
      )
    );
  });

  return (
    <div className="tab-container">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          color="secondary"
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs}
        </Tabs>
      </AppBar>
      {tabContents}
    </div>
  );
};

export default ApplicationProcess;
