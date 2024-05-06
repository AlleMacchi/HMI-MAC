// Function to scroll to the specified section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function ScrollIntoPages(){
    document.querySelectorAll(".buttonNavToPages").forEach(button => {
        button.addEventListener("click", function() {
            // Add "selected" class to the clicked button
            this.classList.add("selected");
    
            // Remove "selected" class from all other buttons
            document.querySelectorAll(".buttonNavToPages").forEach(otherButton => {
                if (otherButton !== this) {
                    otherButton.classList.remove("selected");
                }
            });
        });
    });
    
    
    document.getElementById("buttonSection1").addEventListener("click", function() {
        scrollToSection("section1");
    });
    document.getElementById("buttonSection2").addEventListener("click", function() {
        scrollToSection("section2");
    });
    
    document.getElementById("buttonSection3").addEventListener("click", function() {
        scrollToSection("section3");
    });
    
    document.getElementById("buttonSection4").addEventListener("click", function() {
        scrollToSection("section4");
    });
    
    // document.getElementById("buttonSection5").addEventListener("click", function() {
    //     scrollToSection("section5");
    // });
    
    // document.getElementById("buttonSection6").addEventListener("click", function() {
    //     scrollToSection("section6");
    // });
}