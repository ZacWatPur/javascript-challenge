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


// Creating the date filter
var button = d3.select("#filter-btn");
// Select the input element and get the raw HTML node
var inputDate = d3.select("#datetime");


button.on("click", () => {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Get the value property of the input element
  var inputValue = inputDate.property("value");

  console.log(inputValue);


  var filteredData = data.filter(data => data.datetime === inputValue);

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