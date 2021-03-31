function MathChallenge(str) { 
    var totel=0;
    var reg=/^\d+(\.*\d{0,2})([+*/-]\d+(\.*\d{0,2}))+$/;
    // var str=str.match(/[+\-]*(\.\d+|\d+(\.d+)?)/g)||[];
    var str=str.match(/^\d+(\.*\d{0,2})([+*/-]\d+(\.*\d{0,2}))+$/);
    console.log(str);
    while(str.length){
      totel+=parseFloat(str.shift());
    }
    // code goes here  
    return totel; 
  
  }

  


console.log(MathChallenge("6 *（4/2）+ 3 * 1)"));
console.log(MathChallenge("6 / 3-1)"));

