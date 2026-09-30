"use strict";

const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const NUM_DECKS = 6;

function createDeck() {
  const deck = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({ rank, suit });
    }
  }
  return deck;
}

// Mélange de Fisher-Yates, en place : toutes les permutations sont équiprobables.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // entier uniforme dans [0, i]
    [array[i], array[j]] = [array[j], array[i]];   // échange des deux éléments
  }
}

function createShoe(numDecks) {
    const shoe = [];
    for ( let i = 0 ; i < numDecks ; i++){
        const deck = createDeck() ;
        shoe.push (... deck ) ;
    }
    return shoe
}

function drawCard(shoe) {
    return shoe.pop();
}

function needsReshuffle(shoe) {
    return shoe.length < RANKS.length * SUITS.length * NUM_DECKS/4;
}
createShoe(1).length                 // 52
