


let dat = data.events
let concurrent = data.currentDate

function createCard(id_container, dat) {
    let template = []
   let eventc= document.getElementById(id_container)

        for (let eventos of dat) {
           template.push(templates(eventos.image, eventos.name, eventos.description, eventos.price,  eventos._id, eventos.category))
        
        }
       
    
    
    eventc.innerHTML = template.join('')
}

createCard('event-all', dat);
 
