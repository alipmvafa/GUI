function generateVariableDescriptions() {
    var variableCount = parseInt(document.getElementById("variableCount").value);
    var variableDescriptions = document.getElementById("variableDescriptions");
    var variableHtml = "";
    
    if (variableCount < 5) {
        for (var i = 1; i <= variableCount; i++) {
        variableHtml += "x_{" + i + "}";
        
        if (i < variableCount) {
        variableHtml += ", ";
        }
    }
    }else{
        for (var i = 1; i <= 2; i++) {
        variableHtml += "x_{" + i + "}, ";
        }
        variableHtml += "..., ";
        variableHtml += "x_{" + variableCount + "}";
    }
    
    variableDescriptions.innerHTML = "Variables: \\(" + variableHtml + "\\)";
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, variableDescriptions]);
}