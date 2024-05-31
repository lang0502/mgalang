document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav");
  const audio = document.querySelector(".audio");

  if (window.scrollY >= 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});