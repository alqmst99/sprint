//query params
let query= location.search;
let param = new URLSearchParams(query)
let name_query= param.get('name')
let cate_query= param.get('category')
let id_query= param.get('_id')

let dat = data.events


function  templateDetails(each){
    return `
     <div class="container" >
    <div class="card  mb-12 align-self-end aling-item-center">
      <div class="row no-gutters" style="background: linear-gradient(90deg, rgba(226,62,217) 0%, rgba(9,20,168,0.3) 50%, rgba(226,62,217) 100%); border-radius: 10px;">
        <div class="col-md-5 ">
          <img src=${each.image} class="card-img-top img-fit" alt=${each.name} >
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h2 class="card-title">${each.name} </h2>
            <p class="card-text"><b>${each.description} </b></p>
            <h5 class="card-text">${each.category} </h5>
            <p class="card-text">${each.price} $</p>
            <p class="card-text"><small class="text-muted">${each.date}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div> `
}
// cretaeDetail pide de ingreso,el id de la etiqueta contenedor, la query que se captura, y el array de los datos
function createDetail(id_container, querys, dat){
    let container= document.getElementById(id_container)  
    movie = dat.find(each => each.name === querys)
    let details= templateDetails(movie)
    
   container.innerHTML = details
   console.log(details)
}
createDetail('detail', name_query, dat)
console.log(dat._id)