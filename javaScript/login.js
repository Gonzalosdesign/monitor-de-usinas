let adminName = "admin";
let adminPin = "666";
localStorage.setItem("adminName", adminName);
localStorage.setItem("adminPin", adminPin);

function alertaUsuarioIncorrecto(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario incorrecto',
        footer: '<a href="mailto: webmaster@monitordeusinas.com">contact webmaster</a>'
      })
}

// localStorage.clear();
function entrar() {
    let userName = localStorage.getItem("userName");
    let userPin = localStorage.getItem("userPin");
    
    userName == adminName && userPin == adminPin ?
    traerDatos() :
    alertaUsuarioIncorrecto();
}

function escucharForm(){
    let formulario = document.getElementById("form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputs = e.target.children;
        let userName = inputs[0].value;
        let userPin = inputs[1].value;
        localStorage.setItem("userName", userName);
        localStorage.setItem("userPin", userPin);
        entrar();
    })
}
escucharForm();