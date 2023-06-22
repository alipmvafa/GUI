function generateTermInputs(equationIndex) {
    var termCount = parseInt(document.getElementById(`termCountInput${equationIndex}`).value);
    var termInputs = document.getElementById(`termInputs${equationIndex}`);
    
    termInputs.innerHTML = "";
    
    for (var i = 1; i <= termCount; i++) {
        var termCoefInput = document.createElement("input");
        termCoefInput.type = "text";
        termCoefInput.placeholder = "Coefficient";
        termCoefInput.name = `termInput${equationIndex}-${i}`;
        termCoefInput.classList.add(`termInput-${i}`);
        var termOrderInput = document.createElement("input");
        termOrderInput.type = "number";
        termOrderInput.placeholder = "Derivative Order";
        termOrderInput.name = `termOrderInput${equationIndex}-${i}`;
        termOrderInput.classList.add(`termOrderInput-${i}`);
        // termOrderInput.setAttribute("onchange", `generateAdditionalInputs(${equationIndex}, ${i})`);
        termOrderInput.addEventListener("change", generateAdditionalInputs.bind(null, equationIndex, i));
        var termComponentInput = document.createElement("input");
        termComponentInput.type = "number";
        termComponentInput.placeholder = "Component number";
        termComponentInput.min = "1"
        termComponentInput.max = parseInt(document.getElementById("componentCount").value)
        termComponentInput.name = `termComponentInput${equationIndex}-${i}`;
        termComponentInput.classList.add(`termComponentInput-${i}`);
        var additionalInputsContainer = document.createElement("span"); // Create container for additional inputs
        additionalInputsContainer.id = `additionalInputs${equationIndex}-${i}`;
        
        
        termInputs.appendChild(termCoefInput);
        termInputs.appendChild(termOrderInput);
        termInputs.appendChild(termComponentInput);
        termInputs.appendChild(additionalInputsContainer); // Append additional inputs container


        if (i<termCount){
            termInputs.appendChild(document.createTextNode(" + ")); // Add a "+" sign after each term
            termInputs.appendChild(document.createElement("br")); // Add a line break after each term
        }else{
            termInputs.appendChild(document.createTextNode(" = 0 ")); // Add a "+" sign after each term
        }     
        

    }
}