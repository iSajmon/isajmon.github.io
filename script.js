function qs(a){return document.querySelector(a);}
function qsAll(a) {return document.querySelectorAll(a);}

let czas;

function showPage(url) {
  document.querySelector(".load").style.display = "block";
  document.querySelector(".main").style.display = "none";
  document.querySelector("footer").style.display = "none";
   setTimeout(function() {
    window.open(url);
    document.querySelector(".load").style.display = "none";
    document.querySelector(".main").style.display = "block";
    document.querySelector("footer").style.display = "block";
 }, 3000);  
}

