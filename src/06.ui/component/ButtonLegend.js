import { ShowPopup } from "../../99.utils/ui/Popup.js";
import { NormalButtonUI } from "../js/NormalButtonUI.js";

export function LegendButton(legendMessage,elementN) {
  const element = document.getElementsByClassName("buttonOpenLegend")[elementN];
  const elementUI = new NormalButtonUI(element);
  const title = "Legend";
  const message = legendMessage;
  element.addEventListener("click", () => {
    ShowPopup(message, title);
    console.log("Legend Button Clicked");
  });
  return { element, elementUI };
}
