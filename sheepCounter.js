function countSheeps(sheep) {
    let SheepCounter = 0
    for(let i = 0; i < sheep.length; i++){
      if (sheep[i] === true){
        SheepCounter++
      }
      
    }
    return SheepCounter
  }