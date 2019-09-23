import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AppSidebar from "./sidebar";
import AppTopBar from "./topbar";
import AppCards from "./cards";

import { fetchData } from "../api";
import MockData from "../api/mock.js";

class AppMain extends Component {
  constructor() {
    super();
    this.state = {
      devices: [],
      filtered: [],
      types: []
    };
  }

  statusHandler = event => {
    const { devices } = this.state;
    const status = event.target.value;
    const filtered = devices.filter(device => {
      if (status === "Online") {
        return device.isOnline;
      } else if (status === "Offline") {
        return !device.isOnline;
      } else {
        return device.id;
      }
    });
    this.setState({ filtered: filtered });
  };

  getTypeNames = devices => {
    let typeArray = [];
    for (let device of devices) {
      if (typeArray.indexOf(device.typeName) === -1) {
        typeArray.push(device.typeName);
      }
    }
    return typeArray.sort();
  };

  formatTypeName = device => {
    device.typeName = device.type.replace("_", " ");
    return device;
  };

  componentDidMount() {
    fetchData().then(data => {
      const devices = data.map(this.formatTypeName);
      const types = this.getTypeNames(devices);
      this.setState({ devices, types, filtered: devices });
    });
  }

  render() {
    let { filtered, types } = this.state;

    return (
      <Container className="container">
        <Row>
          <Col sm={3} className="side">
            <AppSidebar types={types} devices={filtered} />
          </Col>
          <Col sm={9}>
            <Row>
              <Col className="top">
                <AppTopBar handler={this.statusHandler} />
              </Col>
            </Row>
            <Row>
              <Col className="main">
                <AppCards devices={filtered} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AppMain;
