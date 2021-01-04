window.addEventListener("DOMContentLoaded", (e)=>{
   var resultat = document.getElementById("resultat")
   var submit = document.getElementById('submit')
   submit.addEventListener("click", (e)=>{
      e.preventDefault()
      var first = parseFloat(document.getElementById('firstNumber').value)
      var second = parseFloat(document.getElementById('secondNumber').value)
      var result = (first % second)
      resultat.textContent = result
   })
})