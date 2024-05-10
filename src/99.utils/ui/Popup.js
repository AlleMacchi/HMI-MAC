export function ShowPopup(message, title) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popupTitle');
    const popupMessage = document.getElementById('popupMessage');

    // Check if title is provided, otherwise set it to "WARNING"
    if (title === null || title === undefined ) {
        popupTitle.innerHTML = "WARNING";
    }  else{
        popupTitle.innerHTML = title;
    }
    
    
    popupMessage.innerHTML = message;
    popup.classList.add("open");
    
};