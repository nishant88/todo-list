var diceArray = [1,2,3,4,5,6];
/* const PI = 3.14;
let name = "Nishant Guleria";
 */
function randomize() {
    var random = diceArray[Math.floor(Math.random() * diceArray.length)];
    document.getElementById("output").innerHTML = random;
}
