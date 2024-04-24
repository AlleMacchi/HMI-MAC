var toggle = 0;

const App = {
    init: function(){
        Communication.init();
    }
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    App.init();
    setInterval(function() {
        // Communication.fetchDataFromPLC();  
        if (toggle === 0) {
            Communication.fetchDataFromPLC();
        } else if (toggle === 1) {
            Communication.fetchDataFromPLC_2();
        } else {
            Communication.fetchDataFromPLC_3();
        }
        toggle = (toggle + 1) % 3;
    },500);       
});

