import config from "../../00.config/config.js";



export function InitMotherBabyUI() {
    updateMultiSetLabelsMotherBaby();
}




function updateMultiSetLabelsMotherBaby() {
    var multiSetSourcelabel = document.getElementById('sourceLabel');
    var multiSetCopyLabel = document.getElementById('copyLabel');
    var multiSetSourceInput = document.getElementById('sourceInput');
    var multiSetFromInput = document.getElementById('copyFromInput');
    var multiSetToInput = document.getElementById('copyToInput');

    if (config.isMotherShuttle) {
        multiSetSourcelabel.textContent = 'Source Column';
        multiSetCopyLabel.textContent = 'Copy Column';
        multiSetSourceInput.placeholder = 'Col';
        multiSetFromInput.placeholder = 'Col';
        multiSetToInput.placeholder = 'Col';
    } else {
        multiSetSourcelabel.textContent = 'Source Row';
        multiSetCopyLabel.textContent = 'Copy Row';
        multiSetSourceInput.placeholder = 'Row';
        multiSetFromInput.placeholder = 'Row';
        multiSetToInput.placeholder = 'Row';
    }
}

