window.addEventListener("DOMContentLoaded", (e)=>{
   var resultat = document.getElementById("resultat")
   var submit = document.getElementById('submit')
   submit.addEventListener("click", (e)=>{
      e.preventDefault()
      var first = parseFloat(document.getElementById('firstNumber').value)
      var second = parseFloat(document.getElementById('secondNumber').value)
      var result = (first % second)
      if(first != 0 && second != 0){
         resultat.textContent = result
      }else{
         resultat.textContent = "0 ne peut pas être utilisé pour la division"
      }
   })
})