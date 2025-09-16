const navBtn = document.querySelector(".nav-dropdown");
const headerLinks = document.querySelector(".links");

navBtn.addEventListener("click", evt => {
  const currentRotation = +getComputedStyle(navBtn).rotate.split("deg")[0];
  navBtn.style.rotate = `${currentRotation + 180}deg`;
  headerLinks.classList.toggle("open");
});
