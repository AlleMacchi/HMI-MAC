class ButtonToggle{
    constructor(id, displayId){        
        this.id = id; 
        this.displayId = displayId;
    }

    isValid() {
        // return typeof this.value === 'number' && this.value >= 0 && this.value <= 100;
        return typeof this.value === 'boolean';
    } 
}

export { ButtonToggle };