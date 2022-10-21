let screen = document.getElementById("screen");
const buttons = Array.from(document.querySelectorAll(".inputBtn "));

function runCalculator() {
  //Variable to store text from screen
  var calcValue = "";

  //Clearing the screen function
  const clearCalculator = function () {
    screen.innerHTML = " ";
    calcValue = " ";
  };

  // Iteration loop for buttons
  buttons.map((button) => {
    //adding event listener on each button
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.value === "=") {
        try {
          if (e.target.value / 0) {
            screen.innerHTML = "infinity";
          } else {
            calcValue += screen.innerHTML;
            screen.innerHTML = ` ${calcValue}  =  ${eval(screen.innerHTML)}`;
          }
        } catch {
          screen.innerHTML = "";
          calcValue = " ";
        }
      } else if (e.target.value === "c") {
        clearCalculator();
      } else {
        screen.innerHTML += e.target.value;
        calcValue = "";
      }
    });
  });
}

runCalculator();
