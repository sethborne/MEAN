class Deck {
    constructor() {
        this.deck = [];
        this.discardPile = [];
    }
    reset() {
        this.deck = [];
        let arrayOfSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
        let arrayOfValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

        for (let suit in arrayOfSuits) {
            for (let value in arrayOfValues) {
                this.deck.push(`${arrayOfValues[value]} of ${arrayOfSuits[suit]}`);
            }
        }
        return this;
    }
    shuffle() {
        //fischer yates
        for (let i = this.deck.length - 1; i >= 0; i -= 1) {
            let randomIndex = Math.floor(Math.random() * i + 1);
            console.log(`Decremented Index is ${i} and Value is: ${this.deck[i]}.  Random Index is: ${randomIndex}`);
            let tempSwap = this.deck[randomIndex];
            this.deck[randomIndex] = this.deck[i];
            this.deck[i] = tempSwap;
            console.log(this.deck);
        }
        return this;
    }
    deal() {
        let randomIndex = Math.floor(Math.random() * this.deck.length + 1);
        let dealtCard = this.deck[randomIndex];
        console.log("C " + dealtCard);
        // Player.hand.push(this.deck[randomIndex]);
        if (randomIndex > -1) {
            this.deck.splice(this.deck[randomIndex], 1);
        }
        console.log(this.deck.length);
        return dealtCard;
    }
    discardToPile(card) {
        this.discardPile.push(card);
        console.log("in discard pile " + card);
        console.log(this.discardPile);
        return this;
    }
}
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    draw(deck) {
        // deck.deal();
        this.hand.push(deck.deal());
        return this;
    }
    discard() {
        let cardToDiscard = this.hand[0];
        this.hand.splice(cardToDiscard, 1);
        console.log("TEST " + cardToDiscard);
        console.log(this.discardPile);
        // this.discardPile.push(cardToDiscard);
        return cardToDiscard;
    }
}

let deckTest = new Deck();
console.log(deckTest.reset());
console.log(deckTest.shuffle().shuffle());

let seth = new Player("Seth");
// deckTest.deal().deal();
seth.draw(deckTest).draw(deckTest).draw(deckTest);
console.log(`Player ${seth.name} has the following cards: ` + seth.hand);

deckTest.discardToPile(seth.discard()).discardToPile(seth.discard());
console.log(seth.hand);
console.log(deckTest.discardPile);