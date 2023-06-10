//Declara variables globales
let usinaSeleccionada = "";
// let arreglo = [];

//Consume los objetos desde un json externo
const traerDatos = async () => {
  try{
    const response = await fetch("./javaScript/data.json");
    arreglo = await response.json();
  }catch (error){
    alert("Data fetch not working properly");
  }
}

traerDatos();