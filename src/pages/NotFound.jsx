import React from "react";

import Container from "components/Layout";
import { useTitle } from "utils/hooks/useTitle";

function NotFound() {
  useTitle("404 Not Found");

  return (
    <Container>
      <p className="text-6xl text-blue-900 text-center font-semibold m-16 p-16">
        UNDER MAINTANTANCE
      </p>
    </Container>
  );
}

export default NotFound;
