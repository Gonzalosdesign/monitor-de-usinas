//Declara variables globales
let usinaSeleccionada = "";
// let arreglo = [];

//Consume los objetos desde un json externo
const traerDatos = async () => {
  try{
    const response = await fetch("./javaScript/data.json");
    arreglo = await response.json();
    //alerta de exito
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Data properly fetched!',
      showConfirmButton: false,
      timer: 1500
    })
    //reemplaza el formulario de log in por unas instrucciones basicas para el usuario
    let info = document.getElementById("info");
    info.innerHTML = `
      <h3>Seleccione una Usina</h3>
      <p>Utilice el selector para selecionar una Usina y ver las terminales asociadas</p>
    `
    //llama a la funciçon que escucha los eventos
    eventos();
  }catch (error){
    //alerta de error
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Data fetch not working properly',
      footer: '<a href="mailto: webmaster@monitordeusinas.com">contact webmaster</a>'
    })
  }
}

let titulo = document.getElementById("titulo");
titulo.addEventListener("click", ()=>{
  location.reload();
  sesion();
})