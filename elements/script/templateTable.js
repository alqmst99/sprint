function templateTable1(max, min, capasidad, nombre, nombre2, nombre3) {
  return ` <table class="table table-striped">
    <table class="table">
        <thead >
          <tr>
            <th scope="colgroup"><h1>Events Statistics</h1></th>
            
          </tr>
        </thead>  
        <tbody>
          <tr>
           
            <td><b>Event with highest percentage</td>
            <td><b>Event with lowest percentage</td>
            <td><b>Event with larger capacity</td>
          </tr>
          <tr>
            
            <td><i>${nombre.name} </td>
            <td><i>${nombre2.name} </td>
            <td><i>${nombre3.name} </td>
          </tr>
        
          <tr>
           
            <td><b>${max} </td>
            <td><b>${min} </td>
            <td><b>${capasidad} </td>
          </tr>
          
        </tbody>
        
         
      </table>
</table>
    `
}

function templateTable2(par, par1, par2, par3, par4, par5) {
  return ` <table class="table table-striped">
    <table class="table">
 <thead>
  <tr>
    <th scope="col"><h3>Upcoming event statistics category</h3></th>
    </tr>
</thead>
<tbody>
  <tr>   
    <td><b>Categories</td>
    <td><b>Revenues</td>
    <td><b>Persentage of attendance</td>
  </tr>
  <tr>
    <td>${par.category}</td>
    <td>$${par.ganacia} </td>
    <td>${((par.estimate_total*100)/par.capacity_total).toFixed(1)}%</td>
  </tr>
  <tr>
   <td>${par1.category} </td>
  <td>$${par1.ganacia}</td>
  <td>${((par1.estimate_total*100)/par1.capacity_total).toFixed(1)}%</td>
</tr>
<tr>
   
<td>${par2.category} </td>
<td>$${par2.ganacia}</td>
<td>${((par2.estimate_total*100)/par2.capacity_total).toFixed(1)}%</td>
</tr>
<tr>
   
<td>${par3.category} </td>
<td>$${par3.ganacia}</td>
<td>${((par3.estimate_total*100)/par3.capacity_total).toFixed(1)}%</td>
</tr>
<tr>
   
<td>${par4.category} </td>
<td>$${par4.ganacia}</td>
<td>${((par4.estimate_total*100)/par4.capacity_total).toFixed(1)}%</td>%
<tr>
   
<td>${par5.category} </td>
<td>$${par5.ganacia}</td>
<td>${((par5.estimate_total*100)/par5.capacity_total).toFixed(1)}%</td>
</tr>
<tr>

</tbody>
</thead>
</table>
</table>`
}
function templateTable3(par, par1, par2, par3, par4, par5, par6) {
  return `<table class="table table-striped">
  <table class="table">
<thead>
<tr>
<th scope="col"><h3>Past event statistics category</h3></th> 
  
</tr>
</thead>
<tbody>
<tr>
 
  <td><b>Categories</td>
  <td><b>Revenues</td>
  <td><b>Persentage of attendance</td>
</tr>
<tr>
 
  <td>${par.category}</td>
  <td>$${par.ganacia} </td>
  <td>${((par.estimate_total*100)/par.capacity_total).toFixed(1)}%</td>
</tr>
<tr>
 
<td>${par1.category} </td>
<td>$${par1.ganacia}</td>
<td>${((par1.estimate_total*100)/par1.capacity_total).toFixed(1)}%</td>
</tr>
<tr>
 
<td>${par2.category} </td>
<td>$${par2.ganacia}</td>
<td>${((par2.estimate_total*100)/par2.capacity_total).toFixed(1)}%</td>
</tr>
<tr>
 
<td>${par3.category} </td>
<td>$${par3.ganacia}</td>
<td>${((par3.estimate_total*100)/par3.capacity_total).toFixed(1)}%</td>
</tr>
<tr>
 
<td>${par4.category} </td>
<td>$${par4.ganacia}</td>
<td>${((par4.estimate_total*100)/par4.capacity_total).toFixed(1)}%</td>%
<tr>
 
<td>${par5.category} </td>
<td>$${par5.ganacia}</td>
<td>${((par5.estimate_total*100)/par5.capacity_total).toFixed(1)}%</td>
</tr>
<tr>
<td>${par6.category} </td>
<td>$${par6.ganacia}</td>
<td>${((par6.estimate_total*100)/par6.capacity_total).toFixed(1)}%</td>
</tr>
<tr>

</tbody>
</thead>
</table>
</table>`
}


