window.addEventListener("DOMContentLoaded", (e)=>{
   var first = parseFloat(prompt('Entrez un nombre décimal : '))
   var second = parseFloat(prompt('Entrez un deuxième nombre décimal : '))
   var result = Math.trunc(first) * second
   alert(`Résultat : ${result}`)
})