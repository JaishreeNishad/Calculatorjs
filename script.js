
function display(value) {
    document.getElementById("result").value += value;// display the value//
}


 function clearValue(){
     document.getElementById("result").value = "";//Clear the display screen//

}

// / This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
   
    var q = eval(p);
    document.getElementById("result").value = q;
}
