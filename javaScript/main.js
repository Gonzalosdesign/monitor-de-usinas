//Declara variables globales
let usinaSeleccionada = "";
let arreglo = [];

//Consume los objetos desde un json externo
const traerDatos = async () => {
  try{
    const response = await fetch("./javaScript/data.json");
    arreglo = await response.json();
    //escucha el evento del select
    let selector = document.getElementById("usinaSelector");
    selector.addEventListener("click", () => {
      
      //Limpia el área de impresión
      let gallery = document.getElementById("gallery");
      gallery.innerHTML = "";
      //filtra los objetos del json según el valor del select
      usinaSeleccionada = document.getElementById("usinaSelector").value;
      console.log(`Usina seleccionada: ${usinaSeleccionada}`);
      let encontrado = arreglo.filter((item) => item.usina == usinaSeleccionada);
      //imprime una card por cada objeto del arreglo filtrado
      encontrado.forEach(item => {
        if (item.motorStatus){
          item.img = "./img/motorON.png";
        }else{
          item.img = "./img/motorOFF.png";
        }
        let card = document.createElement("div");
        card.className = "col-xs-12 col-sm-6 col-md-4";
        card.id = `card${item.id}`;
        card.innerHTML = `
          <div>
            <div class="monitor rounded-2">
              <h3>Terminal: ${item.id}</h3>
              <img src='${item.img}'>
              <button class="btn btn-primary" id="buton${item.id}">Ver más</button>
            </div>
          </div>
        `

        gallery.appendChild(card);
       
        escucharVerMas(`${card.id}`);
  
        // let buton = document.getElementById(`${buton.id}`);
        // console.log(buton);
        
        // buton.addEventListener ("click", ()=>{
        //   card.innerHTML = `
        //   <div>
        //     <div class="monitor rounded-2">
        //       <h3>Terminal: ${item.id}</h3>
        //       <ul>
        //         <li>Ubicación: ${item.name}</li>
        //         <li>Temperatura: ${item.temp}</li>
        //         <li>Voltaje: ${item.volt}</li>
        //         <li>Comentarios: ${item.comment}</li>
        //         <li><img src='${item.img}'></li>
        //       </ul>
        //       <button class="btn btn-primary" id="buton${item.id}">Ver menos</button>
        //     </div>
        //   </div>
        // `
        // });

      });
    });
  }catch (error){
    alert("Data fetch not working properly");
  }
}

traerDatos();