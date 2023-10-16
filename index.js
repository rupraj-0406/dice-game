// const { doc } = require("mocha/lib/reporters");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let img1 = document.querySelectorAll("img")[0];
let imgLink1 = `images/dice${randomNumber1}.png`;
img1.setAttribute("src", imgLink1);
//-------------------------------------------------------
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let img2 = document.querySelectorAll("img")[1];
let imgLink2 = `images/dice${randomNumber2}.png`;
img2.setAttribute("src", imgLink2);
// -------------------------------------------------------
let h1 = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "Player1 won";
} else if (randomNumber1 === randomNumber2) {
  h1.innerHTML = "Draw this time";
} else {
  h1.innerHTML = "Player2 won";
}
