function qs(a){return document.querySelector(a);}
function qsAll(a) {return document.querySelectorAll(a);}
function cookie(name) {
  let cookies = `; ${document.cookie}`;
  let parts = cookies.split(`; ${name}=`);
  return parts.length == 2 ? parts[1].split(';')[0] : false;
}

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

const style = qs('#style');
const styleMobile = qs('#styleMobile');
const cookiesWarning = qs('#cookiesWarning');

function cookiesAccept() {
  document.cookie = `cookies=accepted`;
  cookiesWarning.classList.add('cookiesWarningHide');
  cookiesWarning.classList.remove('cookiesWarning');
}

window.onload = function() {
  if(cookie('theme')) {
    style.href = cookie('theme');
    styleMobile.href = cookie('themeMobi');
  }
 

  setInterval(()=>{
    
    if(cookie('cookies') != 'accepted') {
      cookiesWarning.classList.remove('cookiesWarningHide');
    cookiesWarning.classList.add('cookiesWarning');
    }
    
  }, 1500)
  
}


function changeStyle() {
 

  if(cookie('theme') == 'style.css') {
    style.href = 'styleDark.css'
    styleMobile.href = 'styleMobileDark.css'
    document.cookie = `theme=${style.href}`
  }else {
    style.href = 'style.css'
    styleMobile.href = 'styleMobile.css'
  }
   
  document.cookie = `theme=${style.href.split('/').pop()}`
  document.cookie = `themeMobi=${styleMobile.href.split('/').pop()}`

  console.log(cookie('theme'))
  
}
// function tmp() {
//   const style = qs('#style');
//   const footer = qs('footer');
//   const menuBlur = qs('#menub');
//   const menu = qs('#menu')
//   if(footer.getBoundingClientRect().top <= 0) {
//     menu.classList.remove('menu');
//     menuBlur.classList.remove('menu_blur');
//     menu.classList.add('menuAb');
//     menuBlur.classList.add('menu_blurAb');
//   }else {
//     menu.classList.add('menu');
//     menuBlur.classList.add('menu_blur');
//     menu.classList.remove('menuAb');
//     menuBlur.classList.remove('menu_blurAb');
//   }
// }

// window.addEventListener('scroll', tmp)