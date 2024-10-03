 function qs(a){return document.querySelector(a);}
 function qsa(a) {return document.querySelectorAll(a);}
 function zeroPad(n) {return n < 10 ? '0'+n : n}
 function setCssVar(a,b) {return document.documentElement.style.setProperty(a,b)}

const timer = qs('#timer');
const totalTime = qs('#totalTime');
let timerInterval;
let breakInterval;
const settings = qs('#settings');
const inputs = qsa('input');
let i=0


function togleSettings(a) {
  if(a == "show") {
    
    settings.style.width = '400px'
    settings.style.padding = '15px'
    setTimeout(()=>{
        inputs.forEach(input => {
                input.style.opacity = '1';
            });
      settings.style.fontSize = '15px'
   },200)
  } else {     
         settings.style.fontSize = '0px'
         inputs.forEach(input => {
          input.style.opacity = '0';
      });
    setTimeout(()=>{
        settings.style.padding = '0'
      settings.style.width = '0'
   },200)


  }
}

function checkTime() {

  if(qs('#time').value == 0 || qs('#studyTime').value == 0 || qs('#breakTime').value == 0) {alert("ERROR: CZAS NIE MOŻE BYĆ RÓWNY 0"); return}

  const time = ((qs('#time').value)*60*60)+1;
  let studyTime = ((qs('#studyTime').value)*60)+1;
  const breakTime = ((qs('#breakTime').value)*60)+1;



  let sessions = Math.floor(time/studyTime)
  let lastSession = time - studyTime*sessions

  if(sessions < 1) {studyTime = time}


  console.log(qs('#studyTime').value)
  console.log(studyTime)
  console.log(sessions)
  console.log(lastSession)
  return {time,studyTime,breakTime,sessions,lastSession}
}



function studyTimer() {
    if(timerInterval) clearInterval(timerInterval)  
      setCssVar('--fontColor', '#ff868a');
      setCssVar('--fontColor2', '#e9e8e8');
      setCssVar('--textShadow', '#fc5e63');
      setCssVar('--bacgroundColor', '#FF454B');
      setCssVar('--bacgroundColor2', '#ff2e35');

      let { time, studyTime, breakTime, sessions, lastSession } = checkTime();
      const timeLeft = qs("#timeLeft");
      let sTime = studyTime;
      let tTime = time;

 
        timerInterval = setInterval(() => {
          sTime--;
          tTime--;
          if(sTime>=60*60) {
              let h = zeroPad(Math.floor((sTime/60)/60)%60);
              let m = zeroPad(Math.floor(sTime/60)%60);
              timer.innerHTML = `${h}:${m}`;

              let hT = zeroPad(Math.floor((tTime/60)/60)%60);
              let mT = zeroPad(Math.floor(tTime/60)%60);
              timeLeft.innerHTML = `${hT}:${mT}`;
              timeLeft.value = tTime
          } else if(sTime>=0) {
              let h = zeroPad(Math.floor((sTime/60)/60)%60);
              let m = zeroPad(Math.floor(sTime/60)%60);
              let s = zeroPad(Math.floor(sTime % 60));
              timer.innerHTML = `${m}:${s}`;

              let hT = zeroPad(Math.floor((tTime/60)/60)%60);
              let mT = zeroPad(Math.floor(tTime/60)%60);
              timeLeft.innerHTML = `${hT}:${mT}`;
              timeLeft.value = tTime
          } else {startBreak(); clearInterval(timerInterval) }
    
        }, 1000); //zmien to
    } 

function startBreak() {
  if(breakInterval) clearInterval(breakInterval) 
    setCssVar('--fontColor', '#86acff');
    setCssVar('--fontColor2', '#e8e9e9');
    setCssVar('--textShadow', '#5e95fc');
    setCssVar('--bacgroundColor', '#4580ff');
    setCssVar('--bacgroundColor2', '#2e8fff');


    let { time, studyTime, breakTime, sessions, lastSession } = checkTime();
    const timeLeft = qs("#timeLeft");
    let sTime = studyTime;
    let tTime = time;
    let bTime = breakTime

  breakInterval = setInterval(() => {
    bTime--;
    if(bTime>=60*60) {
        let h = zeroPad(Math.floor((bTime/60)/60)%60);
        let m = zeroPad(Math.floor(bTime/60)%60);
        timer.innerHTML = `${h}:${m}`;
    } else if(bTime>=0) {
        let h = zeroPad(Math.floor((bTime/60)/60)%60);
        let m = zeroPad(Math.floor(bTime/60)%60);
        let s = zeroPad(Math.floor(bTime % 60));
        timer.innerHTML = `${m}:${s}`;
    } else {startTimer(); clearInterval(breakInterval) }

  }, 1000); //zmien to
}

function lastSessionTimer() {
  i=0
}
function reset() {
  clearInterval(breakInterval);
  clearInterval(timerInterval);
  i=0
}

const pauseButtons = qs('.pauseButtons');
const startBtn = qs('.start');

function startTimer() {
  let { time, studyTime, breakTime, sessions, lastSession } = checkTime();
  pauseButtons.style.height = 0;
  startBtn.style.height = 0;
  setTimeout(()=>{
    timer.style.fontSize = '25vw'
    timer.style.cursor = 'pointer'
    timer.setAttribute('onclick', 'pause()')
  },200)
  
  if( i < sessions) {
    i++
    studyTimer();
  } else {
    lastSessionTimer();
  }
}

function pause() {
  clearInterval(breakInterval);
  clearInterval(timerInterval);
  timer.removeAttribute('onclick', 'pause()')
  timer.style.fontSize = '20vw'
  timer.style.cursor = 'auto'
  setTimeout(()=> {
     pauseButtons.style.height = '300px'
  },200)
}
    
