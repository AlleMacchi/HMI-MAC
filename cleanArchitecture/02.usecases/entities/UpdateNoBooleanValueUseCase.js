import { Popup } from '../../99.utils/ui/Popup.js'; 
import { UpdateNoBolleanDisplay } from '../../99.utils/ui/UpdateNoBolleanDisplay.js'; 

class UpdateNoBooleanValueUseCase{
  constructor(repository, entity){
      this.repository = repository;
      this.entity = entity;
  }

  async update(id, displayId){
      const errors = this.entity.validate();
      if (errors.length > 0) {
          const errorMessage = errors.join('<br>');
          Popup.show(errorMessage);
          return;
        }else{
          this.repository.update(id,value);
          UpdateNoBolleanDisplay(this.entity.toString(), displayId);
        }
  }
}

export { UpdateNoBooleanValueUseCase };