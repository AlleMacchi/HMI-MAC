import {  controls, controlsToDisable} from '/src/00.config/authConfig.js'
export function configureAccess(user) {
    // if no login then operator
    if (user == "") {
      user = "operator";
      document.getElementById("buttonOpenLogin").textContent = user;
    }
  
    //display in coloe access level
    // console.log("Access level: ", user);
  
    // Enable all Controls (from previous interactions)
    controls.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.disabled = false;
        element.style.opacity = 1;
        element.style.pointerEvents = "auto";
        element.style.cursor = "auto";
      }
    });
  
    //Disable controls list based on the user
    // const controlsToDisable = {
    //   operator: [
    //     //sidebars
    //     "selector-section",
    //     "joystick-section",
    //     //homepage
    //     "steps-section",
    //     //machine
    //     "commands-section",
    //     "btn_Charger",
    //     //positions
    //     "setPosition_toStore",
    //     "btn-copyActPosition",
    //     "btn-setPositionToStore",
    //     //settings
    //     "setting-section"
        
    //   ],
    //   supervisor: [
    //     //positions
    //     "setPosition_toStore",
    //     "btn-copyActPosition",
    //     "btn-setPositionToStore",
    //     //machine
    //     "btn_Charger",
    //     //settings
    //     "setting-section"
    //   ],
    //   maintenance: [],
    // };
  
    // Disable buttons based on the user and the realted list
    controlsToDisable[user].forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.disabled = true;
        element.style.opacity = 0.3;
        element.style.pointerEvents = "none";
        element.style.cursor = "not-allowed";
      }
    });
  }