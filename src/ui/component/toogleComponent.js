class ToggleComponent {
    constructor(useCase, entity) {
      this.useCase = useCase;
      this.id = entity.id;
      this.element = document.getElementById(entity.id);
      this.input = document.getElementById(entity.displayId);
      
  
      this.element.addEventListener('click', this.onTouchSetValue.bind(this));
      // this.element.addEventListener('touchstart', this.onTouchSetValue.bind(this));
    }
  
    onTouchSetValue(event) {
      event.preventDefault(); 
      const id = this.id;
  
      try {
        this.useCase.execute(id);
        
      } catch (error) {
        console.error('Error setting boolean:', error);
      }
    }
  

  }

  export { ToggleComponent };