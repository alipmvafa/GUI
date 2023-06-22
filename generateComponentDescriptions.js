function generateComponentDescriptions() {
    var componentCount = parseInt(document.getElementById("componentCount").value);
    var componentDescriptions = document.getElementById("componentDescriptions");
    var componentHtml = "";
    
    if (componentCount < 5) {
        for (var i = 1; i <= componentCount; i++) {
            componentHtml += "y_{" + i + "}";
        
        if (i < componentCount) {
            componentHtml += ", ";
        }
    }
    }else{
        for (var i = 1; i <= 2; i++) {
            componentHtml += "y_{" + i + "}, ";
        }
        componentHtml += "..., ";
        componentHtml += "y_{" + componentCount + "}";
    }
    
    componentDescriptions.innerHTML = "Components: \\(" + componentHtml + "\\)";
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, componentDescriptions]);
}