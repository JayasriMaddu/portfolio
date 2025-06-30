const txt = "Frontend Developer | CSE Student";
let index = 0;
function typeWriter() {
  const typeEl = document.querySelector(".typewriter");
  if (index < txt.length) {
    typeEl.innerHTML += txt.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}
window.onload = typeWriter;

