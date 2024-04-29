class ToggleValueRepository{
    constructor(communicationService){
        this.communicationService = communicationService;
        this.value = false;
    }

    async getValue(){
        return this.value;
    }

    async setValue(id, value){
        try {
            this.communicationService.sendData(id, value);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }
}

export { ToggleValueRepository };