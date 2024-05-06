export function InitUI (){

    var section = document.getElementById("section1");
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    document.querySelectorAll(".buttonNavToPages").forEach(button => {
        button.classList.remove("selected");
    });

    var button = document.getElementById("buttonSection1");
    button.classList.add("selected");
};
