let eventsp = document.getElementById('event-past');
let concurrent = data.currentDate
let dat = data.events
function createCardP() {
    let templatep = []
    

        for (let eventos of dat) {
            if (eventos.date >= concurrent) {
            console.log(templatep.join(''))
            templatep.push(templates(eventos.image, eventos.name, eventos.description, eventos.price))

        }
       
    }
    console.log(templatep);
    eventsp.innerHTML = templatep.join('')
}
createCardP()