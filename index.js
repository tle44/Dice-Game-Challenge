//create random number for players
var player1Game = Math.floor(Math.random() * 6) + 1; //player 1

var player2Game = Math.floor(Math.random() * 6) + 1; //player 2

if (player1Game === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (player1Game === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (player1Game === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (player1Game === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (player1Game === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else if (player1Game === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

if (player2Game === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (player2Game === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (player2Game === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (player2Game === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (player2Game === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else if (player2Game === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (player1Game > player2Game) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
} else if (player1Game < player2Game) {
    document.querySelector("h1").innerHTML = "Player 2 Win! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
