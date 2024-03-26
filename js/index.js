function index(){
  let seconds = 0;
  let timer;
  const timerElement = document.querySelector(".timer");

  function setStopwatchTime(seconds) {
    const MILLISECONDS = 1000;
    const time = new Date(seconds * MILLISECONDS);
    return time.toLocaleTimeString("pt-br", {
      timeZone: "UTC",
      hour12: false,
    });
  }

  function startTimer() {
    timer = setInterval(() => {
      seconds++;
      timerElement.innerHTML = setStopwatchTime(seconds);
    }, 1000);
  }

  document.addEventListener("click", (e) => {
    button = e.target;

    if (button.classList.contains("play")) {
      timerElement.classList.remove("paused");
      clearInterval(timer);
      startTimer();
    }

    if (button.classList.contains("pause")) {
      clearInterval(timer);
      timerElement.classList.add("paused");
    }

    if (button.classList.contains("stop")) {
      clearInterval(timer);
      timerElement.classList.remove("paused");
      timerElement.innerHTML = "00:00:00";
      seconds = 0;
    }
  });
};

index();
