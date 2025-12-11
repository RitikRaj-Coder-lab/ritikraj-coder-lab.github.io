// small niceties: year + typer effect
document.getElementById('yr').innerText = new Date().getFullYear();

const lines = [
  '> building: portfolio — initializing...',
  '> loading: projects.json',
  '> ready: view projects below'
];
let i=0, el=document.getElementById('typer');
function typerLoop(){
  el.innerText = lines[i%lines.length];
  i++;
  setTimeout(typerLoop, 2200);
}
typerLoop();
