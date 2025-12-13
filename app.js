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
// DARK MODE TOGGLE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀" : "🌙";
});
// SKILL RADAR CHART
const ctx = document.getElementById('skillRadar');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [
      'Python',
      'Cybersecurity',
      'Networking',
      'Linux',
      'Communication',
      'Problem Solving'
    ],
    datasets: [{
      label: 'Skill Level',
      data: [75, 70, 65, 60, 55, 70],
      fill: true,
      backgroundColor: 'rgba(0, 255, 163, 0.2)',
      borderColor: '#00FFA3',
      pointBackgroundColor: '#00FFA3'
    }]
  },
  options: {
    scales: {
      r: {
        angleLines: { color: 'rgba(255,255,255,0.1)' },
        grid: { color: 'rgba(255,255,255,0.1)' },
        pointLabels: { color: '#9AA4C1' },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});
