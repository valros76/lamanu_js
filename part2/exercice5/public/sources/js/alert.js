window.addEventListener("DOMContentLoaded", (e)=>{
   var images = document.querySelectorAll('img')
   let changeSrc = (actualImg)=>{
      const searchTerm = "_2"
      var presence = actualImg.src.indexOf(searchTerm)
      if(presence === -1){
         actualImg.src = actualImg.src.replace(".jpg", "_2.jpg")
      }else{
         actualImg.src = actualImg.src.replace("_2.jpg", ".jpg")
      }
      
   }
   images.forEach(img => {
      img.addEventListener("mouseover", (e)=>{
         e.preventDefault()
         changeSrc(img)
      })
   })
})