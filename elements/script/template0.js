//funciones de captura del objeto data

let templates_0=(image,name,description, price, _id, category)=>{
    return ` 
      <div class="card m2 card-box shadow-sm" id="${name}" style="background: linear-gradient(90deg, rgba(226,62,217) 0%, rgba(9,20,168,0.3) 50%, rgba(226,62,217) 100%); border-radius: 10px;"> 
        <figure class="d-block ">
          <img class="card-img-top img-fit rounded" src='${image}' alt="'${name}'">
        </figure>

        <div class="card-body">
        <h2>${name}</h2>
          <p class="card-text">${description}</p>
          <p class="card-text">${price}$</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-lg btn-outline-primary">
              <a href="./details.html?id=${_id}&&name=${name}&&category=${category}" target="p">ver</a></button>
              
            </div>

          </div>
        </div>
      </div>
     `
 } 

