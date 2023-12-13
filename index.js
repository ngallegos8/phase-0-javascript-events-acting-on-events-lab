
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left >= 175) {
      dodger.style.left = `${left + 5}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else {e.key === "ArrowRight"} {
        moveDodgerRight();
    }
  });