//Creacion de card upcoming con consumo de API  
async function createCardE(id_container, dat) {
    let urlApi= 'https://mh.up.railway.app/api/amazing-events'
    let fetchResponse= await fetch(urlApi)
    let response = await fetchResponse.json()
    let concurrent = await response.currentDate
    let template = []

    let eventc= document.getElementById(id_container)

         for (let eventos of dat) {
            if (eventos.date >= concurrent) {
                      
            template.push( templates_0(eventos.image, eventos.name, eventos.description, eventos.price, eventos._id, eventos.category))
            }
        }
       
    
    
    eventc.innerHTML = template.join('')
}


 