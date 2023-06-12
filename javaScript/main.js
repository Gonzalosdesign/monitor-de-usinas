//Declara variables globales
let usinaSeleccionada = "";
// let arreglo = [];

//Consume los objetos desde un json externo
const traerDatos = async () => {
  try{
    const response = await fetch("./javaScript/data.json");
    arreglo = await response.json();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Data properly fetched!',
      showConfirmButton: false,
      timer: 1500
    })
  }catch (error){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Data fetch not working properly',
      footer: '<a href="mailto: webmaster@monitordeusinas.com">contact webmaster</a>'
    })
  }
}

traerDatos();