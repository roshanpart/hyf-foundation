function getFullName(firstName, surname, useFormalName = false, gender) {
    if (firstName === "" && surname === "") {
        return "";
    } else if (useFormalName === true) {
        if (gender === "male") {
            return "Lord " + firstName + " " + surname;
        } else if (gender === "female") {
            return "Lady " + firstName + " " + surname;
        }
    } else return firstName + " " + surname;
}

const fullName1 = getFullName("Benjamin", "Hughes", true, "male");
const fullName2 = getFullName("Roshan", "Subedi");
const fullName3 = getFullName("Sophie", "Lara", true, "female");

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);