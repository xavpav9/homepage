const navBtn = document.querySelector(".nav-dropdown");
const headerLinks = document.querySelector(".links");
let currentRotation = 0;

navBtn.addEventListener("click", evt => {
  currentRotation += 180;
  navBtn.style.rotate = `${currentRotation}deg`;
  headerLinks.classList.toggle("open");
});
