//query params
let query= location.search;
let param = new URLSearchParams(query)
let name_query= param.get('name')
let cate_query= param.get('category')
let id_query= param.get('id')




function  templateDetails(each){
    return `
     <div class="container" >
    <div class="card  mb-12 align-self-end aling-item-center">
      <div class="row no-gutters" style="background: linear-gradient(90deg, rgba(226,62,217) 0%, rgba(9,20,168,0.3) 50%, rgba(226,62,217) 100%); border-radius: 10px;">
        <div class="col-md-5 ">
          <img src=${each.image} class="card-img img-fluid" alt=${each.name} >
        </div>
        <div class="col-md-7">
          <div class="card-body">
            
            <h4 class="card-title"><b>Name: </b>${each.name}</h4>
            <h4 class="card-text"><b>Description: </b></h4>
            <p class="card-text"><b>${each.description} </b></p>
            
            <h4 class="card-text"><b>Category: </b> ${each.category} </h4>
            
            <h4 class="card-text"><b>Capacity:</b> ${each.capacity} </h4>
           
            <h4 class="card-text"><b>Price:</b> ${each.price} $</h4>
            <h4 class="card-text"><small class="text-muted">${each.date.substring(0,10)}</small></h4>
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
 async function fetchDetail(){
  let urlApi= 'https://mh.up.railway.app/api/amazing-events'
  let fetchResponse= await fetch(urlApi)
  let response = await fetchResponse.json()

  createDetail('detail', name_query, response.events)
 }
fetchDetail()
console.log(id_query) 