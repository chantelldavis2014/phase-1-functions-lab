// function distanceFromHqInBlocks (pickUpLocation) {
//     if (pickUpLocation<42){
//       return(42-pickUpLocation);
//     }
//     else {
  
//     return(pickUpLocation-42);
//   }
//   }
  
//   console.log(distanceFromHqInBlocks (40))
  
//   function distanceFromHqInFeet (someValue) {
//     return distanceFromHqInBlocks(someValue)*264;

//   }
  
  function distanceTravelledInFeet(startStreet,endSteet){
    if (endSteet>startStreet){
      return((endSteet-startStreet)*264);
    }
    else
      return((startStreet-endSteet)*264);
  }
  
  
//   function calculatesFarePrice(start,destination){
//     let distance = distanceTravelledInFeet(start,destination);
//     if (distance<= 400){
//       return 0;
//     }
//     if (distance>=400 && distance <= 2000){
//       return (distance-400)* 0.02;
//     }
//     else if(distance>=2000 && distance <= 2500){
//       return 25;
//     }
//     else if (distance > 2500){
//       return "cannot travel that far";
//     }
//   }

function distanceFromHqInBlocks(pickUpLocation){
  if (pickUpLocation < 42){
  return (42 - pickUpLocation)
}
else 
 return (pickUpLocation - 42)
}

function distanceFromHqInFeet(pickUpLocation){
   return distanceFromHqInBlocks(pickUpLocation * 264)
}

// function distanceTravelledInFeet(startStreet, endSteet);{
//   if (endStreet > startStreet){
//   return ((endSteet - startStreet)* 264);
//   }
//     else 
//     return ((startStreet - endSteet)* 264);
  
// }






