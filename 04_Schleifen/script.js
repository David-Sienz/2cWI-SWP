// Zähle von 7 bis 45
// Zähle von 9 bis 99
// Zähle rückwärts von 10 bis 0
// Zähle rückwärts von 1234 bis 1207

// Gib Deinen Namen genau 8 mal aus
// Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0


for (let count1 = 7; count1 <= 45; count1++) {
    console.log(count1)
}

console.log("Fertig mit 1.Übung")

for (let count2 = 9; count2 <= 99; count2++) {
    console.log(count2)
}

console.log("Fertig mit 2.Übung")

for (let count3 = 10; count3 >= 0; count3--) {
    console.log(count3)
}

console.log("Fertig mit 3.Übung")

for (let count4 = 1234; count4 >= 1207; count4--) {
    console.log(count4)
}

console.log("Fertig mit 4.Übung")

for (let name = 1; name <= 8; name++) {
    console.log("David")
}

console.log("Fertig mit 5.Übung")

for (let count5 = 1; count5 <= 10; count5++){
    console.log(count5)

    if(count5 === 10){
        console.log("David")
        
        for(let count6=10; count6 >= 0; count6--){
            console.log(count6)
        }
    }
}


