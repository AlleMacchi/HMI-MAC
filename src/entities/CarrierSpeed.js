class CarrierSpeed {
    constructor(id, value, unit= '%') {
        this.id = id;
        this.value = value;
        this.unit = unit;
    }

    isValid(){
        return this.value >= 1 && this.value <= 100;
    }

    toString() {
        return `${this.value} ${this.unit}`;
      }
      
}
export { CarrierSpeed };