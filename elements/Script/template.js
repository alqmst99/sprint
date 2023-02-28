//funciones de captura del objeto data

let templates =(image,name,description, price)=>{
    return ` 
    
    <div class="col">
      <div class="card shadow-sm" id="${name}"> 
        <figure class="img-fluid d-block">
          <img class="img-fluid col-12" src='${image}' alt="'${name}'">
        </figure>

        <div class="card-body">
        <h2>${name}</h2>
          <p class="card-text">${description}</p>
          <p class="card-text">${price}$</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary"><a
                  href="details.html">ver</a></button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>

          </div>
        </div>
      </div>
    </div> `
 }

