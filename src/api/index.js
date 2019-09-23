// backend
export const fetchData = () =>
  fetch("http://localhost:8080/devices")
    .then(response => response.json())
    .then(data => {
      console.log("api", data);
      return data;
    });
