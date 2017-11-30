//RUNS ON LOAD
loadJSON(function(response) {
  // Parse JSON string into object
  var brothers = JSON.parse(response);
  displayBrotherData(brothers);
 });

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '/_scripts/brotherdata.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function displayBrotherData(dictionary) {
  //console.log(dictionary);
  var html = "";
  for (var grade in dictionary) {
    html += "<div class='col-12'><h3>"+grade+"</h3><hr/></div>"
    for (var name in dictionary[grade]) {
      html += "<div class='col-6 col-sm-3 col-lg-2 headshot'><img class='headshot' src='"+dictionary[grade][name]['headshot']+"'/><h4>"+name+"<a href='#'><img class='linkedin' src=/_assets/svg/linkedin.svg></a></h4></div>"
    }
  }
  document.getElementById("headshots").innerHTML = html;
}
