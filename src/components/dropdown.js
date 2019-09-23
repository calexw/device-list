import React from "react";
import Form from "react-bootstrap/Form";

const AppDropdown = ({ handler }) => {
  return (
    <Form.Group controlId="statusDropdown">
      <Form.Control as="select" onChange={handler}>
        <option>All</option>
        <option>Online</option>
        <option>Offline</option>
      </Form.Control>
    </Form.Group>
  );
};

export default AppDropdown;
