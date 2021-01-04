window.addEventListener("DOMContentLoaded", (e)=>{
   var inputs = document.querySelectorAll('input')
   var raz = document.getElementById('raz')
   raz.addEventListener("click", ()=>{
      inputs.forEach(actualInput => {actualInput.value = ""})
   })
})