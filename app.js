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

  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀" : "🌙";

  createRadar(isDark); // re-render radar on theme change
});
// ===============================
// NOTHING-STYLE SKILL RADAR
// ===============================

function createRadar(isDark) {
  const ctx = document.getElementById("skillRadar");
  if (!ctx) return;

  // destroy previous chart (important for theme toggle)
  if (window.skillChart) {
    window.skillChart.destroy();
  }

  window.skillChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Python",
        "Cybersecurity",
        "Networking",
        "Linux",
        "Problem Solving",
        "Communication"
      ],
      datasets: [{
        data: [75, 70, 65, 60, 72, 55],
        fill: true,
        backgroundColor: isDark
          ? "rgba(0,255,163,0.15)"
          : "rgba(0,209,255,0.15)",
        borderColor: isDark ? "#00FFA3" : "#00D1FF",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: isDark ? "#00FFA3" : "#00D1FF"
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1400,
        easing: "easeOutQuart"
      },
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          angleLines: {
            color: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"
          },
          grid: {
            color: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"
          },
          pointLabels: {
            color: isDark ? "#BFFFE8" : "#0B1020",
            font: {
              size: 13,
              weight: "600"
            }
          },
          ticks: {
            display: false
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDark ? "#050814" : "#FFFFFF",
          titleColor: isDark ? "#00FFA3" : "#00D1FF",
          bodyColor: isDark ? "#E6ECFF" : "#0B1020",
          borderColor: isDark ? "#00FFA3" : "#00D1FF",
          borderWidth: 1
        }
      }
    }
  });
}

// INITIAL LOAD
createRadar(document.body.classList.contains("dark"));
