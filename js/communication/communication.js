const Communication = {
  
  // Initialization Data Read
  init: async function readHtml() {
    return new Promise((resolve, reject) => {
      this.fetchDataFromPLC()
      resolve()
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Error fetching data: " + textStatus);
        reject(errorThrown);
      });
    });
  },
  
  // Data Read from PLC
  fetchDataFromPLC : function(){ 
    $.getJSON("data/read/IORead.html", function(data){
      console.log(data);
    })
  },

    // Data Read from PLC
    fetchDataFromPLC_2 : function(){ 
      $.getJSON("data/read/IORead_2.html", function(data){
        console.log(data);
      })
    },

    // Data Read from PLC
    fetchDataFromPLC_3 : function(){ 
      $.getJSON("data/read/IORead_3.html", function(data){
        console.log(data);
      })
    }
};





  
  