// This function will display value by clicking on numbers

function display(value) {
    document.getElementById("result").value += value;                    
}

// this function will solve the equation
// the eval() or evaluate function is used to evaluate expression in string or numeric value

function solve() {
    try {
        var result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}


//this function clears the result i.e. C 

function clearresult() {
    document.getElementById("result").value = "";
}
