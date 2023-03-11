//captura de datos
 
async function fetchApi(){
    try{ let urlApi= 'https://mh.up.railway.app/api/amazing-events'
    let fetchResponse= await fetch(urlApi)
    let response = await fetchResponse.json()
    let search = document.getElementById('search').value
    let check =  Array.from(document.querySelectorAll('.form-check-input:checked')).map(each => each.value)
    let filter= await response.events.filter(each => {
        return (each.name.includes(search)) && (check.length === 0 || check.includes(each.category)) 
    })
    console.log(filter)
    if (filter.length >0){
       
        createCard('event-all', filter)
       
    }else{
       
        printNon('event-all')
     
    }
}catch(error){
    console.log(error)
}
}
fetchApi()