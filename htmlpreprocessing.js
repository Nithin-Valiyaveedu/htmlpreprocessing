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
  headdata_stripped=headdata

  let count = (headdata.match(/<\/style>/g) || []).length;
  // console.log(count)
  for(var i=0;i<count;i++){
    var start = headdata_stripped.search('<style')
    var end = headdata_stripped.search('</\style>')
    headdata_stripped = headdata_stripped.slice(0,start)+headdata_stripped.slice(end+8)
  }
  count = (headdata_stripped.match(/<\/style>/g) || []).length;
  // console.log(count)


  // var headdata_stripped = headdata.replace(/(\>)(.+)(<\/style>)/g,'')
  // var headdata_stripped = headdata.replace(/(<style.*?<\/style>)/g,'')
  
  // console.log(headdata_stripped);

  console.log(headdata_stripped)

  // var cleanString = data.replace('<style.*?</style>', "");
  // console.log(cleanString.length);
  // var n = data.indexOf("<style>");
  // console.log(n);

  
}
// Calling that async function
getapi(url);



// var cleanString = dirtyString.replace('<style.*?</style>', "");
