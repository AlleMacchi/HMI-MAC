class GetValuesUseCase{
    constructor(repository){
        this.repository = repository;
    }
  
    async findAll() {
      try {
        return await this.repository.findAll();
      } catch (error) {
        throw error;
      }
    }
  
    
  }

  
  export { GetValuesUseCase};