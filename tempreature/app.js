
function ctof(){
    let output_value = ( parseFloat(celcius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output_value.toFixed(2));
}

function ftoc(){
    let output_value = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celcius.value = parseFloat( output_value.toFixed(2));
}


// the tofixed() method converts number to string or number to string
// the fixedto(2) round to two decimal positions i.e 0.123 = 1.23
