var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

console.log(document.querySelector("h2").innerHTML)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Winner is Player 1";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Winner is Player 2";
} else document.querySelector("h2").innerHTML = "Draw Match";