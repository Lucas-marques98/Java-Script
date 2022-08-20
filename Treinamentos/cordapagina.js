let cores = ["#F00", "#0F0", "#00F", "#FF0", "#0FF", "#F0F", "#000", "#FFF"];
let i = 0;
let timer = setInterval(mudaCorFundo, 1000);
function mudaCorFundo() {
  document.body.style.backgroundColor = cores[i];
  i++;
  if (i >= cores.length) {
    i = 0;
  }
}