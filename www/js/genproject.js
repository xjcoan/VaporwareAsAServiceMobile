var prefixes = ['Script', 'Cable', 'Disrupt', 'Innovate', 'Doge'];
var suffixes = ['.io', 'Bucket', 'Maker', 'Ly', 'Pan', 'Ware', 'Code'];
var buzz1 = ["IOT", "Social Media", "Data Mining", "Cryptocurrency"];
var buzz2 = ["deployment tools", "employees", "automated workflows"];
var buzz3 =["frontend framework", "database", "web framework"];

function randomValue(arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
}

function generateProject() {
  // Grab random Values
  var pref = randomValue(prefixes);
  var suff = randomValue(suffixes);
  var buzzA = randomValue(buzz1);
  var buzzB = randomValue(buzz2);
  var buzzC = randomValue(buzz3);

  // Place Project Name in UI
  $('.projName').text(pref + suff);

  // Place project Description in UI
  $('.projDesc').text('A ' + buzzA + ' app for managing your ' + buzzB + ' using the latest ' + buzzC + '.');
}
