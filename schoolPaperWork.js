//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  
    let a = n * m
    if(n <= -1 || m <= -1){
      a = 0
    }
      
    return a
    
  }
  