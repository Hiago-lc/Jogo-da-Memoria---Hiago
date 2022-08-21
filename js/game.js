
const grid = document.querySelector('.grid');


const caracter = [
    '1' ,
    '2' ,
    '3' ,
    '4' ,
    '5' ,
    '6' ,
    '7' ,
    '8' ,
    '9' ,
    '10' ,
];
    


const createElement = (tag,  className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

let firstCard = '';
let secondCard = '';


const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20) {
        alert('Parabéns, você conseguiu');
    }
}

const checkCards = () => {
    const firstCaracter = firstCard.getAttribute('data-caracter');
    const secondCaracter = secondCard.getAttribute('data-caracter');

    if (firstCaracter == secondCaracter) {


        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();



    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500)

       
    }

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }


    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard == '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;


        checkCards();
    }

    
}
 

const createCard = (caracter) => {


    const card = createElement('div' , 'card')
    const front = createElement('div' , 'face front')
    const back = createElement('div' , 'face back')

    front.style.backgroundImage = `url('../Cs/${caracter}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-caracter', caracter)

    return card;




}


const loadGame = () => {
    
    const duplicateCaracter = [ ...caracter, ...caracter ];


    const shuffledArray = duplicateCaracter.sort(() => Math.random() - 0.5);


    duplicateCaracter.forEach((caracter) => {

        const card = createCard(caracter);
        grid.appendChild(card);
    
    });
}

loadGame();