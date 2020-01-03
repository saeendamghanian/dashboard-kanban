import React from "react";
import ApplicantDetailPageTitle from "./ApplicantDetailPageTitle";

class ApplicantDetailPageContainer extends React.Component {
  render() {
    const { params } = this.props.match;

    return <ApplicantDetailPageTitle params={params} />;
  }
}

export default ApplicantDetailPageContainer;
