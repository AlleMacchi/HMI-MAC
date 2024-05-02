import { ShowPopup } from '../../99.utils/ui/Popup.js'; 

class UpdateBooleanValueUseCase{
  constructor(repository, entity){
      this.repository = repository;
      this.entity = entity;
  }

    update(id, value) {
        this.entity.id = id;
        this.entity.value = value;
        this.repository.update(id, value);
  }
  
}

export { UpdateBooleanValueUseCase };