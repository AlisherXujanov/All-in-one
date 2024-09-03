// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to 
// travel from the ith station to its next (i + 1)th station. You begin the journey 
// with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index 
// if you can travel around the circuit once in the clockwise direction, otherwise 
// return -1. If there exists a solution, it is guaranteed to be unique.


// --------------------------------------------------------------------------------
// Example 1:
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// --------------------------------------------------------------------------------
// Example 2:
// Input: gas = [2,3,4], cost = [3,4,3]
// Output: -1
// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// Therefore, you can't travel around the circuit once no matter where you start.

// --------------------------------------------------------------------------------
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// Function to check if it is possible to complete the circuit
// Переводиться как "может завершить маршрут"
var canCompleteCircuit = function (gas, cost) {  
    let totalGas = 0; // Total amount of gas at all stations
    let totalCost = 0; // Total cost of traveling between stations
    let tank = 0; // Current gas in the tank
    let start = 0; // Starting station index

    for (let i = 0; i < gas.length; i++) { // Loop through all the gas stations
        totalGas += gas[i]; // Add the gas at the current station to the total gas
        totalCost += cost[i]; // Add the cost of traveling to the next station to the total cost
        tank += gas[i] - cost[i]; // Update the current gas in the tank

        if (tank < 0) { // If the tank is empty
            start = i + 1; // Update the starting station index to the next station
            tank = 0; // Reset the tank to 0
        }
    }

    return totalGas < totalCost ? -1 : start; // If the total gas is less than the total cost, return -1. Otherwise, return the starting station index.
};