function createTable(id, max, min, capasidad, nombre, nombre2, nombre3) {
  let container2 = document.getElementById(id)
  let table = templateTable1(max, min, capasidad, nombre, nombre2, nombre3)

  container2.innerHTML = table

}
function createTable2(id,par, par1, par2, par3, par4, par5) {
  let container2 = document.getElementById(id)
  let table = templateTable2(par, par1, par2, par3, par4, par5)

  container2.innerHTML = table

}
function createTable3(id, par, par1, par2, par3, par4, par5,par6) {
  let container2 = document.getElementById(id)
  let table = templateTable3(par, par1, par2, par3, par4, par5, par6)

  container2.innerHTML = table


}

async function fetchTable1() {
  try {
    let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
    let fetchResponse = await fetch(urlApi)
    let response = await fetchResponse.json()
    let event_max = []
    await response.events.reduce((acc, event) => { return event_max.push(event.assistance) })
    let max = Math.max(...event_max)
    let event_min = []
    await response.events.reduce((acc, each) => { return event_min.push(each.assistance) })
    let min = Math.min(...event_min)
    let capasity = []
    await response.events.reduce((acc, each) => capasity.push(each.capacity))
    let max_c = Math.max(...capasity)

    let nombre = await response.events.find(each => {
      if (each.assistance === max) {
        return each.name
      }
    })

    let nombre2 = await response.events.find(each => {
      if (each.assistance === min) {
        return each.name
      }
    })
    let nombre3 = await response.events.find(each => {
      if (each.capacity === max_c) {
        return each.name
      }
    })
    createTable('table', max, min, max_c, nombre, nombre2, nombre3)

  } catch (error) {
    console.log(error)
  }
}


async function fetchTable3() {
  try {
    let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=upcoming&&category=Party'
    let fetchResponse = await fetch(urlApi)
    let response = await fetchResponse.json()
    let par = await response.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.estimate= e.estimate
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.estimate
      obj_acc.ganacia= a.ganacia + obj_acc.estimate*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})
   
    let urlApi1 = 'https://mh.up.railway.app/api/amazing-events?time=upcoming&&category=Cinema'
    let fetchResponse1 = await fetch(urlApi1)
    let response1 = await fetchResponse1.json()
    let par1 = await response1.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.estimate= e.estimate
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.estimate
      obj_acc.ganacia= a.ganacia + obj_acc.estimate*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})

    let urlApi2 = 'https://mh.up.railway.app/api/amazing-events?time=upcoming&&category=Books'
    let fetchResponse2 = await fetch(urlApi2)
    let response2 = await fetchResponse2.json()
    let par2 = await response2.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.estimate= e.estimate
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.estimate
      obj_acc.ganacia= a.ganacia + obj_acc.estimate*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})
    let urlApi3 = 'https://mh.up.railway.app/api/amazing-events?time=upcoming&&category=Race'
    let fetchResponse3 = await fetch(urlApi3)
    let response3 = await fetchResponse3.json()
    let par3 = await response3.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.estimate= e.estimate
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.estimate
      obj_acc.ganacia= a.ganacia + obj_acc.estimate*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})
    let urlApi4 = 'https://mh.up.railway.app/api/amazing-events?time=upcoming&&category=Concert'
    let fetchResponse4 = await fetch(urlApi4)
    let response4 = await fetchResponse4.json()
    let par4 = await response4.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.estimate= e.estimate
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.estimate
      obj_acc.ganacia= a.ganacia + obj_acc.estimate*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})

    let urlApi5 = 'https://mh.up.railway.app/api/amazing-events?time=upcoming&&category=Museum'
    let fetchResponse5 = await fetch(urlApi5)
    let response5 = await fetchResponse5.json()
    let par5 = await response5.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.estimate= e.estimate
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.estimate
      obj_acc.ganacia= a.ganacia + obj_acc.estimate*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})



    
    console.log(par, par1, par2, par3, par4, par5)
   
    createTable2('table2',par, par1, par2, par3, par4, par5)

  } catch (error) {
    console.log(error)
  }
}

