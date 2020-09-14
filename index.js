
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")




//document.querySelector("#rollagain").onclick = function() {myFunction();};
    



    if (randomNumber1 > randomNumber2) {
        document.querySelector("H1").textContent = "Stefanie misses Chance more!";
     } else if (randomNumber1 == randomNumber2) {
         document.querySelector("H1").textContent = "Stefanie and Chance miss each other the same amount.";
     } else {
         document.querySelector("H1").textContent = "Chance misses Stefanie more!";
     }
    