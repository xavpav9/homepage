const randomBtn = document.querySelector(".random button");
const websites = ["minesweeper",
  "countdown",
  "RegExp",
  "forms",
  "odin-recipes",
  "odin-landing-page",
  "odin-rock-paper-scissors",
  "odin-etch-a-sketch",
  "odin-calculator",
  "odin-sign-up-form",
  "stopwatch",
  "3-letters",
]

randomBtn.addEventListener("click", evt => {
  const link = `https://xavpav9.github.io/${websites[Math.floor(Math.random() * websites.length)]}`
  window.open(link, "_blank");
});
