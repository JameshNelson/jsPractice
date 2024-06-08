//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
//you need to return the other complementary side. 
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).


function dnaStrand(dna){
  
    dna = dna.split(""); 
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === "A"){
        dna[i] = "T";
      }
      
      else if(dna[i] === "T"){
        dna[i] = "A"
      }
      
      else if(dna[i] === "C"){
        dna[i] = "G"
      }
      
      else if (dna[i] === "G"){
        dna[i] = "C"
      }
    }
    return dna.join("")
  }