"use strict";

console.log("Couleurs :", SUITS);
console.log("Nombre de rangs :", RANKS.length);

const cardsInShoe = RANKS.length * SUITS.length * NUM_DECKS;
console.log("Cartes dans le sabot :", cardsInShoe);

document.querySelector("#status").textContent = "Scripts chargés ✔";