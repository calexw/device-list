import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import MockData from "./api/mock.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders app correctly", () => {
  const app = new App();
  expect(app.type).toBeTruthy();
});

it("returns valid data", () => {
  const timeNow = Date.now();
  expect(MockData.length).toBeTruthy();
  expect(MockData[0].type).toBeTruthy();
  expect(MockData[0].id.length).toEqual(36);
  expect(MockData[0].lastPacketTime < timeNow).toBeTruthy();
});
