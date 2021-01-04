window.addEventListener("DOMContentLoaded", (e)=>{
   var submit = document.getElementById('submit')
   submit.addEventListener("click", (e)=>{
      var shoeSize = Number(document.getElementById('shoeSize').value)
      var yearOfBirth = Number(document.getElementById('yearOfBirth').value)
      var result = ((((shoeSize * 2) + 5) * 50) - yearOfBirth) + 1776
      alert(`Résultat : ${result}`)
   })
})