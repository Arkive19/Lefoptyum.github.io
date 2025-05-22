const slider = document.querySelector(".Slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);
document.addEventListener(`DOMContentLoaded`, () => {
  slider.classList.toggle("fade-in");
  setTimeout(slider.classList.toggle("fade-in"), 2000);
});
