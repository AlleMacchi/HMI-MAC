class ToggleValueUseCase {
    constructor(repository, validator){
        this.repository = repository;
        this.validator = validator;
    }

    async execute(id){
          const currentValue = await this.repository.getValue();
          const newValue = !currentValue;
          return this.repository.setValue(id,newValue);
    }
}

export { ToggleValueUseCase };