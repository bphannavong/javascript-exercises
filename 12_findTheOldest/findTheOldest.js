const findTheOldest = function(people) {
    return people.reduce((oldest, current) => ((getAge(oldest) > getAge(current)) ? oldest : current));
}

   
function getAge(person) {
    if ('yearOfDeath' in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    return (new Date().getFullYear()) - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
