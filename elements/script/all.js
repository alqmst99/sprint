




function createCard(id_container, dat) {
    let templatea = []
   let eventc= document.getElementById(id_container)

        for (let eventos of dat) {
           templatea.push(templates(eventos.image, eventos.name, eventos.description, eventos.price,  eventos._id, eventos.category))
        
        }
       
    
    
    eventc.innerHTML = templatea.join('')
}


 
