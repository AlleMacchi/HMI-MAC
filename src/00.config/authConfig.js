// consfigure user logins
const userLogin = {
  operator: { password: "", user: "operator" },
  supervisor: { password: "1221", user: "supervisor" },
  maintenance: { password: "3ff4", user: "maintenance" },
  PRG: { password: "Prg007", user: "PRG" },
};

// configure controls by html id

const controls = [
  //sidebars
  // "setting-section",
  // "selector-section",
  "joystick-section",
  //homepage
  "steps-section",
  //machine
  "commandsLogicalPhysical-sections",
  // "btn_Charger",
  //positions
  // "setPosition_toStore",
  // "btn-copyActPosition",
  // "btn-setPositionToStore",
  //WMS
  "buttonSection6",
];

//Configure isable controls list based on the user and controls ids
const controlsToDisable = {
  operator: [
    //sidebars
    "selector-section",
    "joystick-section",
    //homepage
    "steps-section",
    //machine
    "commandsLogicalPhysical-sections",
    // "btn_Charger",
    //positions
    // "setPosition_toStore",
    // "btn-copyActPosition",
    // "btn-setPositionToStore",
    //settings
    // "setting-section"
    //WMS
    "buttonSection6",
  ],
  supervisor: [
    //positions
    // "setPosition_toStore",
    // "btn-copyActPosition",
    // "btn-setPositionToStore",
    //machine
    // "btn_Charger",
    //settings
    // "setting-section"
    //WMS
    "buttonSection6",
  ],
  maintenance: [
    //WMS
    "buttonSection6",
  ],
  PRG: [],
};

export { userLogin, controls, controlsToDisable };
