var prefixes = ['Script', 'Cable', 'Disrupt', 'Innovate', 'Doge'];

var suffixes = ['.io', 'Bucket', 'Maker', 'Ly', 'Pan', 'Ware', 'Code'];

var buzz1 = ["IOT", "Social Media", "Data Mining", "Cryptocurrency"];

var buzz2 = ["deployment tools", "employees", "automated workflows"];

var buzz3 =["frontend framework", "database", "web framework"];

function generateName() {
  var pref = prefixes[Math.floor(Math.random() * prefixes.length)];
  var suff = suffixes[Math.floor(Math.random() *  suffixes.length)];
  $('.projName').text(pref + suff);
}


function generateDescription() {
  var buzzA = buzz1[Math.floor(Math.random() * buzz1.length)];
  var buzzB = buzz2[Math.floor(Math.random() * buzz2.length)];
  var buzzC = buzz3[Math.floor(Math.random() * buzz3.length)];
  var appDesc = 'A ' + buzzA + ' app for managing your ' + buzzB + ' using the latest ' + buzzC + '.';
  $('.projDesc').text(appDesc);
}

function generator() {
  generateName();
  generateDescription();
}
