
let concurrent = data.currentDate
let dat = data.events
function createCardP(id_container, dat) {
    let templatep = []
    let eventsp = document.getElementById(id_container);

        for (let eventos of dat) {
            if (eventos.date >= concurrent) {
            console.log(templatep.join(''))
            templatep.push(templates(eventos.image, eventos.name, eventos.description, eventos.price, eventos._id, eventos.category))

        }
       
    }
    console.log(templatep);
    eventsp.innerHTML = templatep.join('')
}
createCardP('event-past',dat)