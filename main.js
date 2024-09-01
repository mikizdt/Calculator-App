const numBtns = document.getElementsByTagName("button");
const calculatorScreen = document.getElementsByTagName("input");

// Loop through each button and add a click event listener
for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function () {
    const value = this.value; // 'this' refers to the button that was clicked
    console.log(value);
  });
}
