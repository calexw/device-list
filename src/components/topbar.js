import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AppDropdown from "./dropdown";

const AppTopBar = ({ handler }) => {
  return (
    <Row>
      <Col sm={4} lg={2}>
        Connection State:
      </Col>
      <Col sm={4}>
        <AppDropdown handler={handler} />
      </Col>
    </Row>
  );
};

export default AppTopBar;
