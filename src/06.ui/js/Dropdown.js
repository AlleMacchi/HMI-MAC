export class Dropdown {
    constructor(dropdownToggleId, dropdownMenuId, actualPositionInstance) {
        this.dropdownToggle = document.getElementById(dropdownToggleId);
        this.dropdownMenu = document.getElementById(dropdownMenuId);
        this.actualPositionInstance = actualPositionInstance;

        // Function to handle when a dropdown item is clicked
        this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
        // Add click event listener to each dropdown item
        this.addDropdownItemClickEventListeners();
        // Toggle dropdown menu when the button is clicked
        this.dropdownToggle.addEventListener("click", this.toggleDropdownMenu.bind(this));
        // Close the dropdown menu if the user clicks outside of it
        window.addEventListener("click", this.closeDropdownMenu.bind(this));
    }

    handleDropdownItemClick(event) {
        var selectedValue = event.target.getAttribute("data-value");
        this.dropdownToggle.textContent = selectedValue; // Update the button text

        // Update the direction based on the selected value
        this.actualPositionInstance.direction = selectedValue === 'B' ? 1 : 0;
        this.actualPositionInstance.clearChessboard();

        this.dropdownMenu.classList.remove("show"); // Close the dropdown menu
    }

    addDropdownItemClickEventListeners() {
        var dropdownItems = this.dropdownMenu.getElementsByClassName("dropdown-item");
        for (var i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].addEventListener("click", this.handleDropdownItemClick);
        }
    }

    toggleDropdownMenu() {
        this.dropdownMenu.classList.toggle("show");
    }

    closeDropdownMenu(event) {
        event.preventDefault();
        if (!event.target.matches(".dropdown-toggle")) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    }
}

