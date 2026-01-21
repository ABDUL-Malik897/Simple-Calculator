let screen = document.getElementById("screen");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");

    if (value === "C") {
      screen.innerText = "0";
      return;
    }

    if (value === "=") {
      try {
        screen.innerText = eval(screen.innerText);
      } catch {
        screen.innerText = "Error";
      }
      return;
    }

    if (screen.innerText === "0") {
      screen.innerText = value;
    } else {
      screen.innerText += value;
    }
    if (value === "DEL") {
  if (screen.innerText.length > 1) {
    screen.innerText = screen.innerText.slice(0, -1);
  } else {
    screen.innerText = "0";
  }
  return;
}
  });
});