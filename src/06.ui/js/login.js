import {userLogin} from '/src/00.config/authConfig.js'
import { configureAccess } from './ConfigureAccess.js';


//init user and password
var user = "operator";
var password = "";

// =================================
// Initialise accounts and controls
//==================================

// const userLogin = {
//   operator: { password: "", user: "operator" },
//   supervisor: { password: "1221", user: "supervisor" },
//   maintenance: { password: "3ff4", user: "maintenance" },
// };

// const controls = [
//   //sidebars
//   "setting-section",
//   "selector-section",
//   "joystick-section",
//   //homepage
//   "steps-section",
//   //machine
//   "commands-section",
//   "btn_Charger",
//   //positions
//   "setPosition_toStore",
//   "btn-copyActPosition",
//   "btn-setPositionToStore",
// ];

// var user = "";
// var password = "";

//===============================================
// Login function to check user and password
//===============================================

export function login() {
  //get user and password input
  user = document.getElementById("user").value;
  password = document.getElementById("password").value;

  if (userLogin[user] && userLogin[user].password === password) {
    //set access level
    configureAccess(user);
    //change login button to logout
    // document.getElementById("logButton").children[0].src =
      // "./assets/icons/logout.svg";
    document.getElementById("login-logout").textContent = "Log Out";
    // document.getElementById("login-logout").setAttribute("onclick", "logout()");
    document.getElementById("buttonOpenLogin").textContent = user ;
    // document.getElementById("profileIcon").src =
    //   "./assets/icons/" + user + ".svg";

    //disable inputs
    document.getElementById("user").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("user").style.opacity = 0.5;
    document.getElementById("password").style.opacity = 0.5;
    
    // scroll to section 1 and display messages
    // document.getElementById("logButton").classList.remove("selected");
    // document.getElementById("btn_section1").classList.add("selected");
    // scrollToSection("section1");
    
  } else {
    //display message error
    alert("Invalid user or password");
    //reset pw safety
    document.getElementById("password").value = "";
  }
}

export function logout() {
  //reset data
  user = "operator";
  password = "";
  //reset inputs
  document.getElementById("password").value = "";
  document.getElementById("user").value = "";
  document.getElementById("user").disabled = false;
  document.getElementById("password").disabled = false;
  document.getElementById("user").style.opacity = 1;
  document.getElementById("password").style.opacity = 1;
  //reset login button
  // document.getElementById("logButton").children[0].src =
  //   "./assets/icons/login.svg";
  document.getElementById("login-logout").innerHTML = "Log In";
  // document.getElementById("login-logout").setAttribute("onclick", "login()");
  document.getElementById("buttonOpenLogin").textContent = user;
  // document.getElementById("profileIcon").src = "./assets/icons/operator.svg";

  //reset access level
  configureAccess(user);
  //display message
}


// Configure idle time to logout

let idleTime = 0; // in seconds
let idleLimit = 300; // in seconds
let isTabActive = true; // Assume the tab is active initially
// Reset the idle timer on any of these events
function resetIdleTimer() {
  if (isTabActive) {
    idleTime = 0; // Reset idle time
    // console.log("Idle time reset.");
  }
}

// Increment the idle time counter every second
setInterval(() => {
  if (isTabActive) {
    idleTime++;
    // console.log("Idle time: ", idleTime);
    if (idleTime >= idleLimit) {
      if (user != "operator") {
        alert(`The ${user} user has been inactive for ${idleLimit/60} min, logging out...`);
        logout();
      }
      idleTime = 0; // Reset idle time
    }
  }
}, 1000); // check every second

// Listen for any of the following events to reset the idle timer
window.addEventListener("mousemove", resetIdleTimer);
window.addEventListener("mousedown", resetIdleTimer);
window.addEventListener("click", resetIdleTimer);
window.addEventListener("scroll", resetIdleTimer);
window.addEventListener("keypress", resetIdleTimer);

// Handle tab visibility change
document.addEventListener("visibilitychange", () => {
  isTabActive = !document.hidden;
  if (isTabActive) {
    resetIdleTimer(); // Reset timer if the tab is active
  }
});
