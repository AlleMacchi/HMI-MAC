import { ShowPopup } from '../../99.utils/ui/Popup.js';
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function LegendButton() {
    const element = document.getElementById('buttonOpenLegend');
    const elementUI = new NormalButtonUI(element);
    const title = 'Legend'
    const message = `
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
    element.addEventListener('click', () => ShowPopup(message, title));
    return { element, elementUI };
}
