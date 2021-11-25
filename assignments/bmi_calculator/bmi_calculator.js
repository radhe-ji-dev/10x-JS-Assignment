// This function should return the BMI for a person
function BMICalculator(mass, height) {
  var bmi = mass / (height * height);

  if (height == 0 || mass == 0) {
    return "INVALID INPUT";
  } else {
    return bmi;
  }
}

module.exports = BMICalculator;
