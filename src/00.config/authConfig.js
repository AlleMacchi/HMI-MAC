// consfigure user logins
const userLogin = {
  operator: { password: "", user: "operator" },
  supervisor: { password: "1221", user: "supervisor" },
  maintenance: { password: "3ff4", user: "maintenance" },
  PRG: { password: "Prg007", user: "PRG" },
};

// configure controls by html id

const controls = [
  "joystick-section",
  "steps-section",
  "commandsLogicalPhysical-sections",
  "buttonSection6"
];

//Configure isable controls list based on the user and controls ids
const controlsToDisable = {
  operator: [
    "selector-section",
    "joystick-section",
    "steps-section",
    "commandsLogicalPhysical-sections",
    "buttonSection6"
  ],
  supervisor: [
    "buttonSection6"
  ],
  maintenance: [
    "buttonSection6"
  ],
  PRG: []
};

export { userLogin, controls, controlsToDisable };
