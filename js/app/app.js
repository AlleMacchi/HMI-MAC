const App = {
    init: function(){
        Communication.init();
    }
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    App.init();
    setInterval(function() {
        Communication.fetchDataFromPLC();  
    },1500);       
});
