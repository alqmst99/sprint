//template notFound element
function notFound(){
    return ` <div class="grid-aling-center " style="margin-top: 15px; margin-left: 30%">
    <div class="text-center justify-content-center">
        <h1 class="fw-bold">EVENT NOT FOUND</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> The event has not been found.</p>
        <p class="lead">
            The Event you’re looking for doesn’t exist.
          </p>
        <a href="../index.html" class="btn btn-primary">Go Home</a>
    </div>
</div>
    `
}
//creacion nonFound element
function printNon(id_container){
   let con= document.getElementById(id_container)
    con.innerHTML = notFound() 
}
