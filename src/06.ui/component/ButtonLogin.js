import { login, logout } from "../js/login.js";

function openLogin() {
  const login = document.getElementById("login");
  login.classList.add("open");
}

export function closeLogin() {
  const login = document.getElementById("login");
  login.classList.remove("open");
}

export function LoginButton() {
  document
    .getElementById("buttonOpenLogin")
    .addEventListener("click", function () {
      openLogin();
    });
  document
    .getElementById("buttonCloseLogin")
    .addEventListener("click", function () {
      closeLogin();
    });
}

document.getElementById("login-logout").addEventListener("click", function () {
  if (document.getElementById("login-logout").textContent == "Log In") {
    login();
    if (document.getElementById("login-logout").textContent == "Log Out") {
      closeLogin();
    }
  } else {
    logout();
  }
});
