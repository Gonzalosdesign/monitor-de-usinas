let arreglo = [
    {
      id: 1,
      name: "Montevideo",
      temp: "18",
      volt: 5,
      comment: "Placa sucia",
      motorStatus: true,
      presion: 50,
      marca: "1",
      modelo: "B",
    },
    {
      id: 2,
      name: "Canelones",
      temp: "14",
      volt: 5,
      comment: "Requiere mantenimiento urgente",
      motorStatus: false,
      presion: 50,
      marca: "2",
      modelo: "A",
    },
    {
      id: 3,
      name: "Colonia",
      temp: "19",
      volt: 5,
      comment: "",
      motorStatus: true,
      presion: 50,
      marca: "1",
      modelo: "A",
    },
    {
      id: 4,
      name: "San José",
      temp: "15",
      volt: 5,
      comment: "Perifericos obsoletos",
      motorStatus: true,
      presion: 50,
      marca: "2",
      modelo: "A",
    },
    {
      id: 5,
      name: "Flores",
      temp: "18",
      volt: 5,
      comment: "",
      motorStatus: true,
      presion: 50,
      marca: "2",
      modelo: "C",
    },
    {
      id: 6,
      name: "Florida",
      temp: "15",
      volt: 5,
      comment: "Ducto averiado",
      motorStatus: false,
      presion: 50,
      marca: "1",
      modelo: "A",
    },
    {
      id: 7,
      name: "Soriano",
      temp: "17",
      volt: 5,
      comment: "",
      motorStatus: true,
      presion: 50,
      marca: "3",
      modelo: "B",
    },
    {
      id: 8,
      name: "Rivera",
      temp: "21",
      volt: 5,
      comment: "",
      motorStatus: true,
      presion: 50,
      marca: "3",
      modelo: "A",
    },
];


function cards(){
    for (const item of arreglo){
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
            <li><a href="#">Ver más</a></li>
          </ul>
        </div>
      </div>
    `
    gallery.appendChild(card);
  }
}

cards();