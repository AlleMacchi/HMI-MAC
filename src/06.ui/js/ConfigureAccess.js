import {  controlsId, controlsIdToDisable, controlsClass, controlsClassToDisable} from '../../00.config/authConfig.js'
export function configureAccess(user) {
    // if no login then operator
    if (user == "") {
      user = "operator";
      document.getElementById("buttonOpenLogin").textContent = user;
    }
    // Ensureing WMS button hidden for all users exepct PRG
    if (user != "PRG") {
      document.getElementById("buttonSection6").style.display = "none";
    }else
    {
      document.getElementById("buttonSection6").style.display = "block";
    }
    
    //display in coloe access level
    // console.log("Access level: ", user);
  
    // Enable all Controls (from previous interactions)
    controlsId.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.disabled = false;
        element.style.opacity = 1;
        element.style.pointerEvents = "auto";
        element.style.cursor = "auto";
      }
    });

    controlsClass.forEach((className) => {
      const elements = document.getElementsByClassName(className);
      for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = false;
        elements[i].style.opacity = 1;
        elements[i].style.pointerEvents = "auto";
        elements[i].style.cursor = "auto";
      }
    });


  
  
    // Disable buttons based on the user and the realted list
    controlsIdToDisable[user].forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.disabled = true;
        element.style.opacity = 0.3;
        element.style.pointerEvents = "none";
        element.style.cursor = "not-allowed";
      }
    });

    controlsClassToDisable[user].forEach((className) => {
      const elements = document.getElementsByClassName(className);
      for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
        elements[i].style.opacity = 0.3;
        elements[i].style.pointerEvents = "none";
        elements[i].style.cursor = "not-allowed";
      }
    });


  }