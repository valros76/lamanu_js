window.addEventListener("DOMContentLoaded", (e) => {
   var user_nbr = document.getElementById("user-nbr")
   var submit_btn = document.getElementById("gameform-submit")
   var reset_btn = document.getElementById("gameform-reset")
   var gameform = document.getElementById("gameform")
   var nbr_tests = document.getElementById("nbr-tests")
   var last_test = document.getElementById("last-test")
   var result = document.getElementById("result")
   var annonce = document.getElementById("annonce-resultat")
   var main = document.querySelector(".main-content")
   var last_user_nbr = 0
   let count_tests = 0
   const main_initial_color = main.style.backgroundColor

   let rndNbr = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   var final_number = rndNbr(0, 100)

   submit_btn.addEventListener("click", (e) => {
      e.preventDefault()
      let user_value = parseInt(user_nbr.value)
      count_tests++
      if (user_nbr.value != "" && (count_tests <= 10)) {
         nbr_tests.textContent = count_tests
         last_user_nbr = user_nbr.value
         last_test.textContent = last_user_nbr
         if (user_nbr.value < (final_number - 5)) {
            annonce.textContent = "Trop petit !"
            main.style.backgroundColor = "red"
         } else if (user_value > (final_number - 5) && user_value < final_number) {
            annonce.textContent = "Un peu plus grand !"
            main.style.backgroundColor = "orange"
         }
         else if ((user_value < (final_number + 5)) && user_value > (final_number)) {
            annonce.textContent = "Un peu plus petit !"
            main.style.backgroundColor = "orange"
         } else if (user_value > (final_number + 5)) {
            annonce.textContent = "Trop grand !"
            main.style.backgroundColor = "red"
         } else if (user_value === final_number) {
            annonce.textContent = `Bravo, le résultat était ${final_number} !`
            submit_btn.setAttribute("disabled", true)
            main.style.backgroundColor = "lime"
         }
         user_nbr.value = ""
      } else if (user_nbr.value != "" && (count_tests > 10)) {
         user_nbr.value = ""
         annonce.textContent = `Perdu, avez utilisé trop d'essais !`
         setTimeout(() => {
            main.style.backgroundColor = "firebrick"
         }, 300)
         result.textContent = final_number
      } else {
         last_user_nbr = last_test.textContent
      }
   })

   reset_btn.addEventListener("click", (e) => {
      e.preventDefault()
      submit_btn.classList.add("fade-in")
      user_nbr.value = ""
      final_number = rndNbr(0, 100)
      nbr_tests.textContent = 0
      last_test.textContent = 0
      result.textContent = "N/A"
      annonce.textContent = "Nouvelle partie en cours"
      main.style.backgroundColor = main_initial_color
      count_tests = 0
      setTimeout(() => {
         submit_btn.classList.remove("fade-in")
         submit_btn.removeAttribute("disabled")
      }, 750)
   })

   document.addEventListener("keyup", (e) => {
      switch (e.code) {
         case "Enter":
            submit_btn.click()
            break;
         default:
      }
   })
})