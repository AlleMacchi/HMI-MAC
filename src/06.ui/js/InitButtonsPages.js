import { TwoButtonPressedToggleByClassWithDisable } from "../../99.utils/ui/TwoButtonPressedToggle.js";

export function InitButtonsPages(){

    var section = document.getElementById("section1");
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    document.querySelectorAll(".buttonNavToPages").forEach(button => {
        button.classList.remove("selected");
    });

    var button = document.getElementById("buttonSection1");
    button.classList.add("selected");


    // Disable Logical Fields on init
    TwoButtonPressedToggleByClassWithDisable('buttonSelectionPhysicalPosition','buttonSelectionLogicalPosition',0);
    TwoButtonPressedToggleByClassWithDisable('buttonSelectionPhysicalPosition','buttonSelectionLogicalPosition',1);
};
