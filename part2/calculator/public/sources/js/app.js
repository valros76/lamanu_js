var calculator_view = document.getElementById("calculator-view")
var calculator_btns = document.querySelectorAll(".btn-calculator")
calculator_view.value = "0"
var equality = false
let showInput = (input) => {
   if (Number(calculator_view.value) === 0) {
      calculator_view.value = input
   } else if (equality === true) {
      calculator_view.value = calculator_view.value
   } else {
      calculator_view.value += input
   }
}

let calcResult = (operator, n1, n2) => {
   var result
   n1 = Number(n1)
   n2 = Number(n2)
   switch (operator) {
      case "add":
         result = n1 + n2
         calculator_view.value = result
         break
      case "substract":
         result = n1 - n2
         calculator_view.value = result
         break
      case "multiply":
         result = n1 * n2
         calculator_view.value = result
         break
      case "divide":
         result = n1 / n2
         calculator_view.value = result
         break
      default:
         console.log(`Operator : ${operator}, n1 : ${n1}, n2 : ${n2}`)
   }
}

let keyboardCalc = (btn, action, displayNum, previousKeyType) => {
   switch (action) {
      case "clear":
         calculator_view.value = ""
         calculator_view.dataset.previousKeyType = 'clear'
         equality = false
         break
      case "decimal":
         showInput(btn.textContent)
         calculator_view.dataset.previousKeyType = 'decimal'
         break
      case "add":
      case "substract":
      case "divide":
      case "multiply":
         if(calculator_view.dataset.previousKeyType != "operator"){
            calculator_view.dataset.firstValue = calculator_view.value
            calculator_view.dataset.operator = action
            calculator_view.dataset.previousKeyType = "operator"
            calculator_view.value = ""
            equality = false
         }
         break
      case "equal":
         const n1 = calculator_view.dataset.firstValue
         const operator = calculator_view.dataset.operator
         const n2 = displayNum
         if (calculator_view.dataset.previousKeyType != "equal") {
            calcResult(operator, n1, n2)
            equality = true
         }
         calculator_view.dataset.previousKeyType = "equal"
         break
      default:
         if (previousKeyType === 'operator') {
            showInput(btn.textContent)
         } else {
            showInput(btn.textContent)
         }
         calculator_view.dataset.previousKeyType = 'number'
   }
}

calculator_btns.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      e.preventDefault()
      const action = btn.dataset.action
      var displayNum = calculator_view.value
      const previousKeyType = calculator_view.dataset.previousKeyType
      keyboardCalc(btn, action, displayNum, previousKeyType)
   })
})

document.addEventListener("keyup", (e) => {
   console.log(e.code)
   calculator_btns.forEach((btn) => {
      switch (e.code) {
         case "Numpad0":
            if (btn.dataset.btn === "0") {
               btn.click()
            }
            break
         case "Numpad1":
            if (btn.dataset.btn === "1") {
               btn.click()
            }
            break
         case "Numpad2":
            if (btn.dataset.btn === "2") {
               btn.click()
            }
            break
         case "Numpad3":
            if (btn.dataset.btn === "3") {
               btn.click()
            }
            break
         case "Numpad4":
            if (btn.dataset.btn === "4") {
               btn.click()
            }
            break
         case "Numpad5":
            if (btn.dataset.btn === "5") {
               btn.click()
            }
            break
         case "Numpad6":
            if (btn.dataset.btn === "6") {
               btn.click()
            }
            break
         case "Numpad7":
            if (btn.dataset.btn === "7") {
               btn.click()
            }
            break
         case "Numpad8":
            if (btn.dataset.btn === "8") {
               btn.click()
            }
            break
         case "Numpad9":
            if (btn.dataset.btn === "9") {
               btn.click()
            }
            break
         case "NumpadDivide":
            if (btn.dataset.btn === "divide") {
               btn.click()
            }
            break
         case "NumpadMultiply":
            if (btn.dataset.btn === "multiply") {
               btn.click()
            }
            break
         case "NumpadSubtract":
            if (btn.dataset.btn === "substract") {
               btn.click()
            }
            break
         case "NumpadAdd":
            if (btn.dataset.btn === "add") {
               btn.click()
            }
            break
         case "NumpadEnter":
            if (btn.dataset.btn === "equal") {
               btn.click()
            }
            break
         case "Backspace":
         case "Delete":
            if (btn.dataset.btn === "clear") {
               btn.click()
            }
            break
         default:
            console.log(e.code)
      }
   })
})