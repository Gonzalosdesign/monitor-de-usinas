// localStorage.clear();
let usuarios = [{ id: 0, nombre: "admin", pin: 666 }];
localStorage.setItem("usuarios", JSON.stringify(usuarios));

//
let signUp = (nombre, pin) => {
    let usuariosStorage = localStorage.getItem("usuarios");
    let usuarios = JSON.parse(usuariosStorage);

    let usuario = {
        id: usuarios.lenght + 1,
        nombre: nombre,
        pin: pin,
    };

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosStorage));
};

//
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = e.target.children;
    signUp(inputs[0].value, inputs[1].value);
});