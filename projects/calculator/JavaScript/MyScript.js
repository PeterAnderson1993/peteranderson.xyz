
function no1() {
    document.getElementById("input1").value += "1";
}
function no2() {
    document.getElementById("input1").value += "2";
}
function no3() {
    document.getElementById("input1").value += "3";
}
function no4() {
    document.getElementById("input1").value += "4";
}
function no5() {
    document.getElementById("input1").value += "5";
}
function no6() {
    document.getElementById("input1").value += "6";
}
function no7() {
    document.getElementById("input1").value += "7";
}
function no8() {
    document.getElementById("input1").value += "8"
}
function no9() {
    document.getElementById("input1").value += "9";
}
function no0() {
    document.getElementById("input1").value += "0";
}
function point() {
    document.getElementById("input1").value += ".";
}

function divide() 
{
    var num1 = document.getElementById("input1").value;
    document.getElementById("Calculation").value += num1;
   
    document.getElementById("Calculation").value += " / ";
    document.getElementById("input1").value = "";;
}

function multiply()
{
	var num1 = document.getElementById("input1").value;
    document.getElementById("Calculation").value += num1;
   
    document.getElementById("Calculation").value += " * ";
    document.getElementById("input1").value = "";;
}

function minus()
{
	var num1 = document.getElementById("input1").value;
    document.getElementById("Calculation").value += num1;
   
    document.getElementById("Calculation").value += " - ";
    document.getElementById("input1").value = "";
}


function plus()
{
    var num1 = document.getElementById("input1").value;
    document.getElementById("Calculation").value += num1;
   
    document.getElementById("Calculation").value += " + ";
    document.getElementById("input1").value = "";
}

function equals()
{
    var num2 = document.getElementById("input1").value;
	
    document.getElementById("Calculation").value += num2;
	
	var sum = document.getElementById("Calculation").value;
	
	var result = eval(sum);
	parseInt(result);
	document.getElementById("Calculation").value += " = ";
	
    document.getElementById("input1").value = result;
}

