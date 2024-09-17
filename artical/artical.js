let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/Artical"

let title_artical= document.getElementById("title-artical") 
let paragraph_artical=document.getAnimations("paragraph-artical")
let image_artical=document.getElementById("image-artical")



fetch(url)
.then(res=>res.json())
.then(data=>{console.log(data);
})

