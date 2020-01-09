import React from "react";
import Column from "../components/Column";
import { getSteps, getStudents } from "../services/cyf-api";

export default class ColumnsContainer extends React.Component {
  state = {
    stepsList: [],
    studentsList: []
  };

  async componentDidMount() {

    // async function getData() {
    const getData = async () => {
      try {
/*         const stepsData = await getSteps();
        const studentsData = await getStudents(); */

        const [stepsData, studentsData] = await Promise.all([getSteps(), getStudents()]);
// problem: unconsistent returned value
        console.log(stepsData);
        console.log(studentsData);

        return {
          stepsData,
          studentsData
        };
      } catch (error) {
        console.log("Error happens");
        // two options:
        // 1. throw the error again
        // 2. return empty object

        return {};
      }
    }

    const { stepsData, studentsData } = await getData();
    this.setState({
      stepsList: stepsData,
      studentsList: studentsData
    });


/*     (async () => {
      this.setState({
        stepsList: await (await getData()).stepsData,
        studentsList: await (await getData()).studentsData
      });
    })(); */
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
