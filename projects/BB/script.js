function qs(selektor) {
    return document.querySelector(selektor);
}


const przyciskAp =    qs('#przyciskAp');
const przyciskDc =    qs('#przyciskDc');
const przyciskKt =    qs('#przyciskKt');

   
    



function discord() {
    const dcMain =      qs('.dcMain');
    const przyciskAp =    qs('#przyciskAp');
    const przyciskDc =    qs('#przyciskDc');
    const przyciskKt =    qs('#przyciskKt');    

    // w przypadku tego if musze uzywac = zamiast ==, nie wiem dlaczego

    if(przyciskDc.style.color = '#faebd7') {
        przyciskAp.style.color = '#f0f8ff';
        przyciskKt.style.color = '#f0f8ff';
    }

    dcMain.style.display = 'block';
    przyciskDc.style.color = '#faebd7';
    
}

function aplikuj() {
    const przyciskAp =    qs('#przyciskAp');
    const przyciskDc =    qs('#przyciskDc');
    const przyciskKt =    qs('#przyciskKt');

    if(przyciskAp.style.color = '#faebd7') {
        przyciskDc.style.color = '#f0f8ff';
        przyciskKt.style.color = '#f0f8ff';
    }
    
    przyciskAp.style.color = '#faebd7';
    
}

// ladowanie



window.onload = function ladowanie() {
    const uc = qs('#uc');
    
    
        uc.innerHTML = 'UNDER CONSTRUCTION.';
        setTimeout(function() {
            uc.innerHTML = 'UNDER CONSTRUCTION..';
            setTimeout(function() {
                uc.innerHTML = 'UNDER CONSTRUCTION...';
            }, 500); 
        }, 500);
        setInterval(ladowanie, 2000)

  
}

