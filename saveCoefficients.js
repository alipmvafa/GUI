function saveCoefficients (equationCount, equationInputs) {
    var coefficients = {};

    // Iterate over each equation
    for (var i = 0; i < equationCount; i++) {
        var termCount = parseInt(equationInputs[i].querySelector(".termCountInput").value);

        // Iterate over each term in the equation
        for (var j = 1; j <= termCount; j++) {
            var termCoef = document.querySelector(`input[name=termInput${i}-${j}]`).value;
            var termOrder = document.querySelector(`input[name=termOrderInput${i}-${j}]`).value;
            var termComponent = document.querySelector(`input[name=termComponentInput${i}-${j}]`).value;

            // Check if the term has a derivative order greater than 0
            if (termOrder > 0) {
                var additionalInputs = document.querySelectorAll(`input[name^=additionalInput${i}-${j}-]`);
                var termVars = Array.from(additionalInputs).map(input => input.value);

                // Create or update the coefficient lists for the corresponding derivative order and equation
                if (!coefficients.hasOwnProperty(i+1)) {
                    coefficients[i+1] = {};
                }

                if (!coefficients[i+1].hasOwnProperty(termOrder)) {
                coefficients[i+1][termOrder] = {
                    mIndices: [],
                    mValues: []
                    };
                }

                // Append the term's component and variable indices to the coefficient lists
                coefficients[i+1][termOrder].mIndices.push(`(${termComponent}${termVars.length > 0 ? ", " : ""}${termVars.join(", ")})`);
                coefficients[i+1][termOrder].mValues.push(termCoef);
            } else {
                // Create or update the coefficient lists for the corresponding derivative order and equation
                if (!coefficients.hasOwnProperty(i+1)) {
                    coefficients[i+1] = {};
                }

                if (!coefficients[i+1].hasOwnProperty(termOrder)) {
                coefficients[i+1][termOrder] = {
                    mIndices: [],
                    mValues: []
                    };
                }

                // Append the term's component and variable indices to the coefficient lists
                coefficients[i+1][termOrder].mIndices.push(`(${termComponent})`);
                coefficients[i+1][termOrder].mValues.push(termCoef);
            }
        }
    }

    // Generate the text representation of the coefficients
    var coefficientText = "";
    for (var equationIndex in coefficients) {
        if (coefficients.hasOwnProperty(equationIndex)) {
            var equationCoefficients = coefficients[equationIndex];
            for (var termOrder in equationCoefficients) {
                if (equationCoefficients.hasOwnProperty(termOrder)) {
                    coefficientText += `mIndices_eq${equationIndex}_${termOrder} = ${JSON.stringify(equationCoefficients[termOrder].mIndices).replace(/"/g, "")}\n`;
                    coefficientText += `mValues_eq${equationIndex}_${termOrder} = ${JSON.stringify(equationCoefficients[termOrder].mValues).replace(/"/g, "")}\n`;
                }
            }
        }
    }

    // Save the coefficients to a text file
    var link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(coefficientText);
    link.download = "coefficients.txt";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}