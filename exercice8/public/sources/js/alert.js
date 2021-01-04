window.addEventListener("DOMContentLoaded", (e)=>{
   var submit = document.getElementById('submit')
   submit.addEventListener("click", (e)=>{
      var age = parseInt(document.getElementById('age').value)
      console.log(age)
      if(age < 18){
         alert("Vous êtes mineur.")
      }else{
         alert("Vous êtes majeur.")
      }
   })
})