// window1
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

let enviarLogin = document.getElementById("enviarLogin");
enviarLogin.addEventListener("click", (e)=>{
    e.preventDefault();

    let loginUsuario = document.getElementById("loginUsuario").value;
    let loginPassword = document.getElementById("loginPassword").value;

    fetch('ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginUsuario: loginUsuario, loginPassword: loginPassword })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    console.log("enviado!");
});