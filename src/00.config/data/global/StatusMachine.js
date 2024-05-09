const statusMachineObject = {
    0: ["Undefined"],
    1: ["Clearing"],
    10: ["Stopped"],
    21: ["Starting"],
    20: ["Idle"],
    40: ["Suspended"],
    30: ["Execute"],
    5: ["Stopping"],
    99: ["Aborting"],
    100: ["Aborted"],
    51: ["Holding"],
    60: ["Held"],
    61: ["Unholding"],
    31: ["Suspending"],
    41: ["Unsuspending"],
    11: ["Resetting"],
    71: ["Completing"],
    80: ["Complete"]
};

export { statusMachineObject};