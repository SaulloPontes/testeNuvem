
function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}


function caraOuCoroa(){
  var moeda = numeroAleatorio(1,3)
  if(moeda==1){
      
      return 'cara'
  }else{
      return 'coroa'
  }
}





module.exports={
    numeroAleatorio,
    caraOuCoroa
}