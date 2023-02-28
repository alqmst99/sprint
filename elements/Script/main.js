
//funcion filtro de motor de busqueda
function eventsFilter() {

}



//funcion filtro checkbox
function eventsFilterCheck() {

}


//funcion carga de datos


let eventc= document.getElementById('event-card')
let dat = data.events
let concurrent = data.currentDate

function createCardE() {
    let template = []
   

        for (let eventos of dat) {
            if (eventos.date <= concurrent ) {
            
            template.push(templates(eventos.image, eventos.name, eventos.description, eventos.price))
        }
        }
       
    
    
    eventc.innerHTML = template.join('')
}

createCardE();

//funcion carga detail
function createDetailEvent() {

}
