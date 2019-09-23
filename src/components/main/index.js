import React from "react";
import Card from "react-bootstrap/Card";

const AppCards = ({ devices }) => {
  const cardItems = devices.map(device => (
    <div key={device.id}>
      <br />
      <Card>
        <Card.Header>
          {device.typeName} &nbsp; {device.id}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <span className={device.isOnline ? "text-success" : "text-danger"}>
              {device.isOnline ? "Online" : "Offline"}
            </span>
            <br />
            Last Packet:{" "}
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "short",
              day: "2-digit",
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            }).format(device.lastPacketTime)}
            <br />
            {device.isOnline && device.stateOfCharge
              ? "State of Charge: " + device.stateOfCharge + "%"
              : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));

  return <div> {cardItems} </div>;
};

export default AppCards;
