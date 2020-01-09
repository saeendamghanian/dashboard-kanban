import React from "react";
import Column from "../components/Column";
import { getSteps, getStudents } from "../services/cyf-api";

export default class ColumnsContainer extends React.Component {
  state = {
    stepsList: [],
    studentsList: []
  };

  async componentDidMount() {
    let stepsData, studentsData;

    async function getData() {
      try {
        stepsData = await getSteps();
        studentsData = await getStudents();

        console.log(stepsData);
        console.log(studentsData);

        return {
          stepsData: stepsData,
          studentsData: studentsData
        };
      } catch (error) {
        console.log("Error happens");
      }
    }

    (async () => {
      this.setState({
        stepsList: await (await getData()).stepsData,
        studentsList: await (await getData()).studentsData
      });
    })();
  }

  render() {
    // Create a column for each step.
    const columns = this.state.stepsList.map(step => (
      <Column
        key={step.number}
        step={step}
        students={this.state.studentsList}
      />
    ));

    return <div>{columns}</div>;
  }
}
