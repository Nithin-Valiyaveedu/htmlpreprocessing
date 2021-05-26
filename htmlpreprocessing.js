const fetch = require("node-fetch");

var url = "https://www.google.com";

// Defining async function
async function getapi(url) {
  
  // Storing response
  const response = await fetch(url);
  
  // Storing data in form of JSON
  var data = await response.text();
  
  //console.log(data);
  var start = data.indexOf("<head>")
  var end = data.indexOf("</head>")
  var headdata = data.slice(start, end+7);
  console.log(headdata.replace(/(\>)(.+)(<\/style>)/g,''));

  // var cleanString = data.replace('<style.*?</style>', "");
  // console.log(cleanString.length);
  // var n = data.indexOf("<style>");
  // console.log(n);

  
}
// Calling that async function
getapi(url);



// var cleanString = dirtyString.replace('<style.*?</style>', "");
