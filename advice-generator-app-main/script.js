const button= document.getElementById('btn');
let head= document.getElementById("head");
let quote= document.getElementById("quote");
const api = "https://api.adviceslip.com/advice";

// fetch the data using Aysnc

const  jame= async () => {
    let request= await fetch(api);
    let data= await request.json()
    let slip= data.slip
   return slip
}
 
button.addEventListener('click', ( ()=>{
    jame().then(data=>{
        let advice= data.advice
        let id= data.id

    // insert to the dom
        head.innerHTML= `#${id}`
        quote.textContent= advice
    }).catch(error=>{
        console.log("can't be found")
    })
}))