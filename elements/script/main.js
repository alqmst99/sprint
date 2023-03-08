bt= document.getElementById("submitButton")

//funcion filtro de motor de busqueda
function eventsFilter() {

}



//funcion filtro checkbox
function eventsFilterCheck() {

alert("se a tocado el boton")
}


//funcion carga de datos



let dat = data.events
let concurrent = data.currentDate

function createCardE(id_container, dat) {
    let template = []
    let eventc= document.getElementById(id_container)

        for (let eventos of dat) {
            if (eventos.date <= concurrent ) {
            
            template.push(templates(eventos.image, eventos.name, eventos.description, eventos.price, eventos._id, eventos.category))
        }
        }
       
    
    
    eventc.innerHTML = template.join('')
}

createCardE('event-card', dat); 

 