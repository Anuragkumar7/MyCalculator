let display = document.getElementById('display');
let expression = '';


let buttons = document.querySelectorAll('.keypad2 button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let value = button.textContent;
    
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      appendValue(value);
    }
  });
});
document.addEventListener('keydown', function(e){
  let key = e.key;
if(/[0-9.+\-*/]|Enter/.test(key)){
if(key === 'Enter'){
  calculate();
}
else{
   appendValue(key);
}

}
if(key === 'Backspace'){
  deleteValue();
}
});
 
function deleteValue(){
  expression = expression.slice(0, -1); // Remove the last character
  display.value = expression;
}

function appendValue(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculate() {

    let result = eval(expression);
    display.value = result;
    expression = result;
  
}
