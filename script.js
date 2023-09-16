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
