// Erstelle zwei Zufallszahl zwischen 0 und 100
// Speichere diese jeweils in einer Variable

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"


let randomNumber = Math.random() *100;
    let x = Math.floor(randomNumber);

    let y = Math.floor(randomNumber);

if ((x<y)&&(x<50)){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")

} else if((x<30)||(y<30)){
    console.log("Eine der beiden ist kleiner als 30")

} else if((x<50)&&(y!=50)){
    console.log("Erste Zahl klein, zweite kein 50iger")

} else{
    console.log("nothing is true")
}