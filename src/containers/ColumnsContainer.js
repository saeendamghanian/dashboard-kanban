import React from "react";
import Column from "../components/Column";
import { getSteps, getStudents } from "../services/cyf-api";

export default class ColumnsContainer extends React.Component {
  state = {
    stepsList: [],
    studentsList: []
  };

  async componentDidMount() {
    const getData = async () => {
      try {
        const [stepsData, studentsData] = await Promise.all([
          getSteps(),
          getStudents()
        ]);

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
    };

    const { stepsData, studentsData } = await getData();
    this.setState({
      stepsList: stepsData,
      studentsList: studentsData
    });
  }

  currentStep = student => {
    let currentStepNum = 0;
    // Find the approved steps.
    const approvedSteps = student.steps.filter(
      step => step.status === "Approved"
    );
    // Make an array of approved steps.
    const steps = approvedSteps.map(step => step.number).sort();
    // Select the right step.
    if (steps.length !== 0) {
      currentStepNum = steps[steps.length - 1];
    }

    return currentStepNum;
  };

  render() {
    // Create a column for each step.
    const columns = this.state.stepsList.map(step => {
      // Find the students which is allowed to be added to column.
      const allowedStudents = this.state.studentsList.filter(
        student => this.currentStep(student) === step.number
      );

      return (
        <Column
          key={step.number}
          step={step}
          allowedStudents={allowedStudents}
        />
      );
    });

    return <div className="column-container">{columns}</div>;
  }
}
