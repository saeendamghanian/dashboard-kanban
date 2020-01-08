import React from "react";
import Column from "../components/Column";
import { getSteps, getStudents } from "../services/cyf-api";

export default class ColumnsContainer extends React.Component {
  state = {
    stepsList: [],
    studentsList: []
  };

  async componentDidMount() {
    // const stepsData = await getSteps();
    // console.log(stepsData);
    // const studentsData = await getStudents();
    // console.log(studentsData);

    this.setState({
      stepsList: await getSteps(),
      studentsList: await getStudents()
    });
  }

  render() {
    console.log(this.state.stepsList);
    console.log(this.state.studentsList);

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
