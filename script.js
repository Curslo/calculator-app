//Get calculator display by id
const display = document.getElementById('display');
// Write function to append value to tha calculator display
function appendToDisplay(input) {
    display.value += input;
}
// Function to clear the calculator display
function clearDisplay() {
    display.value = "";
}
// Funtion to caculate the  result and show it on the screen
function calculate() {
    try{
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Syntax Error"
    }
}