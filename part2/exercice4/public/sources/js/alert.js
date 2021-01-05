window.addEventListener("DOMContentLoaded", (e)=>{
   var inputs = document.querySelectorAll('input')
   console.log(inputs)
   var raz = document.getElementById('raz')
   raz.addEventListener("click", ()=>{
      inputs.forEach(actualInput => {actualInput.value = ""})
   })
})