// Code your solution in this file!
const headquarters = 42;
let blocks = 0;

function distanceFromHqInBlocks(pickupLocation){
    blocks = Math.abs(pickupLocation - headquarters);
    return blocks;
}

function distanceFromHqInFeet(pickupLocation){
   distanceFromHqInBlocks(pickupLocation);   
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500){
        return 25;
    } else {
        return 'cannot travel that far';    
    }
}