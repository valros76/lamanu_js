window.addEventListener("DOMContentLoaded", (e)=>{
   var lastName = document.getElementById('lastname')
   var message = "Merci de votre participation"
   lastName.addEventListener("blur", ()=>{
      alert(message)
   })
})