var a = document.getElementById('icon-search');

a.addEventListener('click', function () {
    if (document.getElementById('search-form-top').style.display == 'none' || document.getElementById('search-form-top').style.display == '') {
        document.getElementById('search-form-top').style.display = 'block';
    } else {
        document.getElementById('search-form-top').style.display = 'none';
    }
});

window.onscroll = function() {myFunction()};

var relative = document.getElementById("relative");
var sticky = relative.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    relative.classList.add("sticky")
  } else {
    relative.classList.remove("sticky");
  }
}