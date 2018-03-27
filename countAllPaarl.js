var countAllPaarl = function (registration){
  var regN=registration.split(", ");
 var regstartingwithCJ= [];

  for (var i=0;i<regN.length;i++){
    if(regN[i].startsWith("CJ")){
       regstartingwithCJ.push(regN[i])

  }
}
  return regstartingwithCJ.length;
}
