//for first dice
var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var diceimage = "dice" + randomnumber1 + ".png"; //dice1.png-dice6.png

var imagesource = "images/" + diceimage;

//Now we have to change our image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesource);

//for second dice
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimagesource2 = "images/dice" + randomnumber2 + ".png";
//Now we have to change our image
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource2);

//Now we are gonna change our title based on the dices results
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
