// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

// Complete the click handler for the form
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Use the form input to filter the data by blood type
  filtered = people.filter(people => people.bloodType === inputValue);
  console.log(filtered);
  // BONUS: Calculate summary statistics for the age field of the filtered data
  var age = filtered.map(person => person.age);
  var mean = math.mean(age);
  var median = math.median(age);
  var mode = math.mode(age);
  var variance = math.var(age);
  var std = math.std(age);

  d3.select(".summary").append("li").text(`Mean: ${mean}`);
  d3.select(".summary").append("li").text(`Mode: ${mode}`);
  d3.select(".summary").append("li").text(`Median: ${median}`);
  d3.select(".summary").append("li").text(`Variance: ${variance}`);
  d3.select(".summary").append("li").text(`Standard Deviation: ${std}`);
  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
});
