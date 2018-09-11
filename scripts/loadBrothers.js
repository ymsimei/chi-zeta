---
---

//RUNS ON LOAD
loadJSON(function(response) {
  // Parse JSON string into object
  var brothers = JSON.parse(response);
  displayBrotherData(brothers);
 });

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '/scripts/brotherdata.json', true);
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
  for (var semester in dictionary) {
    html += "<div class='container'><h2>"+semester+"</h2><hr><div class='grid'>"
    for (var name in dictionary[semester]) {
      html += "<div><img src='"+dictionary[semester][name]['headshot']+"'/><p>"+name+"</p></div>"
    }
    html += "</div></div></div>"
  }
  document.getElementById("headshots").innerHTML = html;
}
