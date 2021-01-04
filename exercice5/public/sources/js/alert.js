window.addEventListener("DOMContentLoaded", (e)=>{
   let calc = (first,second)=>{
   var result = Math.trunc(first) * second
   return result
   }
   var submit_btn = document.getElementById("submit")
   submit_btn.addEventListener("click", (e) => {
      e.preventDefault()
      var result = document.getElementById("result")
      var first = parseFloat(document.getElementById("first").value)
      var second = parseFloat(document.getElementById("second").value)
      result.textContent = calc(first,second)
   })
})