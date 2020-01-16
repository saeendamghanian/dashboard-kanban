import React from "react";
import ApplicantDetailPageTitle from "../components/ApplicantDetailPageTitle";
import IndividualWorkContainer from "../components/IndividualWorkContainer";
class ApplicantDetailPageContainer extends React.Component {
  render() {
    const { params } = this.props.match;

    return (
      <div>
        <ApplicantDetailPageTitle params={params} />
        <IndividualWorkContainer />
      </div>
    );
  }
}

export default ApplicantDetailPageContainer;
