    //escucha el evento del select
    let selector = document.getElementById("usinaSelector");
    selector.addEventListener("click", () => {
      
        //Limpia el área de impresión
        let gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
      
        //filtra los objetos del json según el valor del select
        usinaSeleccionada = document.getElementById("usinaSelector").value;
        // console.log(`Usina seleccionada: ${usinaSeleccionada}`);
        let encontrado = arreglo.filter((item) => item.usina == usinaSeleccionada);
      
        //imprime una card por cada objeto del arreglo filtrado
        encontrado.forEach(item => {

        //Condicional define img src segun valor de la propiedad del objeto
        item.motorStatus ? item.img = "./img/motorON.png" : item.img = "./img/motorOFF.png";
        //crea una card por cada objeto
        let card = document.createElement("div");
        card.className = "col-xs-12 col-sm-6 col-md-4";
        card.id = `card${item.id}`;
        card.innerHTML = `
          <div>
            <div class="monitor rounded-2">
              <h3>Terminal: ${item.id}</h3>
              <img src='${item.img}'>
              <button class="btn btn-primary" id="boton${item.id}">Ver más</button>
            </div>
          </div>
        `
        //añade la card al DOM
        gallery.appendChild(card);
        //llama a la funcion verMas y le pasa el parametro
        verMas(item.id);
      });
    });