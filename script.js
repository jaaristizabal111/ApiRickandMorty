
const tarjetas= document.querySelector(".container")
const selector=document.querySelector("#selector")
selector.addEventListener("change",cambiar)



document.body.onload=() => {consumo("https://rickandmortyapi.com/api/character",false)} 


function cambiar()
{
  let valor=selector.value
  if(valor=="all")
  {
    consumo("https://rickandmortyapi.com/api/character",true)
  }
  else if(valor>0)
  {
  fetch(`https://rickandmortyapi.com/api/character/${valor}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    tarjetas.innerHTML=`
         <div class="card">
        <h2 id="name">${data.name}</h2>
        <img id="imagen"src="${data.image}" alt="">
        <p id="status" >${data.status}</p>
        </div>`
  })

  }
  else
  {
    consumo("https://rickandmortyapi.com/api/character",false)
  }

}
function consumo(url,bandera)
{
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    const arreglo=data.results
    arreglo.map((element) =>
    {
      
      if(bandera==false)
      {
        console.log("entro")
        selector.innerHTML+=`
        <option value="${element.id}">${element.name}</option>
        `
      }
      else
      {
        tarjetas.innerHTML+=`
         <div class="card">
        <h2 id="name">${element.name}</h2>
        <img id="imagen"src="${element.image}" alt="">
        <p id="status" >${element.status}</p>
        </div>`
      }
    }) 

  })
}






