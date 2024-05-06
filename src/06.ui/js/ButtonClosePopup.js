function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove("open");   
}

export function ButtonClosePopup(){
    document.getElementById("buttonClosePopup").addEventListener("click", function() {
        closePopup();
    });
}