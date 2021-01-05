var counter = document.getElementById("count-number")
var incrementation = document.getElementById("incrementation")
var decrementation = document.getElementById("decrementation")

let count = 0

let rndNbr = (min, max)=>{
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min +1)) + min;
}
document.body.style.backgroundColor = `rgba(255,60,${rndNbr(0,125)},1)`

let increment = (count) => {
   count += 1
   counter.classList.toggle("fade-out")
   counter.textContent = count
   counter.classList.toggle("fade-in")
   setTimeout(() => {
      counter.classList.toggle("fade-out")
      counter.classList.toggle("fade-in")
   }, 150);
}

let decrement = () => {
   if (count > 0) {
      count--
   } else {
      count = 0
   }
   counter.classList.toggle("fade-out")
   counter.textContent = count
   counter.classList.toggle("fade-in")
   setTimeout(() => {
      counter.classList.toggle("fade-out")
      counter.classList.toggle("fade-in")
   }, 150);
}

incrementation.addEventListener("click", () => {
   count = parseInt(counter.textContent)
   increment(count)
})
decrementation.addEventListener("click", () => {
   count = parseInt(counter.textContent)
   decrement(count)
})

document.addEventListener("keyup", (e) => {
   switch (e.code) {
      case "ArrowRight":
      case "KeyD":
      case "ArrowUp":
      case "KeyW":
         incrementation.click()
         break;
      case "ArrowLeft":
      case "KeyA":
      case "ArrowDown":
      case "KeyS":
         decrementation.click()
         break;
      default:

   }
})