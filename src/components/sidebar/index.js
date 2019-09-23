import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const AppSidebar = ({ devices, types }) => {
  const badge = count => (
    <Badge pill variant="dark">
      {count}
    </Badge>
  );

  const countByType = type =>
    devices.filter(device => {
      return device.typeName === type;
    }).length;

  const listItems = types.map(type => {
    const count = countByType(type);
    return (
      <ListGroup.Item key={type}>
        {type} &nbsp;
        {badge(count)}
      </ListGroup.Item>
    );
  });

  return (
    <ListGroup>
      <ListGroup.Item>ALL &nbsp;{badge(devices.length)}</ListGroup.Item>
      {listItems}
    </ListGroup>
  );
};

export default AppSidebar;
