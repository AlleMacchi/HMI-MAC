import { DropupMenu } from '../js/DropupMenu.js'

export function StepSelection(){

    const SelectionSteps = new DropupMenu('buttonSelectionSteps','SelectionSteps', 'selectedOption', 'selectedStep');
    
    return { SelectionSteps };
}