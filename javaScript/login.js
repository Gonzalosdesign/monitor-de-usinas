// localStorage.clear();
let adminUser = { id: 1, nombre: "admin", pin: 666 };
let usuariosStorage = JSON.parse(localStorage.getItem("usuarios"));
let usuarios = [];

//Si las validaciones son correctas emite un mensaj de bienvenida y lama al fetch
function ingresar(usuario){
    usuarios.push(usuario);
    localStorage.setItem("usuariosStorage", JSON.stringify(usuarios));
    //alerta de exito
    Swal.fire({
        position: 'top-start',
        icon: 'success',
        title: `Bienvenid@!`,
        showConfirmButton: true,
        timer: 2000
        });
        //luego de la alerta llama a la función de fetch
        setTimeout(()=>{
            traerDatos();
        }, 2100);
}

//-------------------------------------------------------------
function alertaUsuarioIncorrecto(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario incorrecto',
        footer: '<a href="mailto: webmaster@monitordeusinas.com">contact webmaster</a>'
      })
}
//-------------------------------------------------------------
let signUp = (nombre, pin) => {
        //crea un objeto con los datos del form
        let usuario = {
            id: 1,
            nombre: nombre,
            pin: pin,
        };
        //validación de admin
        usuario.nombre == adminUser.nombre && usuario.pin == adminUser.pin ?
        ingresar(usuario) :
        alertaUsuarioIncorrecto();
};

//-------------------------------------------------------------
//Escucha el vento y pasa los parametros ala función de signUp
function login(){
    let form = document.getElementById("form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        let inputs = e.target.children;
        signUp(inputs[0].value, inputs[1].value);

    });}

// inicia el programa verificando si ya existen usuarios en memoria
//Si es null llama al form para loguearse
//Si ya está almacenado avanza hacia el fetch
function sesion(){
    usuariosStorage == null ?
    login():
    ingresar();
}
sesion();