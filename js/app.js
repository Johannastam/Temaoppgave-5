//hente input element med sin egen verdi når man klikker på knappen
const inputElement = document.getElementById ('handleliste');

//knappen, lytter på hendelse (click)
const buttonElement = document.getElementById ('getFood');

//hente fra html result
const resultElement = document.getElementById('result');

buttonElement.addEventListener('click', addName);

window.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
       addName();
    }
});

function addName() {
    const liElement = document.createElement('li');
    if(inputElement.value !== ''){
        liElement.textContent = inputElement.value;
        resultElement.appendChild(liElement);
        inputElement.value ='';

    }
};

changeBox();
IntersectionObserverEntry();