// In the case of Peter's House

const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSize = 100;
const peterActualPrice = 2500000;


const peterVolume = peterWidth * peterDepth * peterHeight;
console.log("Peter's House Volume: " + peterVolume);


// According to the prodived formula

const peterEstimatePrice = peterVolume * 2.5 * 1000 + peterGardenSize * 300;
console.log("Peter's House Estimated Price: " + peterEstimatePrice);


// In the case of Julia's House 

const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGardenSize = 70;
const juliaActualPrice = 1000000;

const juliaVolume = juliaWidth * juliaDepth * juliaHeight;
console.log("Julia's House Volume: " + juliaVolume);

const juliaEstimatePrice = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;
console.log("Julia's House Estimate Price: " + juliaEstimatePrice);



// Comparing Peter's paid price with the estimated price 

if (peterActualPrice > peterEstimatePrice) {
    console.log("Peter paid more than estimated price.");
} else if (peterActualPrice < peterEstimatePrice) {
    console.log("peter paid less than estimated price.");
} else {
    console.log("Peter paid the right price.");
}


// Comparing Julia's paid price with the estimate price 

if (juliaActualPrice > juliaEstimatePrice) {
    console.log("Julia paid more than the estimated price.");
} else if (juliaActualPrice < juliaEstimatePrice) {
    console.log("Julia paid less than the estimated price.");
} else {
    console.log("Julia paid the right price.");
}