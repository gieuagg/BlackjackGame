
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
// there is another way of grabbing an element and it's the folowing
let sumEl = document.querySelector("#sum-el")
//if it refers to a class and not to an id we make the change
//let sumEl = document.querySelector(".sum-el")
let cardEl = document.getElementById("card-el")
//object
let player = {
    name: "Gianna",
    chips: 145
}
let playerEl =  document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//create a new function startGame( that calls renderGame)

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    hasBlackJack = false
    isAlive = true
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: "
   
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += "" + cards[i] + " " 
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 21) {
      message = "Draw card:?🙂"
    }
    else if (sum === 21) {
        message = "Blackjack! 🥳"
        hasBlackJack = true
    }
    else {
        message = "Looser!😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
   // console.log("Drawing a new card from the deck ")
   if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
   }
}

function getRandomCard(){
    //random nums from 1-13
    return Math.floor(Math.random()*13) + 1
}