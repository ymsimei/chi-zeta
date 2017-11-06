let nav = document.getElementsByTagName("nav")[0];
nav.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
window.onscroll = function (e) {
  if ( window.pageYOffset > 50 ) {
    nav.style.backgroundColor = "#2c4b81";
  } else {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  }
}
