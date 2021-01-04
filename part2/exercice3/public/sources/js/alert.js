window.addEventListener("DOMContentLoaded", (e)=>{
   var lastName = document.getElementById('lastname')
   lastName.addEventListener("keyup", ()=>{
      alert(lastname.value)
   })
})