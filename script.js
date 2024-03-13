function qs(a){return document.querySelector(a);}
function qsAll(a) {return document.querySelectorAll(a);}

let czas;

function showPage(url) {
  document.querySelector(".load").style.display = "block";
  document.querySelector(".main").style.display = "none";
  document.querySelector("footer").style.display = "none";
   setTimeout(function() {
    window.location.href = url;
    setTimeout(function(){
      document.querySelector(".load").style.display = "none";
      document.querySelector(".main").style.display = "block";
      document.querySelector("footer").style.display = "block";

    }, 500);
 }, 3000);  
}

function changeStyle() {
  const style = qs('#style');
  const styleMobile = qs('#styleMobile');
 
  if(style.href.includes('style.css')) {
    style.href = 'styleDark.css'
    styleMobile.href = 'styleMobileDark.css'
  }else {
    style.href = 'style.css'
    styleMobile.href = 'styleMobile.css'
  }
    
  
}