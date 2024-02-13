let btnLogin = document.getElementById("btnLogin");
let btnRegister = document.getElementById("btnRegister");
let login = document.getElementById("login");
let register = document.getElementById("register");
let btnCloseLogin = document.getElementById("btnCloseLogin");
let btnCloseRegister = document.getElementById("btnCloseRegister");

btnLogin.addEventListener("click", ()=>{
    login.style.display = "flex";
});
btnRegister.addEventListener("click", ()=>{
    register.style.display = "flex";
});
btnCloseLogin.addEventListener("click", ()=>{
    login.style.display = "none";
});
btnCloseRegister.addEventListener("click", ()=>{
    register.style.display = "none";
});