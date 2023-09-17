// Type Writing effect
let title = document.getElementById("maname");
let index = 1;
let name = "-Manohar Kumar";

function typeWriter() {
  let dig = name.slice(0, index);
  title.innerHTML = dig;
  index++;

  if (index > name.length) {
    index = 1;
  }
}
setInterval(typeWriter, 100);

// for toggle effect
var x = document.getElementById("log");
var y = document.getElementById("reg");
// take two type of form
var z = document.getElementById("btn"); // moving button

function register() {
  x.style.left = "-450px";
  y.style.left = "0px";
  z.style.left = "110px";
}
function login() {
  x.style.left = "0px";
  y.style.left = "450px";
  z.style.left = "0px";
}

// for popups
let pop = document.getElementById("popup");

function openlog() {
  pop.classList.add("open-popup");
}
function closelog() {
  pop.classList.remove("open-popup");
}

// for welcome
let we = document.querySelector(".welcome");
function welcome() {
  closelog();
  we.classList.add("welpop");
  document.getElementById("log").reset();
  document.getElementById("reg").reset();
}
function closewel() {
  we.classList.remove("welpop");
}
