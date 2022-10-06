import React, { Component } from "react";

import Container from "../components/Layout";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <p className="text-6xl text-blue-900 text-center font-semibold m-16 p-16">
          UNDER MAINTANTANCE
        </p>
      </Container>
    );
  }
}

export default NotFound;
