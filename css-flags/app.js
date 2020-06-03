const readlineSync = require("readline-sync")

let isInRoom = true

while(isInRoom){
    const response = readlineSync.keyInSelect(["sit on floor", "open door"], "what would you like to do? : ")
    if(response === 1){
        isInRoom = false
    } else {
        console.log("sitting on the floor doesn't do you anything")
    }
}

console.log("You've found your way out of the room")