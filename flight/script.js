function getFullName(firstName, surname, useFormalName = false) {
    
    const fullName = (firstName + " " + surname).trim();

    if (fullName === "") {
        return "";
    }

    if (useFormalName) {
        return "Lord " + fullName;
    }

    return fullName;

}

const fullName1 = getFullName("Benjamin", "Hughes", true);

const fullName2 = getFullName("Benjamin", "Hughes", false);

const fullName3 = getFullName("Benjamin", "Hughes");

const fullName4 = getFullName("", "Hughes");

const fullName5 = getFullName("", "");

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);


