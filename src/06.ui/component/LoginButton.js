function openLogin(){
    const login = document.getElementById('login');
    login.classList.add("open");
};

function closeLogin() {
    const login = document.getElementById('login');
    login.classList.remove("open");   
}

export function LoginButton(){
    document.getElementById("buttonOpenLogin").addEventListener("click", function() {
        openLogin();
    });
    document.getElementById("buttonCloseLogin").addEventListener("click", function() {
        closeLogin();
    });
}