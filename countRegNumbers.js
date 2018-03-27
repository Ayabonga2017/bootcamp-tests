var countRegNumbers = function (registration){
  var regN=registration.split(", ");
 var regnumber= [];

  for (var i=0;i<regN.length;i++){
    if(regN[i].startsWith("CJ")){
       regnumber.push(regN[i])

  }
}
  return regnumber.length;
}
