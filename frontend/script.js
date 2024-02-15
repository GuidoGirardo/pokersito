// window1
let btnLogin = document.getElementById("btnLogin");
let btnRegister = document.getElementById("btnRegister");
let login = document.getElementById("login");
let register = document.getElementById("register");
let btnCloseLogin = document.getElementById("btnCloseLogin");
let btnCloseRegister = document.getElementById("btnCloseRegister");

btnLogin.addEventListener("click", () => {
  login.style.display = "flex";
});
btnRegister.addEventListener("click", () => {
  register.style.display = "flex";
});
btnCloseLogin.addEventListener("click", () => {
  login.style.display = "none";
});
btnCloseRegister.addEventListener("click", () => {
  register.style.display = "none";
});

let enviarLogin = document.getElementById("enviarLogin");
enviarLogin.addEventListener("click", async e => {
  e.preventDefault();

  let name = document.getElementById("loginUsuario").value;
  let password = document.getElementById("loginPassword").value;

  const response = await fetch("http://localhost:3000/startsession", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(await response.text());
  document.getElementById("window2").style.display = "flex";
  document.getElementById("window1").style.display = "none";
  console.log("enviado login!");
});

let enviarRegister = document.getElementById("enviarRegister");
enviarRegister.addEventListener("click", async e => {
  e.preventDefault();

  let name = document.getElementById("registerUsuario").value;
  let password = document.getElementById("registerPassword").value;
  let uniformBankCode = document.getElementById("registerAlias").value;

  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name, password, uniformBankCode
    }),
  })
    .catch((error) => {
      console.error("Error:", error);
    });
 
  console.log("enviado register!", await response.text());
});

// window2
let btnCrearMesaPrivada = document.getElementById("btnCrearMesaPrivada");
let btnUnirseAMesaPrivada = document.getElementById("btnUnirseAMesaPrivada");
let btnCargarSaldo = document.getElementById("btnCargarSaldo");
let btnRetirarSaldo = document.getElementById("btnRetirarSaldo");
let crearMesaPrivada = document.getElementById("crearMesaPrivada");
let unirseAMesaPrivada = document.getElementById("unirseAMesaPrivada");
let cargarSaldo = document.getElementById("cargarSaldo");
let retirarSaldo = document.getElementById("retirarSaldo");
let cerrarCrearMesaPrivada = document.getElementById("cerrarCrearMesaPrivada");
let cerrarUnirseAMesaPrivada = document.getElementById(
  "cerrarUnirseAMesaPrivada"
);
let cerrarCargarSaldo = document.getElementById("cerrarCargarSaldo");
let cerrarRetirarSaldo = document.getElementById("cerrarRetirarSaldo");

btnCrearMesaPrivada.addEventListener("click", () => {
  crearMesaPrivada.style.display = "flex";
});
cerrarCrearMesaPrivada.addEventListener("click", () => {
  crearMesaPrivada.style.display = "none";
});
btnUnirseAMesaPrivada.addEventListener("click", () => {
  unirseAMesaPrivada.style.display = "flex";
});
cerrarUnirseAMesaPrivada.addEventListener("click", () => {
  unirseAMesaPrivada.style.display = "none";
});
btnCargarSaldo.addEventListener("click", () => {
  cargarSaldo.style.display = "flex";
});
cerrarCargarSaldo.addEventListener("click", () => {
  cargarSaldo.style.display = "none";
});
btnRetirarSaldo.addEventListener("click", () => {
  retirarSaldo.style.display = "flex";
});
cerrarRetirarSaldo.addEventListener("click", () => {
  retirarSaldo.style.display = "none";
});

// menu principal
// crear mesa privada
let enviarCrearMesaPrivada = document.getElementById("enviarCrearMesaPrivada");
enviarCrearMesaPrivada.addEventListener("click", (e) => {
  e.preventDefault();
  let codigoCrearMesaPrivada = document.getElementById(
    "codigoCrearMesaPrivada"
  ).value;
  let radioSeleccionado;
  if (document.getElementById("radioOpcion1").checked)
    radioSeleccionado = document.getElementById("radioOpcion1").value;
  else if (document.getElementById("radioOpcion2").checked)
    radioSeleccionado = document.getElementById("radioOpcion2").value;
  else if (document.getElementById("radioOpcion3").checked)
    radioSeleccionado = document.getElementById("radioOpcion3").value;

  console.log(codigoCrearMesaPrivada);
  console.log(radioSeleccionado);
});

// unirse a mesa privada
let enviarUnirseAMesaPrivada = document.getElementById(
  "enviarUnirseAMesaPrivada"
);
enviarUnirseAMesaPrivada.addEventListener("click", (e) => {
  e.preventDefault();
  let idUnirseAMesaPrivada = document.getElementById(
    "idUnirseAMesaPrivada"
  ).value;
  let codigoUnirseAMesaPrivada = document.getElementById(
    "codigoUnirseAMesaPrivada"
  ).value;
  console.log(idUnirseAMesaPrivada);
  console.log(codigoUnirseAMesaPrivada);
});

// cargar saldo
let enviarCargarSaldo = document.getElementById("enviarCargarSaldo");
enviarCargarSaldo.addEventListener("click", (e) => {
  e.preventDefault();
  let cantidadCargarSaldo = document.getElementById(
    "cantidadCargarSaldo"
  ).value;
  console.log(cantidadCargarSaldo);
});

// retirar saldo
let enviarRetirarSaldo = document.getElementById("enviarRetirarSaldo");
enviarRetirarSaldo.addEventListener("click", (e) => {
  e.preventDefault();
  let cantidadRetirarSaldo = document.getElementById(
    "cantidadRetirarSaldo"
  ).value;
  console.log(cantidadRetirarSaldo);
});
