document.addEventListener('DOMContentLoaded'), () => {

    const cardArray = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "red",
        "blue",
        "green",
        "orange",
        "purple"
      ];

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid') 
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []
//create board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('color')
        card.setAttribute('cardArray[]');
        card.setAttribute('data-id', i);
 //   card.addEventListener('click', flipcard)
   grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    let cards = document.querySelectorAll('grid')
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', cardsChosen[0])
        cards[optionTwoId].setAttribute('src', cardsChosen[1])
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', ...)
        cards[optionTwoId].setAttribute('src', ...)
        alert('Sorry, try again')
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2)
    resultDisplay.textContent = 'Congratulations!'
}

//flip your card
function flipCard() {
    car cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId])
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}



createBoard()


})

