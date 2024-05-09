export class DropupMenu {
  constructor(buttonId, menuId, inputId, invisibleInputId) {
    this.button = document.getElementById(buttonId);
    this.menu = document.getElementById(menuId);
    this.input = document.getElementById(inputId);
    this.invisibleInput = document.getElementById(invisibleInputId);
    
    this.button.addEventListener("click", this.toggleMenu.bind(this));
    this.menu.addEventListener("click", this.handleOptionClick.bind(this));
    
    document.addEventListener("click", this.closeMenu.bind(this));
  }
  
  toggleMenu() {
    this.menu.classList.toggle("show");
    this.button.setAttribute("aria-expanded", this.menu.classList.contains("show"));
    this.button.classList.toggle("pressed");
  }
  
  closeMenu(event) {
    if (!this.button.contains(event.target) && !this.menu.contains(event.target)) {
      this.menu.classList.remove("show");
      this.button.setAttribute("aria-expanded", "false");
      this.button.classList.remove("pressed");
    }
  }

  handleOptionClick(event) {
    if (event.target.tagName === "A") {
      const option = event.target.getAttribute("data-option");
      const text = event.target.innerText;
      this.input.value = option + ": " + text.substring(text.indexOf(":") + 2);
      this.invisibleInput.value = option;
      this.toggleMenu();
    }
  }
}
