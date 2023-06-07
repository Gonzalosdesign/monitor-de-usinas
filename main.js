// NEXT


let usinaSeleccionada = "";
let selector = document.getElementById("usinas");
selector.addEventListener("change", () => {
  usinaSeleccionada = document.getElementById("usinas").value;
  alert(usinaSeleccionada);
});


const traerDatos = async () => {
  try{
    const response = await fetch("./data.json");
    const arreglo = await response.json();
    console.log(arreglo);
    console.log(`${arreglo[0].usina}`);
    // trabajar aqui
    /* 
    hace falta implementar bin el FILTER para filtrar los datos y solo traer los de la usina seleccionada
     */

    // let filtrados = arreglo.filter((item) => item.usina === usinaSeleccionada);
    // console.log(filtrados);
    // filtrados.forEach((filtrado) => {
    //   console.log(filtrado.usina);
    // })
//
    arreglo.forEach(item => {
        if (item.motorStatus){
          item.img = "./img/motorON.png";
      }else{
          item.img = "./img/motorOFF.png";
      }
      let card = document.createElement("div");
      card.className = "col-xs-12 col-sm-6 col-md-4";
      card.innerHTML = `
        <div>
          <div class="monitor rounded-2">
            <h3>Terminal: ${item.id}</h3>
            <ul>
              <li>Ubicación: ${item.name}</li>
              <li>Temperatura: ${item.temp}</li>
              <li>Voltaje: ${item.volt}</li>
              <li>Comentarios: ${item.comment}</li>
              <li><img src='${item.img}'></li>
            </ul>
            <button class="btn btn-primary">Ver más</button>
          </div>
        </div>
      `
      gallery.appendChild(card);
    });
  }catch (error){
    alert("error");
  }
}

traerDatos();