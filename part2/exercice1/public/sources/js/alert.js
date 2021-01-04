window.addEventListener("DOMContentLoaded", (e)=>{
   var img1 = document.getElementById('image1')
   img1.classList.add("image1")
   var srcImg1 = "public/assets/images/image1.jpg"
   var srcImg2 = "public/assets/images/image1_2.jpg"
   var defaultSrc = srcImg1
   function toggleImg(target){
      img1.classList.toggle("image1")
      if(target.classList.contains("image1")){
         target.src = srcImg1
      }else{
         target.src = srcImg2
      }
   }
   img1.addEventListener("mouseover", ()=>{
      img1.style.cursor = "pointer"
      toggleImg(img1)
   })
   img1.addEventListener("mouseleave", ()=>{
      toggleImg(img1)
   })
})