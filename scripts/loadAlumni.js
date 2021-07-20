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
  xobj.open('GET', '/scripts/alumnidata.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function displayBrotherData(dictionary) {
  var html = "";
  for (var semester in dictionary) {
    html += "<div class='container'><h2>"+semester+"</h2><hr><div class='grid'>"
    for (var name in dictionary[semester]) {
      if (dictionary[semester][name]['data']) {
        html += "<div><img data-collective="+dictionary[semester][name]['data']+" src='"+dictionary[semester][name]['headshot']+"'/><p>"+name+"</p></div>"
      } else {
        html += "<div><a href='//"+dictionary[semester][name]['linkedin']+"'><img src='"+dictionary[semester][name]['headshot']+"'/></a><p>"+name+"</p></div>"
      }
    }
    html += "</div></div></div>"
  }
  document.getElementById("headshots").innerHTML = html;
  loadCollective();
}
