function qs(a){return document.querySelector(a);}
function qsAll(a) {return document.querySelectorAll(a);}

function showKm() {
    km = qs('.km');
    spalanie = qs('#spalanie');

    km.classList.add('show');
    // km.style.display = 'inline';

    spalanie.addEventListener('focusout', () => {
        km.classList.remove('show');
        // km.style.display = 'none';
      });
}