const country = "United States";
const continent = "North America";
const population = "350 Million?";

console.log(country);
console.log(continent);
console.log(population);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// Test Data 1
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

const markBMI1 = (markWeight1 / (markHeight1 * markHeight1)).toFixed(2);
const johnBMI1 = (johnWeight1 / (johnHeight1 * johnHeight1)).toFixed(2);

console.log(`Mark BMI 1: ${markBMI1}`);
console.log(`John BMI 1: ${johnBMI1}`);

const markHigherBMI1 = true;

if (markHigherBMI1 === true) {
  console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})`);
} else {
  console.log(null);
}

// Test Data 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = (markWeight2 / (markHeight2 * markHeight2)).toFixed(2);
const johnBMI2 = (johnWeight2 / (johnHeight2 * johnHeight2)).toFixed(2);

console.log(`Mark BMI 2: ${markBMI2}`);
console.log(`John BMI 2: ${johnBMI2}`);

const markHigherBMI2 = false;

if (markHigherBMI2 === false) {
  console.log(`Mark's BMI (${markBMI2}) is lower than John's (${johnBMI2})`);
} else {
  console.log(null);
}

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
