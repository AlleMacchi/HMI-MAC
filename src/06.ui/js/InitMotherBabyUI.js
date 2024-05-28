import config from "../../00.config/config.js";
import { scrollToSection } from "../component/ButtonsPages.js";
import { actualPositionUI, actualPositionSection2, actualPositionSection3 } from '../component/UpdateDisplayData.js';

export function InitMotherBabyUI() {
  updateMultiSetLabelsMotherBaby();
  updateSettingNavButtonMotherBaby();
}

function updateSettingNavButtonMotherBaby() {
  if (config.isMotherShuttle) {
    document
      .getElementById("buttonSection4")
      .addEventListener("click", function () {
        actualPositionUI.disableAutoScroll();
        actualPositionSection2.disableAutoScroll();
        actualPositionSection3.disableAutoScroll();
        scrollToSection("section4-Mother");
      });
  } else {
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
