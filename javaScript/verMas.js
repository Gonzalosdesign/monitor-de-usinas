function verMenos (id){
  let botonMENOS = document.getElementById(`boton${id}`);
  botonMENOS.addEventListener("click", ()=>{
    let card = document.getElementById(`card${id}`);
      
    //Condicional define img src segun valor de la propiedad del objeto
    arreglo[id].motorStatus ? img = "./img/motorON.png" : img = "./img/motorOFF.png";
    //cambia el contenido de la card
    card.innerHTML = `
        <div>
          <div class="monitor rounded-2">
            <h3>Terminal: ${id}</h3>
            <img src="${img}">
            <p>Nivel del tanque:</p>
            <hr class="nivel" id="${arreglo[id].nivel}" width="${arreglo[id].nivel}%">
            <button class="btn btn-primary" id="boton${id}">Ver más</button>
          </div>
        </div>
        `
    //lama a la funcion ver mas y le pasa el parametro
    verMas(id);
  })
};

function verMas(id){
  //Escucha el evento del boton y llama a la funcion verMas
  let botonMAS = document.getElementById(`boton${id}`);
  botonMAS.addEventListener("click", () => {
    let card = document.getElementById(`card${id}`);
      
    //Condicional define img src segun valor de la propiedad del objeto
    arreglo[id].motorStatus ? img = "./img/motorON.png" : img = "./img/motorOFF.png";
    //cambia el contenido de la card
    card.innerHTML = `
          <div>
            <div class="monitor rounded-2">
              <h3>Terminal: ${id}</h3>
              <ul>
                <li>Ubicación: ${arreglo[id].ubicacion}</li>
                <li>Temperatura: ${arreglo[id].temp}º</li>
                <li>Voltaje: ${arreglo[id].volt}V</li>
                <li>Presión: ${arreglo[id].presion}Kg/cm2</li>
                <li>Marca: ${arreglo[id].marca}</li>
                <li>Modelo: ${arreglo[id].modelo}</li>
                <li>Comentarios: ${arreglo[id].comment}</li>
                <li>Nivel de tanque: ${arreglo[id].nivel}%</li>
              </ul>
              <img src="${img}">
              <hr class="nivel" id="${arreglo[id].nivel}" width="${arreglo[id].nivel}%">
              <button class="btn btn-primary" id="boton${id}">Ver menos</button>
            </div>
          </div>
          `
    //lama a la funcion ver MENOS y le pasa el parametro
    verMenos(id);
  });
};

        