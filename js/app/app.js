import { communicationManager } from '../communication/CommunicationManager.js';  

var toggle = 0;

const App = {
    init: function(){
        communicationManager.init();
    }
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    App.init();
    setInterval(function() {
        communicationManager.fetchData();  
        // if (toggle === 0) {
        //     Communication.fetchDataFromPLC();
        // } else if (toggle === 1) {
        //     Communication.fetchDataFromPLC_2();
        // } else {
        //     Communication.fetchDataFromPLC_3();
        // }
        // toggle = (toggle + 1) % 3;
    },1500);       
});

