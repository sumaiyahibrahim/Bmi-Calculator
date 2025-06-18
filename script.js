function calculateBMI() {
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);
  const resultDiv = document.getElementById("result");
 
  if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
    resultDiv.innerText = "Please enter valid weight and height!";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultDiv.innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
