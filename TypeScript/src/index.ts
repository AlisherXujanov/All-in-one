console.log('------------------------------------------------------')

enum CardinalDirections {
    North,
    East,
    South,
    West
  };
              
  let currentDirection = CardinalDirections.South;
  
  // North is the first value so it logs '0'
  console.log(currentDirection);
  
  // throws error when commented in as 'North' is not a valid enum
  // currentDirection = 'North'; 
  // Error: "North" is not assignable to type 'CardinalDirections'.