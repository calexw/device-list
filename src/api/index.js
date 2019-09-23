import MockData from "./mock.js";

// backend
export const fetchData = () =>
  fetch("http://localhost:8080/devices")
    .then(response => response.json())
    .catch(function() {
      console.log("returning mock data");
      return MockData;
    })
    .then(data => {
      console.log("data", data);
      return data;
    });
