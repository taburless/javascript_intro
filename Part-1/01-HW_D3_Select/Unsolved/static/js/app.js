// Use D3 to select the table body

// Use D3 to select the table

// Use D3 to set the table class to `table table-striped`

// Loop through an array of grades and build the entire table body from scratch
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

var table = d3.select("table");
table.attr("class", "table table-striped");

var tbody = d3.select("tbody");
grades.forEach(([student, grade]) => {
    var row = tbody.append("tr");
    row.append("td").text(student);
    row.append("td").text(grade)
}
);