function capture(){
    let search = document.getElementById('search').value
    let check = Array.from(document.querySelectorAll('.form-check-input:checked')).map(each => each.value)
    let filter= dat.filter(each => {
        return (each.name.includes(search)) && (check.length === 0 || check.includes(each.category)) 
    })
    console.log(filter)
    if (filter.length >0){
     
        createCardP('event-past', filter)
    }else{
    
        printNon('event-past') 
    }
}
