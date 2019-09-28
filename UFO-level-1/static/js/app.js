// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(weatherReport) {
   console.log(weatherReport);
 });

data.forEach(function(weatherReport) {
   console.log(weatherReport);
   var row = tbody.append("tr");
 });

data.forEach(function(weatherReport) {
   console.log(weatherReport);
   var row = tbody.append("tr");

   Object.entries(weatherReport).forEach(function([key, value]) {
     console.log(key, value);
   });
 });

data.forEach(function(weatherReport) {
   console.log(weatherReport);
   var row = tbody.append("tr");

   Object.entries(weatherReport).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
   });
 });

 data.forEach(function(weatherReport) {
   console.log(weatherReport);
   var row = tbody.append("tr");
   Object.entries(weatherReport).forEach(function([key, value]) {
     console.log(key, value);
     

     var cell = row.append("td");
     cell.text(value);
   });
 });

