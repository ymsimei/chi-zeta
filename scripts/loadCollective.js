let overlay = document.querySelector('#overlay');
let card = document.querySelector('#card');
let title = document.querySelector('#title');
let subtitle = document.querySelector('#subtitle');
let icon = document.querySelector('#icon');
let info = document.querySelector('#info');
let description = document.querySelector('#description');

function loadCollective() {
  overlay.addEventListener('click', function(e){
    overlay.style.display = 'none';
  });
  card.addEventListener('click', function(e){
    e.stopPropagation();
  });
  let dataObjects = document.querySelectorAll('[data-collective]');
  for (let i = 0;i < dataObjects.length;i++) {
    let dataObject = dataObjects[i];
    dataObject.addEventListener('click', function(){
      let dataName = dataObject.getAttribute('data-collective');
      if (dataName in collectiveData) {
        let data = collectiveData[dataName];
        title.innerHTML = data.title;
        subtitle.innerHTML = data.subtitle;
        let temphtml = '';
        for (let y = 0;y < data.description.length;y++) {
          temphtml += '<p>' + data.description[y] + '</p>';
        }
        description.innerHTML = temphtml;
        temphtml = '';
        if (data.info) {
          for (let key in data.info) {
            temphtml += '<p class="key">' + key + '</p><p class="value">' + data.info[key] + '</p>'
          }
          info.innerHTML = temphtml;
        }
        icon.setAttribute('src', data.img);
        overlay.style.display = 'flex';
      }
    })
  }
}
