window.addEventListener("DOMContentLoaded", (e)=>{
   var container = document.getElementById('img-container')
   var images = document.querySelectorAll('img')
   var imgPaths = []
   images.forEach(img => {
      imgPaths.push(img.src)
      console.log(imgPaths)
      img.style.display = "none"
   })
   var defaultImg = imgPaths[0]
   var preview = document.createElement("img")
   preview.src = defaultImg
   preview.alt = "Default Preview"
   container.appendChild(preview)
   let counter = 0
   function dynamicContainer(count){
      preview.src = imgPaths[count]
      console.log(preview.src)
   }
   preview.addEventListener("mouseover", (e)=>{
      e.preventDefault()
      if(counter >= 0 && counter < (imgPaths.length - 1)){
         counter++
      }else{
         counter = 0
      }
      dynamicContainer(counter)
   })
})