// let firstcard = getRandomCard();
// let secondcard = getRandomCard();
let player={
    name:"ramesh",
    chip:10

}
let cards = []
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $"+ player.chip
// messageEl.textContent=message
function startGame() {
    isAlive = true
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards[firstcard, secondcard]
    let sum = firstcard + " " + secondcard
    renderGame()
}
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 11)
        return 1;
    else if (randomNumber > 10)
        return 11;
    else
        return randomNumber


}
function renderGame() {
    sumEl.textContent = "sum:" + sum;
    cardsEl.textContent = "cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do You Want To Draw a New Card"
    }
    else if (sum === 21) {
        message = "Wohoo! You Got a BlackJack!!"
        hasBlackJack = true;
    }
    else {
        message = "You're Out Of The Game"
        isAlive = false
    }
    messageEl.textContent = message;
    // sumEl.textContent="sum:"+sum;
    // cardsEl.textContent="cards:"+firstcard+" "+secondcard;

}
function newCard() {
if(isAlive===true && hasBlackJack===false){
    console.log("new card");
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame()
}
    
}


