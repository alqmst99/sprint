//template  checks and search y creacion de checks and search
function printCheck3(_id, array_cat) {
    let container = document.getElementById(_id)
    array_cat = array_cat.map(each => {
        return `
        <div class="form-check form-check-inline col-sm-4  col-md-3  " style="display: inline-block;">
        <input onclick="fetchApi3()" class="form-check-input" type="checkbox" name="category" id= "${each}" value= "${each}">
        <label class="form-check-label" for= "${each}" >${each}</label>
      </div>
        `
    })
    array_cat.push(`<input onkeyup="fetchApi3()" id="search" class="contact-input col-sm-6 col-md-12" type="text" name="texto" placeholder="search">`)
    container.innerHTML = array_cat.join('')
}
//Cosnumo de API y creacion del array para checks
async function fetchApi3() {
    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?category'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
       
      
        let array_cat = []
       await response.events.forEach((each) => {
            if (!array_cat.includes(each.category)) {
                array_cat.push(each.category)

            }
        })
        printCheck3('check', array_cat)
       
    }
    catch (error) {
        console.log(error)
    }

}
fetchApi3()
