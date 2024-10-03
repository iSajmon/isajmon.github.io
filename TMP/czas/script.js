function qs(selektor) {
  return document.querySelector(selektor);
}
function qsAll(selektor) {
  return document.querySelectorAll(selektor);
}
function zeroPad(n) {return n < 10 ? '0'+n : n}

const data = new Date();
const dataSpan = document.querySelector("#data");
const czasSpan = document.querySelector("#czas");
dataSpan.innerHTML = data.toLocaleDateString();
czasSpan.innerHTML = data.toLocaleTimeString();
let stoperInterwal;
let timerInterwal;
let x =255;
let y = 0;
function dataCzas() {
  data.setTime(Date.now());
  dataSpan.innerHTML = data.toLocaleDateString();
  czasSpan.innerHTML = data.toLocaleTimeString();
}

setInterval(() => {
  dataCzas();
}, 1000);

function stoperStart() {
  const stoper = qs("#stoper");
  let i = 0;
  


  stoperInterwal = setInterval(() => {
    i++;
    let h = zeroPad(Math.floor((i/60)/60)%60);
    let m = zeroPad(Math.floor(i/60)%60);
    let s = zeroPad(i % 60);
    stoper.innerHTML = `${h}:${m}:${s}`;
  }, 1000);
  
}

function stoperStop() {
    clearInterval(stoperInterwal);
}

function timerCustom() {
  const minuty = qs('#minuty').value*60;
  timerStart(minuty)
}

function timerStart(s) {
  if(timerInterwal) clearInterval(timerInterwal)  
  const timer = qs("#timer");
    let i = s;
  
    timerInterwal = setInterval(() => {
      i--;
      let h = zeroPad(Math.floor((i/60)/60)%60);
      let m = zeroPad(Math.floor(i/60)%60);
      let s = zeroPad(i % 60);
      timer.innerHTML = `${h}:${m}:${s}`;
    }, 1000);
    
  }
  
  function timerStop() {
      clearInterval(timerInterwal);
  }

  function bacgroundChange() {
    
    // if(x == 255) {
    //   o = -1;
    // } else if(x == 0) {
    //   o = 1;
    // }
    
    // o = x == 255 ? -1 : x == 0 ? 1 : o*1;

    o = x - 255 == y ? -1 : x + 255 == y ? 1 : o*1;
    
    x += o;
    y -= o;
    console.log(x,y)
    let red = `rgb(${x}, 0, ${y})`;
    let blue = `rgb(${y}, 0, ${x})`;
    document.body.style.background = `linear-gradient(315deg, ${red} 0%, ${blue} 100%)`;
    document.body.style.backgroundAttachment = `fixed`;
    document.body.style.backgroundRepeat  = `no-repeat`;
  }

  setInterval(() => {bacgroundChange()}, 10)

