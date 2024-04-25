function writeToPlc(url, name, val) {
    let sdata=escape(name)+'='+val;
    $.post(url,sdata,function(result){});
}



// Function to get val for btnReset
function getValBool() {
  // Your implementation here
  return true; // Sample return value
}

// Function to get val for btnStart
function getValSpeed() {
  // Your implementation here
  return 10; // Sample return value
}



  var objectList = [
    {
        id: '#btnReset',
        url: "data/write/IOWriteReset.html",
        name: '"HMI_PLC".FromHMI.Command.Reset',
        getValFunc: getValBool
    },
    {
        id: '#btnStart',
        url: "data/write/IOWriteStart.html",
        name: '"HMI_PLC".FromHMI.Command.Start',
        getValFunc: getValBool
    },
    {
        id: '#btnStop',
        url: "data/write/IOWriteStop.html",
        name: '"HMI_PLC".FromHMI.Command.Stop',
        getValFunc: getValBool
    }
    ,
    {
        id: '#btnSpeed',
        url: "data/write/IOWriteCarrierSpeed.html",
        name: '"HMI_PLC".FromHMI.Setting.Carrier.Speed',
        getValFunc: getValSpeed
    }
];


objectList.forEach(function(obj) {
  var button = document.querySelector(obj.id);
  if (button) {
      button.addEventListener('mousedown', function() {
          obj.val = obj.getValFunc(); 
          writeToPlc(obj.url, obj.name, obj.val);
      });

      button.addEventListener('mouseup', function() {
        obj.val = obj.getValFunc(); 
        if (obj.val) {
          obj.val = 0;
          writeToPlc(obj.url, obj.name, obj.val);
        }
      });
  } else {
      console.error("Button not found with ID:", obj.id);
  }
});