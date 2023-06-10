function escucharVerMas(id){
  let buton = document.getElementById(`buton${id}`);
  buton.addEventListener ("click", ()=>{
    alert("funciona");
    let card = document.getElementById(`card.${card.id}`)
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
          <button class="btn btn-primary" id="buton${item.id}">Ver menos</button>
        </div>
      </div>
    `
    });
}
