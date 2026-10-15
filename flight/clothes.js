function getClothesToWear(temperature) {
    if (temperature < 2) {
        return "Wear suitable whatever you have.";
    } else if (temperature >= 2 && temperature <= 7) {
        return "Need to wear Jackets and gloves";
    } else if (temperature >=8 && temperature <= 14) {
        return "Need to wear long pants with long sleeve and sweater";
    } else {
        return "Wear half pants and T-shirt with sunglasses";
    }
}

const clothesToWear1 = getClothesToWear(5);
console.log(clothesToWear1);

const clothesToWear2 = getClothesToWear(20);
console.log(clothesToWear2);

const clothesToWear3 = getClothesToWear(12);
console.log(clothesToWear3);

const clothesToWear4 = getClothesToWear(1);
console.log(clothesToWear4);
