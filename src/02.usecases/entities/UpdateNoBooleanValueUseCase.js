import { ShowPopup } from '../../99.utils/ui/Popup.js'; 


class UpdateNoBooleanValueUseCase{
  constructor(repository, entity){
      this.repository = repository;
      this.entity = entity;
  }

    update(id, value) {
        this.entity.id = id;
        this.entity.value = value;

        const errors = this.entity.validate();
      if (errors.length > 0) {
          const errorMessage = errors.join('<br>');
          ShowPopup(errorMessage);
          return;
      } else {
          this.repository.update(id, value);
          ShowPopup('Set Done','Setting');
      }
    }

  
}

export { UpdateNoBooleanValueUseCase };