export class DropupMenu {
    constructor(buttonId, menuId) {
      this.button = document.getElementById(buttonId);
      this.menu = document.getElementById(menuId);
      
      this.button.addEventListener("click", this.toggleMenu.bind(this));
      
      document.addEventListener("click", this.closeMenu.bind(this));
    }
    
    toggleMenu() {
      this.menu.classList.toggle("show");
      this.button.setAttribute("aria-expanded", this.menu.classList.contains("show"));
      this.button.classList.add("pressed");
    }
    
    closeMenu(event) {
      if (!this.button.contains(event.target) && !this.menu.contains(event.target)) {
        this.menu.classList.remove("show");
        this.button.setAttribute("aria-expanded", "false");
        this.button.classList.remove("pressed");
      }
    }
  }