async function fetchTable4() {
  try {
    let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past&&category=Party'
    let fetchResponse = await fetch(urlApi)
    let response = await fetchResponse.json()
    let par = await response.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.assistance= e.assistance
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.assistance
      obj_acc.ganacia= a.ganacia + obj_acc.assistance*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})
   
    let urlApi1 = 'https://mh.up.railway.app/api/amazing-events?time=past&&category=Cinema'
    let fetchResponse1 = await fetch(urlApi1)
    let response1 = await fetchResponse1.json()
    let par1 = await response1.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.assistance= e.assistance
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.assistance
      obj_acc.ganacia= a.ganacia + obj_acc.assistance*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})

    let urlApi2 = 'https://mh.up.railway.app/api/amazing-events?time=past&&category=Books'
    let fetchResponse2 = await fetch(urlApi2)
    let response2 = await fetchResponse2.json()
    let par2 = await response2.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.assistance= e.assistance
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.assistance
      obj_acc.ganacia= a.ganacia + obj_acc.assistance*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})
    let urlApi3 = 'https://mh.up.railway.app/api/amazing-events?time=past&&category=Race'
    let fetchResponse3 = await fetch(urlApi3)
    let response3 = await fetchResponse3.json()
    let par3 = await response3.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.assistance= e.assistance
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.assistance
      obj_acc.ganacia= a.ganacia + obj_acc.assistance*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})
    let urlApi4 = 'https://mh.up.railway.app/api/amazing-events?time=past&&category=Concert'
    let fetchResponse4 = await fetch(urlApi4)
    let response4 = await fetchResponse4.json()
    let par4 = await response4.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.assistance= e.assistance
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.assistance
      obj_acc.ganacia= a.ganacia + obj_acc.assistance*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})

    let urlApi5 = 'https://mh.up.railway.app/api/amazing-events?time=past&&category=Museum'
    let fetchResponse5 = await fetch(urlApi5)
    let response5 = await fetchResponse5.json()
    let par5 = await response5.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.assistance= e.assistance
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.assistance
      obj_acc.ganacia= a.ganacia + obj_acc.assistance*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})

    let urlApi6 = 'https://mh.up.railway.app/api/amazing-events?time=past&&category=Food'
    let fetchResponse6 = await fetch(urlApi6)
    let response6 = await fetchResponse6.json()
    let par6 = await response6.events.reduce((a, e)=>{
      obj_acc={}
      obj_acc.assistance= e.assistance
      obj_acc.category=e.category
      obj_acc.capacity= e.capacity
      obj_acc.price= e.price
      obj_acc.estimate_total= a.estimate_total + obj_acc.assistance
      obj_acc.ganacia= a.ganacia + obj_acc.assistance*obj_acc.price
      obj_acc.capacity_total= a.capacity_total + obj_acc.capacity
 return obj_acc
    },{estimate_total:0, ganacia:0, capacity_total:0})

    
    console.log(par, par1, par2, par3, par4, par5, par6)
   
    createTable3('table3',par, par1, par2, par3, par4, par5, par6)

  } catch (error) {
    console.log(error)
  }
}
fetchTable1()
fetchTable3()
fetchTable4()