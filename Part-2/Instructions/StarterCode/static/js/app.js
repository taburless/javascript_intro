// from data.js
var tbody = d3.select("tbody");
var tableData = data;

function buildTable(data){
    tbody.html(""); 
    
    console.log(tableData);
    tableData.forEach(function(ufoSightings) {
        console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key,value]) {
            console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

function handleClick(){
  d3.event.preventDefault();

  var datetimeElement = d3.select("#datetime");
  var citynameElement = d3.select("#city");
  var statenameElement = d3.select("#state");
  var countrynameElement = d3.select("#country");
  var shapenameElement = d3.select("#shape");
    
  var datetimeValue = datetimeElement.property("value");
  var citynameValue = citynameElement.property("value").toLowerCase().trim();
  var statenameValue = statenameElement.property("value").toLowerCase().trim();
  var countrynameValue = countrynameElement.property("value").toLowerCase().trim();    
  var shapenameValue = shapenameElement.property("value").toLowerCase().trim();

  if (datetimeValue != "") {
      tableData = tableData.filter(entry => entry.datetime === datetimeValue);
  }
  if (citynameValue != "") {
       tableData = tableData.filter(entry => entry.city === citynameValue);     
  }
  if (statenameValue != "") {
       tableData = tableData.filter(entry => entry.state === statenameValue);     
  }
  if (countrynameValue != "") {
       tableData = tableData.filter(entry => entry.country === countrynameValue);     
  }
  if (shapenameValue != "") {
        tableData = tableData.filter(entry => entry.shape === shapenameValue);     
  }  
  console.log(tableData);    
  buildTable();
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);
