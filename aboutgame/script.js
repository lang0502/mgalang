// This variable stores the "Pick a Color" button.
// This variable stores the "Scrolling Color" button.
const mysteryButton = document.getElementById("next-button");

// This random number function produces a random number up to the limit of "num."
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

// This random color function applies the random number function to an RGB color code with a limit of 255. Next, this function changes the background color of an event target.
function colorChange() {
  const randomColor =
    "rgb(" +
    randomNumber(256) +
    "," +
    randomNumber(256) +
    "," +
    randomNumber(256) +
    ")";
  event.target.style.backgroundColor = randomColor;
}

// The following code applies the colorChange() function to events on the each button target.


window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};

const particles = Particles.init({
  selector: ".background",
  color: ["#ffffff", "#00f0ff", "#c22c94"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 765,
      options: {
        color: ["#433870", "#00f0ff", "#eb5400"],
        maxParticles: 43,
        connectParticles: true
      }
    }
  ]
});