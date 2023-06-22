function generateEquation (equationIndex, termCount) {
    var equation = "";
    
    for (var i = 1; i <= termCount; i++) {
        var termCoef = document.querySelector(`input[name=termInput${equationIndex}-${i}]`).value;
        var termOrder = document.querySelector(`input[name=termOrderInput${equationIndex}-${i}]`).value;
        var termComponent = document.querySelector(`input[name=termComponentInput${equationIndex}-${i}]`).value;
        if (i > 1 & termCoef > 0) {
        equation += " + ";
        }
        if(termCoef != 1){
            equation += termCoef;
            equation += "\\cdot";
        }
        
        if(termOrder > 0){
            equation += "\\left(\\frac{\\partial^{" ;
            if(termOrder>1){
                equation += termOrder; 
            }
            equation += "} y_{" + termComponent + "}}{";
            // Retrieve additional inputs for the term
            denom = ""
            var additionalInputs = document.querySelectorAll(`input[name^=additionalInput${equationIndex}-${i}-]`);
            additionalInputs.forEach(function(input, index) {
                denom += "\\partial x_{" + input.value + "}";
            });
            equation += denom;
            equation += "}";
            equation += "\\right)";
        }else{
            equation += " y_{" + termComponent + "}";
        }
        
    }
    return equation + " = 0";
}