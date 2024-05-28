// consfigure user logins
const userLogin = {
  operator: { password: "", user: "operator" },
  supervisor: { password: "1221", user: "supervisor" },
  maintenance: { password: "3ff4", user: "maintenance" },
  PRG: { password: "Prg007", user: "PRG" },
};

// configure controls by html id which allow the enable

const controlsId = [
  "steps-section",
  "buttonSection6",
  "setting-section",
  "btn_Charger",
  "WMSform1",
];


const controlsClass = [
  "joystick-section",
  "commandsLogicalPhysical-sections",
];


//Configure isable controls list based on the user and controls ids
const controlsIdToDisable = {
  operator: [
    "steps-section",
    "buttonSection6",
    "setting-section",
    "btn_Charger",
    "WMSform1"
  ],
  supervisor: [
    "buttonSection6",
    "setting-section",
    "btn_Charger",
    "WMSform1"
  ],
  maintenance: [
    "buttonSection6"
  ],
  PRG: []
};


const controlsClassToDisable = {
  operator: [
    "joystick-section",
    "commandsLogicalPhysical-sections",
  ],
  supervisor: [],
  maintenance: [],
  PRG: []
};

export { userLogin, controlsId, controlsIdToDisable, controlsClass, controlsClassToDisable};
