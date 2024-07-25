function qs(a){return document.querySelector(a);}
function qsa(a) {return document.querySelectorAll(a);}

function description(id) {
    const description = document.querySelector(`#${id}`);
    const button = description.querySelector('button');
    const text = description.querySelector('#text');

    if (button.style.transform == 'rotate(45deg)') {
        button.style.transform = 'rotate(0deg)';
        button.style.color = 'black';
        text.classList.remove('textVisible');
        text.classList.add('textHidden');  
        
      } else {
        button.style.transform = 'rotate(45deg)';
        button.style.color = 'red';
        text.classList.remove('textHidden');
        text.classList.add('textVisible');
         
        
      }
    
    

}