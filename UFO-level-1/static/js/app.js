// from data.js
var tableData = data;

var tbody = d3.select("tbody");

 data.forEach(function(weatherReport) {
   console.log(weatherReport);
   var row = tbody.append("tr");
   Object.entries(weatherReport).forEach(function([key, value]) {
     console.log(key, value);
     

     var cell = row.append("td");
     cell.text(value);
   });
 });

var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  console.log(inputElement)

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue)

//  console.log(inputValue);
//  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime == inputValue);

console.log(filteredData);

});