
let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"


let user_name= document.getElementById("user-name")
let email_em= document.getElementById("Email-em")
let pass= document.getElementById("passwor")
let first_name= document.getElementById("fname")
let form= document.getElementById("formid")




   
    form.addEventListener("submit",(event)=>{

fetch(url, {
    method:'POST',
    body: JSON.stringify({
        username:user_name.value,
        email:email_em.value,
        password:pass.value,
        fname:first_name.value,


    }),
    headers:{
         'Content-type':'application/JSON; charset=UTF-8'
    
},
})
.then((res)=>res.json())
.then((data)=>
    console.log(data),
Swal.fire({
    title: 'Success!',
    text: 'You have signed up successfully!',
    icon: 'success',
    confirmButtonText: 'OK'
}),
event.preventDefault(),

)


})



