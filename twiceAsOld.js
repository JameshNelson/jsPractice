/*Your function takes two arguments:

current father's age (years)
current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/


function twiceAsOld(dadYearsOld, sonYearsOld) {
    let ageCounter = 0
    let dadAge = dadYearsOld
  
    for(let i = 0; i < dadYearsOld; i++){
      
      if(sonYearsOld === 0){
        return dadAge;
      }
      
      else if(dadAge === sonYearsOld * 2){
        return ageCounter
      }
  
      else if(dadAge < sonYearsOld * 2){
        dadAge += 1
        ageCounter += 1
      }
  
      else if(dadAge > sonYearsOld * 2){
        dadAge -= 1
        ageCounter += 1
      }
    }
}

    //Better code example 

    /*
    function twiceAsOld(dadYearsOld, sonYearsOld) {
        return Math.abs(dadYearsOld - 2 * sonYearsOld);
      }
      */