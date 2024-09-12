//variables
const displayScreen = document.getElementById("display-screen");
const clearBtn = document.getElementById("clear-btn");
const equalsBtn = document.getElementById("equals-btn");
const calculatorBtns = document.getElementsByTagName("button");

//get value from numbers buttons(on click) to display on screen
for (i = 0; i < calculatorBtns.length; i++) {
  calculatorBtns[i].addEventListener("click", function () {
    displayScreen.innerText += this.value;
  });
}

//eval expression
equalsBtn.addEventListener("click", function () {
  // evaluates expression on displayScreen and returns it with 2 maximun decimal points.
  displayScreen.innerText = eval(displayScreen.innerText).toFixed(2);
});

//clear display screen
clearBtn.addEventListener("click", function () {
  displayScreen.innerText = "";
});
