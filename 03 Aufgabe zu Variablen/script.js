let banana = "Banane";
let apple = "Apfel";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let bananAverageWeightInKilo = 0.22;
let appleAverageWeightInKilo = 0.34;

let bananaPricePerPiece = 2.14*0.22;
let applePricePerPiece = 3.43*0.34;


let AnzahlBananenProKilo = 1/bananAverageWeightInKilo
console.log("Anzahl von Bananen pro Kilo: " + AnzahlBananenProKilo);

let AnzahlÄpfelProKilo = 1/appleAverageWeightInKilo
console.log("Anzahl von Äpfeln pro Kilo: " + AnzahlÄpfelProKilo);

console.log("Banane Preis pro Stück: " + bananaPricePerPiece);

console.log("Apfel Preis pro Stück: " + applePricePerPiece);

let eightApples = applePricePerPiece*8
console.log("Acht Äpfel kosten " + eightApples + "€");

let seventeenBananas = bananaPricePerPiece*17
console.log("Siebzehn Bananen kosten " + seventeenBananas + "€");

let oneTonApples = applePricePerKilo*1000
console.log("Eine Tonne Äpfel kostet " + oneTonApples + "€");

let oneTonBananas = bananaPricePerKilo*1000
console.log("Eine Tonne Bananen kostet " + oneTonBananas + "€");