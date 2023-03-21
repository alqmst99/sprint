//consumo de datos por medio de API y filtro
async function fetchApi2(){
    try{ let urlApi= 'https://mh.up.railway.app/api/amazing-events'
    let fetchResponse= await fetch(urlApi)
    let response = await fetchResponse.json()
    let search = await document.getElementById('search').value
    
    let check =  Array.from( document.querySelectorAll('.form-check-input:checked')).map(each => each.value)
    let filter= await response.events.filter(each => {
        return (each.name.toLowerCase().includes(search.toLowerCase())|| each.category.toLowerCase().includes(search.toLowerCase())) && (check.length === 0 || check.includes(each.category)) 
    })
    console.log(filter)
    if (await filter.length >0){
       
        createCardE('event-card', filter)
       
    }else{
       
        printNon('event-card')
     
    }
}catch(error){
    console.log(error)
}
}
fetchApi2()
