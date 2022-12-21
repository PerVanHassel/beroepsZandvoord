function updateTimer() {
  future = Date.parse("August 27, 2023 16:00:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer").innerHTML =
    "<div>" +
    d +
    "<span>Dagen</span></div>" +
    "<div>" +
    h +
    "<span>Uur</span></div>" +
    "<div>" +
    m +
    "<span>Minuten</span></div>" +
    "<div>" +
    s +
    "<span>Seconden</span></div>";
}
setInterval("updateTimer()", 1000);

window.addEventListener("scroll", function () {
  let headerMain = document.getElementById("headerMain");

  if (window.pageYOffset > 15) {
    headerMain.classList.add("is-sticky");
  } else {
    headerMain.classList.remove("is-sticky");
  }
});
