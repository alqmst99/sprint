

 async function createCardP(id_container, dat) {
    let templatep = []
    let eventsp = document.getElementById(id_container)
    let urlApi= 'https://mh.up.railway.app/api/amazing-events'
    let fetchResponse= await fetch(urlApi)
    let response = await fetchResponse.json()
    let concurrent = await response.currentDate

        for (let eventos of dat) {
            if (eventos.date <= concurrent) {
            console.log(templatep.join(''))
            templatep.push(templates(eventos.image, eventos.name, eventos.description, eventos.price, eventos._id, eventos.category))

        }
       
    }
    console.log(templatep);
    eventsp.innerHTML = templatep.join('')
}
