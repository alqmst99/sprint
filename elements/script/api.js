async function fetchApi(){
    try{ let urlApi= 'https://mh.up.railway.app/api/amazing-events?category'
    let fetchResponse= await fetch(urlApi)
    let response = await fetchResponse.json()
}catch(error){
    console.log(error)
}
}
