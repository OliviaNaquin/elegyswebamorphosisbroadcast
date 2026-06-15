function recursiveAnimateTitle(string, delay, currentIndex = 0) {
  if (currentIndex >= string.length) return;

  let title = document.querySelector("title");
  title.innerHTML = string.substring(0, currentIndex + 1);

  setTimeout(function () {
    recursiveAnimateTitle(string, delay, currentIndex + 1);
  }, delay);
}

function animateTitle(string, initialDelay, restartDelay) {
  document.querySelector("title").innerHTML = "";
  setTimeout(function () {
    recursiveAnimateTitle(string, initialDelay);
  }, 100);
  setTimeout(function () {
    animateTitle(string, initialDelay, restartDelay);
  }, initialDelay * string.length + restartDelay);
}

// Only start the animation in the top-level window
if (window === window.top) {
  animateTitle("e l e g y f o r d r e a m s a n d t r o j a n p l a n e s", 100, 1000);
}