let arr = [4, 1, 2, 3];
let sum = 0;

arr.push(17);
arr.push(199);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
    sum = sum + arr[index]
}

console.log("");
console.log("Summe: " + sum);
console.log("");
console.log("Mittelwert: " + sum / arr.length);

console.log("Aufgabe 2:");
console.log("");

let friends = ["Damien", "Dragan", "Raphael"];

friends.push("Ömer");

console.log("Meine Freunde sind " + friends[0] + ", " + friends[1] + ", " + friends[2] + ", " + friends[3]);