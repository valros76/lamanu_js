let rndNbr = (min, max)=>{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1)) + min;
}
let randomNbr = rndNbr(1,50)
alert("Lancé de dés : " + randomNbr);