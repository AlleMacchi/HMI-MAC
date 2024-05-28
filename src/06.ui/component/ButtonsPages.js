import { actualPositionUI, actualPositionSection2, actualPositionSection3 } from './UpdateDisplayData.js';




export function scrollToSection(sectionId, callback) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Listen for scroll event to determine when scrolling is completed
    var scrollHandler = function() {
        // Check if the scroll position matches the target section
        if (Math.abs(section.getBoundingClientRect().top) <= 1) {
            // Remove the event listener once the scroll is completed
            window.removeEventListener('scroll', scrollHandler);
            // Execute the callback function
            if (typeof callback === 'function') {
                callback();
            }
        }
    };

    window.addEventListener('scroll', scrollHandler);
}


export function ButtonsPages(){
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
    
    
    document.getElementById("buttonOpenAlarmsPage").addEventListener("click", function() {
        actualPositionUI.disableAutoScroll();
        actualPositionSection2.disableAutoScroll();
        actualPositionSection3.disableAutoScroll();
        scrollToSection("section5");
        document.querySelectorAll(".buttonNavToPages").forEach(button => {
            button.classList.remove("selected");
        });
    });


    document.getElementById("buttonSection1").addEventListener("click", function() {
        
        actualPositionSection2.disableAutoScroll();
        actualPositionSection3.disableAutoScroll();
        scrollToSection("section1", function() {
             actualPositionUI.enableAutoScroll();
             
        //    actualPositionUI.disableAutoScroll();
       //      actualPositionUI.update(1, 20, 1, 28); 
        });
        
        // scrollToSection("section1");
        // actualPositionUI.enableAutoScroll();
    });
    document.getElementById("buttonSection2").addEventListener("click", function() {
        actualPositionUI.disableAutoScroll();
        actualPositionSection2.disableAutoScroll();
        actualPositionSection3.disableAutoScroll();
        scrollToSection("section2");
        
        
    });
    
    document.getElementById("buttonSection3").addEventListener("click", function() {
        actualPositionUI.disableAutoScroll();
        actualPositionSection2.disableAutoScroll();
        actualPositionSection3.disableAutoScroll();
        scrollToSection("section3");
    });
    
    // document.getElementById("buttonSection5").addEventListener("click", function() {
    //     actualPositionUI.disableAutoScroll();
    //     actualPositionSection2.disableAutoScroll();
    //     actualPositionSection3.disableAutoScroll();
    //     scrollToSection("section5");
    // });
    
    document.getElementById("buttonSection6").addEventListener("click", function() {
        actualPositionUI.disableAutoScroll();
        actualPositionSection2.disableAutoScroll();
        actualPositionSection3.disableAutoScroll();
        scrollToSection("section6");
    });
}