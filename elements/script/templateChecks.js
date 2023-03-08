let array_cat= []
 dat.forEach((each) =>{
    if(! array_cat.includes(each.category)){
        array_cat.push(each.category)
     
    }
});


function printCheck (_id, array_cat){
    let container= document.getElementById(_id)
    array_cat= array_cat.map(each =>{
        return `
        <div class="form-check form-check-inline col-sm-4  col-md-3  " style="display: inline-block;">
        <input onclick="capture()" class="form-check-input" type="checkbox" name="category" id= "${each}" value= "${each}">
        <label class="form-check-label" for= "${each}" >${each}</label>
      </div>
        `
    })
    array_cat.push(`<input onkeyup="capture()" id="search" class="contact-input col-sm-6 col-md-12" type="text" name="texto" placeholder="search">`)
    container.innerHTML = array_cat.join('')
}
printCheck('check', array_cat)
 