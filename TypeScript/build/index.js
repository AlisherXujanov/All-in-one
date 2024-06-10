"use strict";
console.log('------------------------------------------------------');
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
let currentDirection = CardinalDirections.South;
// North is the first value so it logs '0'
console.log(currentDirection);
// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North'; 
// Error: "North" is not assignable to type 'CardinalDirections'.
