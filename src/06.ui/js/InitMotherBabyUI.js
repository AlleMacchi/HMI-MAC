import config from "../../00.config/config.js";
import { scrollToSection } from "../component/ButtonsPages.js";
import { actualPositionUI, actualPositionSection2, actualPositionSection3 } from '../component/UpdateDisplayData.js';
import { LegendButton } from '../component/ButtonLegend.js';
import { ButtonMotherCharger } from '../component/ButtonMotherCharger.js';


export function InitMotherBabyUI() {
  updateSettingNavButtonMotherBaby();
  updateMachineImageMotherBaby()
  updateMultiSetLabelsMotherBaby();
  ButtonMotherCharger();
}


function updateMachineImageMotherBaby() {
  // var machineImageMother = document.getElementById("container-Mother-img");
  
  if (config.isMotherShuttle) {
    document.getElementById("container-Baby-img1").style.display = "none";
    document.getElementById("container-Baby-img2").style.display = "none";
    document.getElementById("container-Baby-img3").style.display = "none";
    
    const legendMessage =`
    A: Baby On Board <br>
    B: Baby Limit Left <br>
    C: Baby Limit Right <br>
    D: WiFi Control Activated <br>
    E: Pallet Stop Left <br>
    F: Pallet Stop Right <br>
    G: Pallet Limit Left <br>
    H: Pallet Limit Right <br>
    `;
    LegendButton(legendMessage,0);    
    
  } else {
    document.getElementById("container-Mother-img1").style.display = "none";
    document.getElementById("container-Mother-img1").style.zIndex = "-1";
    // document.getElementById("container-Baby-img2").style.display = "none";
    // document.getElementById("container-Baby-img3").style.display = "none";
    const legendMessage =`
    A: Lifter Up <br>
    B: Liter Down <br>
    C: Pallet detected 1 - Side A - <br>
    D: Pallet detected 2 - Side A - <br>
    E: Pallet detected 1 - Side B - <br>
    F: Pallet detected 2 - Side B - <br>
    G: Mother detected - Side A - <br>
    H: Mother detected - Side B - <br>
    I: Path not Free - Side A - <br>
    L: Path not Free - Side B - <br>
    M: Shuttle on board the mother <br>
    `;
    LegendButton(legendMessage,1);
  }




}

function updateSettingNavButtonMotherBaby() {
  if (config.isMotherShuttle) {
    document.getElementById("section4-Baby").style.display = "none";
    // document.getElementById("section4-Mother").style.display = "block";
    document
      .getElementById("buttonSection4")
      .addEventListener("click", function () {
        actualPositionUI.disableAutoScroll();
        actualPositionSection2.disableAutoScroll();
        actualPositionSection3.disableAutoScroll();
        scrollToSection("section4-Mother");
      });
  } else {
    document.getElementById("section4-Mother").style.display = "none";
    document
      .getElementById("buttonSection4")
      .addEventListener("click", function () {
        actualPositionUI.disableAutoScroll();
        actualPositionSection2.disableAutoScroll();
        actualPositionSection3.disableAutoScroll();
        scrollToSection("section4-Baby");
      });
  }
}

function updateMultiSetLabelsMotherBaby() {
  var multiSetSourcelabel = document.getElementById("sourceLabel");
  var multiSetCopyLabel = document.getElementById("copyLabel");
  var multiSetSourceInput = document.getElementById("sourceInput");
  var multiSetFromInput = document.getElementById("copyFromInput");
  var multiSetToInput = document.getElementById("copyToInput");

  if (config.isMotherShuttle) {
    multiSetSourcelabel.textContent = "Source Column";
    multiSetCopyLabel.textContent = "Copy Column";
    multiSetSourceInput.placeholder = "Col";
    multiSetFromInput.placeholder = "Col";
    multiSetToInput.placeholder = "Col";
  } else {
    multiSetSourcelabel.textContent = "Source Row";
    multiSetCopyLabel.textContent = "Copy Row";
    multiSetSourceInput.placeholder = "Row";
    multiSetFromInput.placeholder = "Row";
    multiSetToInput.placeholder = "Row";
  }
}
