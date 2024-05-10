export function UpdateDisplayBatteryLevel(minLevel,BatteryLevel){
      // Update the battery level indicator
  const batteryLevelElement = document.getElementById("sensorBattery");
  const batteryLabel = document.getElementById("sensorBatteryLabel");
  if (batteryLevelElement) {
    batteryLevelElement.style.width = `${BatteryLevel}%`;
    batteryLabel.textContent = `${BatteryLevel}%`;
    if (BatteryLevel == 100) {
      batteryLabel.style.left = "40%";
      batteryLevelElement.classList.add("activeBatterySensor");
      batteryLevelElement.classList.remove("low-batterySensor");
    } else if (BatteryLevel > minLevel) {
      batteryLabel.style.left = "45%";
      batteryLevelElement.classList.add("activeBatterySensor");
      batteryLevelElement.classList.remove("low-batterySensor");
    } else if(BatteryLevel == 0) {
      batteryLabel.style.left = "45%";
      batteryLevelElement.classList.remove("activeBatterySensor");
      batteryLevelElement.classList.remove("low-batterySensor");
      batteryLevelElement.style.border="0px";
    }else{
        batteryLabel.style.left = "45%";
        batteryLevelElement.classList.remove("activeBatterySensor");
      batteryLevelElement.classList.add("low-batterySensor");
      
    }
  }
}