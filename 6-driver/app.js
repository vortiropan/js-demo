const hasLicence = false;
const age = 20;
const isDrink = false;

let dryverAvtoDostup = hasLicence && age >= 18 && !isDrink;

console.log(`${dryverAvtoDostup ? 'Может': 'Не может'}`)