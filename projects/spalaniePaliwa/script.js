function qs(a){return document.querySelector(a);}
function qsa(a) {return document.querySelectorAll(a);}

function showJednostka(el) {
    const jednostka = qs('#jednostka_'+el.id);

    jednostka.classList.remove('jednostkaHidden');
    jednostka.classList.add('jednostkaShow');
    
}

qsa('#paliwo input').forEach((el) => {
  const jednostka = qs('#jednostka_'+el.id);
  el.addEventListener('focusout', () => {
    jednostka.classList.remove('jednostkaShow');
    jednostka.classList.add('jednostkaHidden');  
  });
})

function wybranaCena(cena) {
   const inputCena = qs('#cena');
   const wprowadzoneCena = qs('#wprowadzoneCena');
   inputCena.value = cena.toFixed(2)
   wprowadzoneCena.innerText = cena.toFixed(2)
}

function obliczKoszty() {
  const spalanie = qs('#spalanie').value;
  const dystans = qs('#dystans').value;
  const cena = qs('#cena').value;

  const wprowadzoneSpalanie = qs('#wprowadzoneSpalanie');
  const wprowadzoneDystans = qs('#wprowadzoneDystans');
  const wprowadzoneCena = qs('#wprowadzoneCena');

  const cenaPaliwa = qs('#cenaPaliwa');

  let zuzytePaliwo = spalanie/100*dystans;
  
  cenaPaliwa.innerText = (zuzytePaliwo*cena).toFixed(2);
  wprowadzoneCena.innerText = cena;
  wprowadzoneDystans.innerText = dystans;
  wprowadzoneSpalanie.innerText = spalanie;
}

window.addEventListener("load", (event) => {
  
  const info = qs('#info');
  
  setTimeout(() => {
    info.classList.remove('info');
    info.classList.add('infoShow'); 
  }, 1000);
  

})

function hideInfo() {
  const info = qs('#info');
  setTimeout(() => {
    info.classList.add('info');
    info.classList.remove('infoShow'); 
  }, 1000);
    
}