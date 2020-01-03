import React from "react";

class ApplicantDetailPage extends React.Component {
  render() {
    const { params } = this.props.match;

    return (
      <h1 style={{ textAlign: "center" }}>I'm the applicant {params.id}</h1>
    );
  }
}

export default ApplicantDetailPage;
