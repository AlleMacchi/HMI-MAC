class GetInitValuesUseCase{
    constructor(repository){
        this.repository = repository;
    }
  
    async init() {
      try {
        const Data = await this.repository.init();
        console.log(Data);
        return Data;
      } catch (error) {
        throw error;
      }
    }
  
    
  }

  
  export { GetInitValuesUseCase};