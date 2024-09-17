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

