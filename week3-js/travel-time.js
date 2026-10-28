


// Travel time calculation

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};


function calculateTravelTime(travelInformation) {
    const totalHours = travelInformation.destinationDistance/travelInformation.speed;
    const hours = Math.floor(totalHours);
    const minutes = Math.floor((totalHours-hours) * 60);

    return `${hours} hours and ${minutes} minutes`;
} 



const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);





