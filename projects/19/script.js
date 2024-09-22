
function approved() {
    const body = qs('body');
    const loginBox = qs('#loginBox');
    const main = qs('main');
    
    body.classList.add('animated');
    
    loginBox.classList.add('loginBoxHide');

    main.style.display = 'flex'
    setTimeout(()=> {
            main.classList.add('mainVisible');
    },2000)

}

function changeLocation(location) {
    location = location;
    
    const biala = qs('.biala');
    const namioty = qs('.namioty');

    const locationText = qs('#locationText');

    const btnBiala = qs('#btnBiala');
    const btnNamioty = qs('#btnNamioty');

    if(location == 'Namioty' && namioty.style.display != 'block') {
        biala.classList.add('bialaHide');

        namioty.style.display = 'block'
        namioty.style.position = 'absolute'
        namioty.style.transition = '1s'
       
        btnBiala.classList.remove('btnActive');
        btnNamioty.classList.add('btnActive');

        setTimeout(()=>{
                biala.style.display = 'none'
                namioty.style.position = 'relative' 
                namioty.classList.remove('namiotyHide')
        }, 500)

    }

    if(location == 'Domki Biała' && biala.style.display != 'block') {
        namioty.classList.add('namiotyHide');

        biala.style.display = 'block'
        biala.style.position = 'absolute'
        biala.style.transition = '1s'
       
        btnBiala.classList.add('btnActive');
        btnNamioty.classList.remove('btnActive');

        setTimeout(()=>{
                namioty.style.display = 'none'
                biala.style.position = 'relative' 
                biala.classList.remove('bialaHide')
        }, 500)

    }

    setTimeout(()=> {
            locationText.innerText = location
    }, 500)

  
}