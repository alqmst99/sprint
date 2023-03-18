//captura de datos del formulario
function eventsFilterCheck(){
    let name= document.getElementById('name').value
    let email=document.getElementById('emailAddress').value
    let meseje=document.getElementById('message').value
   let data ={
    name: name,
    email: email,
    meseje: meseje,

   }
  
 alert('los datos enviados son: \n Nombre: '+ data.name + '\n Email es : ' + data.email + '\n El mensaje es: ' + data.meseje )
}
//creacion del evento
 const captureForm = (event) =>{
    event.preventDefault()
    eventsFilterCheck()
 }
 let submitBottom = document.getElementById('submitButton')
 submitBottom.addEventListener(
    'click',
    captureForm
 )  