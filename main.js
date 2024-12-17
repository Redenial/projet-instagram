
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  var button = document.querySelector(".custom-checkbox input")

button.onclick = function () {
    let body = document.querySelector('body');

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }
    var x = document.querySelector(".logo");
    var v = x.getAttribute("src");
    if(v == "image/header-icone-logo-insta-white.png")
      v = "image/header-icone-logo-insta.png";
    else
      v = "image/header-icone-logo-insta-white.png";
    x.setAttribute("src", v);
  }