var calculation = "";

function addToCalculation(event) {
  calculation += event.target.innerHTML;
  console.log(calculation);
  document.getElementById("sumEquals").innerHTML = calculation;
}

function resetConsoleCalc() {
  console.clear();
  calculation = "";
  document.getElementById("sumEquals").innerHTML = "&nbsp;";
}

function equals() {
  try {
    var calculationEquals = math.evaluate(calculation);
    console.log(calculationEquals);
    calculation = calculationEquals;
    document.getElementById("sumEquals").innerHTML = calculation;
  } catch (error) {
    console.error("Invalid Calculation");
    document.getElementById("sumEquals").innerHTML = "Invalid";
    calculation = "";
  }
}
