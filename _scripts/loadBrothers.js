---
---

var foundingValues = [
    {% for image in site.static_files %}
        {% if image.path contains 'headshots/founding' %}
            {name: "{{image.name}}".replace(".jpg", "").replace("~", "'"), position: "Member", imgURL: "{{ site.baseurl }}{{ image.path }}"},
        {% endif %}
    {% endfor %}
]

function changeIMGs(array) {
  newContent = "<div class='col-md-12'><h3>Founding Class</h3><hr/></div>";
  for (var i = 0; i < array.length; i++) {
    member = array[i];
    var newMemberHTML = "<div class='col-6 col-md-2 headshot'><img src='"+member.imgURL+"'><h4>"+member.name+"</h4></div>";

	console.log(newMemberHTML)
    var newContent = newContent.concat(newMemberHTML);
  }
  document.getElementById("headshots").innerHTML = newContent;
}

$('#alpha').click(function(){
    document.getElementById("brother-class").innerHTML = "Fall 2017";
    changeIMGs(alphaValues);
});

$('#founding').click(function(){
    document.getElementById("brother-class").innerHTML = "Spring 2017";
    changeIMGs(foundingValues);
});

//RUNS ON LOAD
changeIMGs(foundingValues);
