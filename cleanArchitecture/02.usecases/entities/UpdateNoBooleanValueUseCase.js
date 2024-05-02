import { ShowPopup } from '../../99.utils/ui/Popup.js'; 
import { UpdateNoBooleanDisplay } from '../../99.utils/ui/UpdateNoBooleanDisplay.js'; 

class UpdateNoBooleanValueUseCase{
  constructor(repository, entity){
      this.repository = repository;
      this.entity = entity;
  }

  async update(id, displayId, value) {
    this.entity.id = id;
    this.entity.value = value;

    const errors = this.entity.validate();
    if (errors.length > 0) {
        const errorMessage = errors.join('<br>');
        ShowPopup(errorMessage);
        return;
    } else {
        this.repository.update(id, value);
        try {
            const actualValue = await this.repository.findOne(id);
            UpdateNoBooleanDisplay(actualValue, displayId);
        } catch (error) {
            console.error("Error updating display:", error);
        }
    }
  }
  
}

export { UpdateNoBooleanValueUseCase };