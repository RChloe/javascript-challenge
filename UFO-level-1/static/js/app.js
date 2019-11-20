// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(data => data.datetime === inputValue);
  console.log(filteredData);

  var fixedData = filteredData.map(data => data.datetime,data.city,data.state,data.country,data.shape,data.durationMinutes,data.comments);

  // remove any children from the list to
  tbody.html("");

  filteredData.forEach((fixedData) => {
    var row = tbody.append("tr");
    Object.entries(fixedData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

// Select the button
var clearbutton = d3.select("#clear-filter-btn");

clearbutton.on("click", function() {
    tbody.html("");
    data.forEach((tableData) => {
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});