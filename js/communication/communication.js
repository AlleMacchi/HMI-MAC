const Communication = {
  
  // Initialization Data Read
  init: function(){
    this.fetchDataFromPLC(); 
  },
  
  // Data Read from PLC
  fetchDataFromPLC : function(){ 
    $.getJSON("IORead_Array.html", function(data){
    })
  }

};

  
  