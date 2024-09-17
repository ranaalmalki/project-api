let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/Artical"

let title_artical_input= document.getElementById("title-artical-input") 
let content_input=document.getElementById("content-input")
let uploud_image=document.getElementById("uploud-image")
let form= document.getElementById("formid")

form.addEventListener("submit",(event)=>{

fetch(url, {
method: 'POST',
body:JSON.stringify({
    title_artical:title_artical_input.value,
    paragraph_artical:content_input.value,
    image_artical:uploud_image.value,
}),
headers:{
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((res)=>res.json())
.then((data)=>
    console.log(data),

event.preventDefault(),

)


})


let urlget="https://66e7e69bb17821a9d9da6eb2.mockapi.io/Artical"

let title_artical= document.getElementById("title-artical") 
let paragraph_artical=document.getAnimations("paragraph-artical")
let image_artical=document.getElementById("image-artical")


fetch(urlget)
.then(res=>res.json())
.then(data=>{
    data.map(item=>{
        title_artical.textContent=item.title_artical
        paragraph_artical.textContent=item.paragraph_artical
        image_artical.src = item.image_artical
    })
    
    console.log(data);
})




