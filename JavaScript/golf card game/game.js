function createCard(value, suit){
    return{
        value: value,
        suit: suit,
        isFactUp: false
    };
}

function createDeck(){
    const suits = ['hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = [1, 2, 3, 4, 5, 6, 0, 8, 9, 10, -1, 12, 13];
    // 7= 0, jack= -1, queen= 12, king= 13
    const deck = [];

// loop through suits
for (let i = 0; i < suits.length; i++){
    const suit = suits[i];

// loop though values
for (let j = 0; j < values.length; j++){
    const value = values[j];
    deck.push(createCard(value, suit));
    }
}


return deck;
}

function shuffleDeck(deck){
    for(let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [deck[i], decj[j]] = [deck[j], deck[i]];
    }
}

function createPlayer(name){
    return {
        name: name,
        hand: []
    };
}

