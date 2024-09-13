function calculateBMI(event) {

    event.preventDefault();

    let heightInputFeet = Number(document.querySelector("#heightInputFeet").value);
    let heightInputInch = Number(document.querySelector("#heightInputInch").value);
    let weightInputKg = Number(document.querySelector("#weightInputKg").value);

    heightInputInch += heightInputFeet * 12;

    let heightInMeter = (heightInputInch * 2.54) / 10;
    let heightInMeterSq = heightInMeter * heightInMeter;
    let bodyMassIndex = weightInputKg / heightInMeterSq;

    let title = "";
    if (bodyMassIndex > 30) {
        title = "obese";
    }
    else if (bodyMassIndex > 25) {
        title = "Overweight";
    }
    else if (bodyMassIndex > 18.5) {
        title = "Normal";
    }
    else {
        title = "Underweight";
    }
}