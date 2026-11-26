const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);



const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let dogYear;
const shouldShowResultInDogYears = false;

dogYear = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears) {
    console.log(`YOur dog will be ${dogYear * 7} dog years old in ${dogYearFuture}.`);
} else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}.`);
    
}