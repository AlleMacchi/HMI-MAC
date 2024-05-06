export function AlarmsButtonUI(){
    var button = document.getElementById("buttonOpenAlarmsPage")
    button.addEventListener("click", function() {
        var section = document.getElementById("section5");
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
        document.querySelectorAll(".buttonNavToPages").forEach(button => {
            button.classList.remove("selected");
        });
    });
};
