window.addEventListener("DOMContentLoaded", (e)=>{
   var submit = document.getElementById('submit')
   submit.addEventListener("click", (e)=>{
      var first = parseFloat(document.getElementById('firstNumber').value)
      var second = parseFloat(document.getElementById('secondNumber').value)
      var result = (first % second)
      alert(`Résultat : ${result}`)
   })
})