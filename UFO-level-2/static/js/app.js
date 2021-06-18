// from data.js
var tableData = data;

// YOUR CODE HERE!

// Referencing table body
var tbody = d3.select("tbody");

console.log(data);

// Using d3 to add the data to the created cells
data.forEach(function(marsData) {
  console.log(marsData);
  var row = tbody.append("tr");
  Object.entries(marsData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Level 2 with multiple possible filters





// Creating the date filter
var button = d3.select("#filter-btn");
// Select the input element and get the raw HTML node
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");


button.on("click", () => {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Get the value property of the input elements
  var inputDateValue = inputDate.property("value");
  var inputCityValue = inputCity.property("value");
  var inputStateValue = inputState.property("value");
  var inputCountryValue = inputCountry.property("value");
  var inputShapeValue = inputShape.property("value");
  
  // Display inpute values
  console.log(inputDateValue);
  console.log(inputCityValue);
  console.log(inputStateValue);
  console.log(inputCountryValue);
  console.log(inputShapeValue);
  
  
  var filteredData = [];
  
  if (inputDateValue !== "") {
    filteredData = data.filter(data => data.datetime === inputDateValue);
    data = filteredData;
  }
  if (inputCityValue !== "") {
    filteredData = data.filter(data => data.city === inputCityValue);
    data = filteredData;
  }
  if (inputStateValue !== "") {
    filteredData = data.filter(data => data.state === inputStateValue);
    data = filteredData;
  }
  if (inputCountryValue !== "") {
    filteredData = data.filter(data => data.country === inputCountryValue);
    data = filteredData;
  }
  if (inputShapeValue !== "") {
    filteredData = data.filter(data => data.shape === inputShapeValue);
    data = filteredData;
  }

  console.log(filteredData);
  
  // Populate the filtered search into data table
  tbody.html('');


// Using d3 to add the data to the created cells

   filteredData.forEach(function(marsFilteredData) {
     console.log(marsFilteredData);
     var row = tbody.append("tr");
     
     Object.entries(marsFilteredData).forEach(function([key, value]) {
       console.log(key, value);
       // Append a cell to the row for each value
       // in the weather report object
     
       var cell = row.append("td");
       cell.text(value);
     
     });
   });
});