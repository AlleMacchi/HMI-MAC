import { communicationManager } from '../communication/CommunicationManager.js';  

var toggle = 0;

const App = {
    init: function(){
        communicationManager.init();
    },
    readData: function(){
        setInterval(function() {
            communicationManager.fetchData();  
        },1000);   
    }
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    App.init();
    App.readData();
});

