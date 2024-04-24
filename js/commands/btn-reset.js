$("#btnReset").mousedown(function(){
    url="data/write/IOWriteReset.html";
    name='"HMI_PLC".FromHMI.Command.Reset';
    val=1;
    sdata=escape(name)+'='+val;
    $.post(url,sdata,function(result){});
  });
  
  $("#btnReset").mouseup(function(){
    url="data/write/IOWriteReset.html";
    name='"HMI_PLC".FromHMI.Command.Reset';
    val=0;
    sdata=escape(name)+'='+val;
    $.post(url,sdata,function(result){});
  });