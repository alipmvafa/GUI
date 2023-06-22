function generateAdditionalInputs(equationIndex, termIndex) {
    var orderInput = document.querySelector(`input[name=termOrderInput${equationIndex}-${termIndex}]`);
    var orderValue = parseInt(orderInput.value);
    // var termInputs = document.getElementById(`termInputs${equationIndex}`);
    // var additionalInputs = document.querySelectorAll(`.additionalInput-${termIndex}`);
    var additionalInputsContainer = document.getElementById(`additionalInputs${equationIndex}-${termIndex}`);
    additionalInputsContainer.innerHTML = "";

    for (var j = 1; j <= orderValue; j++) {
        var additionalInput = document.createElement("input");
        additionalInput.type = "number";
        additionalInput.placeholder = "w.r.t var #";
        additionalInput.min = "1"
        additionalInput.max = parseInt(document.getElementById("variableCount").value)
        additionalInput.name = `additionalInput${equationIndex}-${termIndex}-${j}`;
        additionalInput.classList.add(`additionalInput-${termIndex}`);
        // termInputs.appendChild(additionalInput);
        additionalInputsContainer.appendChild(additionalInput);
    }
}